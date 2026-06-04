#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import { globby } from 'globby';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, '../docs');
const VERSION_FILE = path.join(DOCS_DIR, 'translation-version.json');
const TEMP_DIR = path.join(__dirname, '../../.temp');
const REPORT_FILE = path.join(TEMP_DIR, 'docs-translation-report.md');
const NEXT_BRANCH = 'next';

console.log(chalk.blue('========================================'));
console.log(chalk.blue('  文档翻译更新检查工具'));
console.log(chalk.blue('========================================\n'));

function runGitCommand(cmd, options = {}) {
  try {
    return execSync(cmd, {
      encoding: 'utf-8',
      cwd: path.join(__dirname, '../../'),
      ...options,
    }).trim();
  } catch (error) {
    return null;
  }
}

function getLatestCommit(branch) {
  return runGitCommand(`git rev-parse ${branch}`);
}

function getCommitDate(commit) {
  return runGitCommand(`git show -s --format=%ci ${commit}`);
}

function readVersionFile() {
  if (!fs.existsSync(VERSION_FILE)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(VERSION_FILE, 'utf-8'));
  } catch {
    return null;
  }
}

function getFilesInCommit(commit, dir) {
  const files = runGitCommand(`git show --name-only --pretty=format: ${commit} -- "${dir}"`);
  if (!files) return [];
  return files.split('\n').filter(f => f && (f.endsWith('.md') || f.endsWith('.njk')));
}

function getFilesChangedBetweenCommits(oldCommit, newCommit, dir) {
  const diff = runGitCommand(`git diff --name-status ${oldCommit}..${newCommit} -- "${dir}"`);
  if (!diff) return [];
  
  return diff.split('\n').filter(Boolean).map(line => {
    const parts = line.split('\t');
    const status = parts[0];
    const filePath = parts[1];
    
    if (status.startsWith('R')) {
      return { status: 'renamed', from: parts[1], to: parts[2] };
    }
    return {
      status: status === 'A' ? 'added' : status === 'D' ? 'deleted' : 'modified',
      path: filePath
    };
  }).filter(f => f.path && (f.path.endsWith('.md') || f.path.endsWith('.njk')));
}

function getFileDiff(oldCommit, newCommit, filePath) {
  return runGitCommand(`git diff ${oldCommit}..${newCommit} -- "${filePath}"`);
}

async function main() {
  // 1. 读取当前版本记录
  const versionInfo = readVersionFile();
  
  if (!versionInfo) {
    console.log(chalk.yellow('⚠️  未找到翻译版本记录文件'));
    console.log(chalk.gray('   请先运行: npm run docs:set-version\n'));
    process.exit(0);
  }

  console.log(chalk.gray(`当前翻译基准: ${versionInfo.commit.substring(0, 8)} (${versionInfo.date})`));

  // 2. 获取 next 分支最新 commit
  const latestCommit = getLatestCommit(NEXT_BRANCH);
  if (!latestCommit) {
    console.log(chalk.red('❌ 无法获取 next 分支的最新 commit'));
    process.exit(1);
  }

  // 3. 检查 commit 是否相同
  if (latestCommit === versionInfo.commit) {
    console.log(chalk.green('✅ next 分支没有新的更新\n'));
    process.exit(0);
  }

  const latestDate = getCommitDate(latestCommit);
  console.log(chalk.yellow(`🔄 next 分支有更新: ${latestCommit.substring(0, 8)} (${latestDate})\n`));

  // 4. 检查 docs 目录的变更
  const changes = getFilesChangedBetweenCommits(versionInfo.commit, latestCommit, DOCS_DIR);
  
  if (changes.length === 0) {
    console.log(chalk.green('✅ docs 目录没有变更\n'));
    process.exit(0);
  }

  // 5. 生成报告
  console.log(chalk.bold(`📝 发现 ${changes.length} 个变更:\n`));

  const addedFiles = changes.filter(c => c.status === 'added');
  const deletedFiles = changes.filter(c => c.status === 'deleted');
  const modifiedFiles = changes.filter(c => c.status === 'modified');
  const renamedFiles = changes.filter(c => c.status === 'renamed');

  // 控制台输出
  if (addedFiles.length > 0) {
    console.log(chalk.green.bold(`✨ 新增文件 (${addedFiles.length}):`));
    addedFiles.forEach(f => console.log(chalk.green(`   + ${f.path}`)));
    console.log('');
  }

  if (deletedFiles.length > 0) {
    console.log(chalk.red.bold(`🗑️  删除文件 (${deletedFiles.length}):`));
    deletedFiles.forEach(f => console.log(chalk.red(`   - ${f.path}`)));
    console.log('');
  }

  if (renamedFiles.length > 0) {
    console.log(chalk.blue.bold(`📛 重命名文件 (${renamedFiles.length}):`));
    renamedFiles.forEach(f => console.log(chalk.blue(`   ${f.from} → ${f.to}`)));
    console.log('');
  }

  if (modifiedFiles.length > 0) {
    console.log(chalk.yellow.bold(`🔄 修改文件 (${modifiedFiles.length}):`));
    modifiedFiles.forEach(f => console.log(chalk.yellow(`   ~ ${f.path}`)));
    console.log('');
  }

  // 生成 Markdown 报告
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  let report = `# 文档翻译更新报告\n\n`;
  report += `- 基准版本: ${versionInfo.commit} (${versionInfo.date})\n`;
  report += `- 最新版本: ${latestCommit} (${latestDate})\n`;
  report += `- 生成时间: ${new Date().toISOString()}\n\n`;
  report += `---\n\n`;

  if (addedFiles.length > 0) {
    report += `## ✨ 新增文件 (${addedFiles.length})\n\n`;
    addedFiles.forEach(f => {
      report += `- ${f.path}\n`;
    });
    report += '\n';
  }

  if (deletedFiles.length > 0) {
    report += `## 🗑️ 删除文件 (${deletedFiles.length})\n\n`;
    deletedFiles.forEach(f => {
      report += `- ${f.path}\n`;
    });
    report += '\n';
  }

  if (modifiedFiles.length > 0) {
    report += `## 🔄 修改文件 (${modifiedFiles.length})\n\n`;
    for (const f of modifiedFiles) {
      report += `### ${f.path}\n\n`;
      report += '```diff\n';
      const diff = getFileDiff(versionInfo.commit, latestCommit, f.path);
      if (diff) {
        report += diff;
      } else {
        report += '(无法获取 diff)\n';
      }
      report += '\n```\n\n';
    }
  }

  fs.writeFileSync(REPORT_FILE, report);
  console.log(chalk.gray(`📄 详细报告已保存到: ${REPORT_FILE}\n`));

  console.log(chalk.yellow.bold('💡 下一步:'));
  console.log(chalk.gray('   1. 查看并翻译更新的内容'));
  console.log(chalk.gray('   2. 翻译完成后运行: npm run docs:set-version\n'));
}

main().catch(err => {
  console.error(chalk.red('❌ 错误:', err));
  process.exit(1);
});
