import * as fs from 'fs';
import { globby } from 'globby';
import { dirname, extname, resolve } from 'path';

const defaultPrefix = 'wa';

export function componentPrefixPlugin(prefix = defaultPrefix) {
  if (prefix === defaultPrefix) {
    return {
      name: 'component-prefix',
      setup() {},
    };
  }

  console.log(`[component-prefix-plugin] Using custom prefix: '${prefix}'`);

  return {
    name: 'component-prefix',

    setup(build) {
      // 1. 使用 onLoad 钩子拦截 .js 文件
      build.onLoad({ filter: /\/components\/.*\.ts$/ }, async args => {
        // 2. 读取文件的原始内容
        let contents = await fs.promises.readFile(args.path, 'utf8');

        // 将 wa-xxx 替换为 lts-xxx
        contents = contents.replace(/@customElement\(\s*['"]wa-([^'"]+)['"]\s*\)/g, `@customElement('${prefix}-$1')`);
        contents = contents.replace(/wa-([\w-]+)/g, `${prefix}-$1`);

        // 4. 返回修改后的内容，并指定加载器类型
        return {
          contents: contents,
          loader: 'ts', // 告诉 esbuild 将内容当作 ts 处理
        };
      });
      build.onLoad({ filter: /\/component-prefix\.ts$/ }, async args => {
        // 读取文件的原始内容
        let contents = await fs.promises.readFile(args.path, 'utf8');

        // 将 wa-xxx 替换为 lts-xxx
        contents = contents.replace(/componentPrefix\s*=\s*(['"])wa\1/, `componentPrefix = $1${prefix}$1`);

        // 返回修改后的内容，并指定加载器类型
        return {
          contents: contents,
          loader: 'ts', // 告诉 esbuild 将内容当作 ts 处理
        };
      });
      build.onLoad({ filter: /\/autoloader\.ts$/ }, async args => {
        // 把 autoloader.ts 内容替换为 autoloader-prefix.ts 内容
        let contents = await fs.promises.readFile(args.path.replace(/\.ts/, '-prefix.ts'), 'utf8');

        // 返回修改后的内容，并指定加载器类型
        return {
          contents: contents,
          loader: 'ts', // 告诉 esbuild 将内容当作 ts 处理
        };
      });
      build.onLoad({ filter: /\/styles\/.*\.ts$/ }, async args => {
        // 1. 读取文件的原始内容
        let contents = await fs.promises.readFile(args.path, 'utf8');

        // 2. 将 wa-xxx 替换为 lts-xxx
        contents = contents.replace(/wa-([\w-]+)/g, `${prefix}-$1`);

        // 3. 返回修改后的内容，并指定加载器类型
        return {
          contents: contents,
          loader: 'ts', // 告诉 esbuild 将内容当作 ts 处理
        };
      });
    },
  };
}
