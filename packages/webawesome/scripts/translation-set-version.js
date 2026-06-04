#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, '../docs');
const VERSION_FILE = path.join(DOCS_DIR, 'translation-version.json');
const NEXT_BRANCH = 'next';

console.log(chalk.blue('========================================'));
console.log(chalk.blue('  设置翻译基准版本'));
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

async function main() {
  // 获取 next 分支最新 commit
  const latestCommit = getLatestCommit(NEXT_BRANCH);
  if (!latestCommit) {
    console.log(chalk.red('❌ 无法获取 next 分支的最新 commit'));
    process.exit(1);
  }

  const latestDate = getCommitDate(latestCommit);
  const previousVersion = readVersionFile();

  // 创建版本信息
  const versionInfo = {
    branch: NEXT_BRANCH,
    commit: latestCommit,
    date: latestDate,
    note: '当前翻译对应的 next 分支版本'
  };

  // 写入文件
  fs.writeFileSync(VERSION_FILE, JSON.stringify(versionInfo, null, 2));

  if (previousVersion) {
    console.log(chalk.yellow(`🔄 更新翻译基准版本\n`));
    console.log(chalk.gray(`   旧版本: ${previousVersion.commit.substring(0, 8)} (${previousVersion.date})`));
  } else {
    console.log(chalk.green('✨ 设置翻译基准版本\n'));
  }
  
  console.log(chalk.green(`   新版本: ${latestCommit.substring(0, 8)} (${latestDate})\n`));
  console.log(chalk.gray(`   文件已保存: ${VERSION_FILE}\n`));
}

main().catch(err => {
  console.error(chalk.red('❌ 错误:', err));
  process.exit(1);
});
