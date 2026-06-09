#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, '../docs');
const DOCS_DIR_REL = 'webawesome/docs';
const DOCS_DIR_REL_FULL = 'packages/webawesome/docs';
const VERSION_FILE = path.join(DOCS_DIR, 'translation-version.json');
const TEMP_DIR = path.join(__dirname, '../../.temp');
const REPORT_FILE = path.join(TEMP_DIR, 'docs-translation-report.md');
const NEXT_BRANCH = 'next';

console.log(chalk.blue('========================================'));
console.log(chalk.blue('  文档翻译更新检查工具'));
console.log(chalk.blue('========================================\n'));

function getLatestCommit(branch) {
  try {
    return execSync(`git rev-parse ${branch}`, {
      encoding: 'utf-8',
      cwd: path.join(__dirname, '../../'),
    }).trim();
  } catch {
    return null;
  }
}

function getCommitDate(commit) {
  try {
    return execSync(`git show -s --format=%ci ${commit}`, {
      encoding: 'utf-8',
      cwd: path.join(__dirname, '../../'),
    }).trim();
  } catch {
    return null;
  }
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

function getFilesChangedBetweenCommits(oldCommit) {
  try {
    // 获取两个 commit 的文件列表
    const getFiles = (commit) => {
      const cmd = `git ls-tree -r ${commit} --name-only`;
      const output = execSync(cmd, {
        encoding: 'utf-8',
        cwd: path.join(__dirname, '../../')
      });
      return new Set(output.split('\n').filter(f =>
        f &&
        f.startsWith(DOCS_DIR_REL) &&
        (f.endsWith('.md') || f.endsWith('.njk'))
      ).map(f => f.replace(/^webawesome\//, 'packages/webawesome/')));
    };

    const oldFiles = getFiles(oldCommit);
    const newFiles = getFiles(NEXT_BRANCH);

    const changes = [];

    // 找出新增的文件
    for (const f of newFiles) {
      if (!oldFiles.has(f)) {
        changes.push({ status: 'added', path: f });
      }
    }

    // 找出删除的文件
    for (const f of oldFiles) {
      if (!newFiles.has(f)) {
        changes.push({ status: 'deleted', path: f });
      }
    }

    // 检查现有文件是否有内容变化
    for (const f of oldFiles) {
      if (newFiles.has(f)) {
        // 比较两个 commit 中的文件内容
        const oldHash = execSync(`git rev-parse ${oldCommit}:${f}`, {
          encoding: 'utf-8',
          cwd: path.join(__dirname, '../../')
        }).trim();
        const newHash = execSync(`git rev-parse ${NEXT_BRANCH}:${f}`, {
          encoding: 'utf-8',
          cwd: path.join(__dirname, '../../')
        }).trim();

        if (oldHash !== newHash) {
          changes.push({ status: 'modified', path: f });
        }
      }
    }

    return changes;
  } catch (error) {
    console.error(chalk.red('❌ 获取变更列表失败:'), error.message);
    return [];
  }
}

function getFileDiff(oldCommit, filePath) {
  try {
    const gitPath = filePath.replace(/^packages\/webawesome\//, 'webawesome/');
    const cmd = `git diff ${oldCommit} ${NEXT_BRANCH} -- "${gitPath}"`;
    return execSync(cmd, {
      encoding: 'utf-8',
      cwd: path.join(__dirname, '../../')
    });
  } catch (error) {
    console.error(chalk.yellow(`   ⚠️  无法获取 ${filePath} 的 diff`));
    return null;
  }
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
  const changes = getFilesChangedBetweenCommits(versionInfo.commit);

  if (changes.length === 0) {
    console.log(chalk.green('✅ docs 目录没有变更\n'));
    process.exit(0);
  }

  // 5. 生成报告
  console.log(chalk.bold(`📝 发现 ${changes.length} 个变更:\n`));

  const addedFiles = changes.filter(c => c.status === 'added');
  const deletedFiles = changes.filter(c => c.status === 'deleted');
  const modifiedFiles = changes.filter(c => c.status === 'modified');

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

  if (modifiedFiles.length > 0) {
    console.log(chalk.yellow.bold(`🔄 修改文件 (${modifiedFiles.length}):`));
    modifiedFiles.forEach(f => console.log(chalk.yellow(`   ~ ${f.path}`)));
    console.log('');
  }

  // 确保 temp 目录存在
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
      const diff = getFileDiff(versionInfo.commit, f.path);
      if (diff && diff.trim()) {
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
  console.error(chalk.red('❌ 错误:'), err);
  process.exit(1);
});
