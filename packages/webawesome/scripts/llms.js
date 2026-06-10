import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllComponents } from './shared.js';
import { getCdnDir, getDistDir, getDocsDir } from './utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Removes newlines from text to keep llms.txt formatting clean. */
function removeNewlines(str) {
  return str ? str.replace(/\n/g, ' ').trim() : '';
}

/** Loads front-matter from all component markdown files. */
function loadAllFrontMatter(components, docsDir) {
  const cache = new Map();

  for (const component of components) {
    if (!component.tagName) {
      continue;
    }

    const componentName = component.tagName.replace(/^wa-/, '');
    const mdPath = path.join(docsDir, 'docs/components', `${componentName}.md`);

    if (fs.existsSync(mdPath)) {
      try {
        const content = fs.readFileSync(mdPath, 'utf-8');
        const { data } = matter(content);
        cache.set(component.tagName, data);
      } catch {
        // Skip if parsing fails
      }
    }
  }

  return cache;
}

/** Generates the API reference section for a single component. */
function generateComponentApiSection(component, frontMatterCache, baseUrl) {
  const lines = [];

  if (!component.tagName) {
    return lines;
  }

  const frontMatter = frontMatterCache.get(component.tagName);
  const componentSlug = component.tagName.replace(/^wa-/, '');
  const description = removeNewlines(frontMatter?.description || component.summary || '');

  lines.push(`#### \`<${component.tagName}>\``);
  lines.push('');
  lines.push(`**描述:** ${description || '暂无描述。'}`);
  lines.push('');
  lines.push(`**文档:** ${baseUrl}/docs/components/${componentSlug}`);
  lines.push('');

  // Slots
  if (component.slots?.length > 0) {
    lines.push('**插槽:**');
    lines.push('');
    for (const slot of component.slots) {
      const slotName = slot.name || '(默认)';
      lines.push(`- \`${slotName}\`: ${removeNewlines(slot.description) || '暂无描述。'}`);
    }
    lines.push('');
  }

  // Properties
  const properties =
    component.members?.filter(m => m.kind === 'field' && m.privacy !== 'private' && m.description) || [];

  if (properties.length > 0) {
    lines.push('**属性:**');
    lines.push('');
    for (const prop of properties) {
      // Find corresponding attribute if any
      const attr = component.attributes?.find(a => a.fieldName === prop.name);
      const attrNote = attr && attr.name !== prop.name ? ` (特性: \`${attr.name}\`)` : '';
      const typeStr = prop.type?.text ? `类型: \`${removeNewlines(prop.type.text)}\`` : '';
      const defaultStr = prop.default ? `默认值: \`${prop.default}\`` : '';
      const meta = [typeStr, defaultStr].filter(Boolean).join(', ');

      lines.push(
        `- \`${prop.name}\`${attrNote}: ${removeNewlines(prop.description) || '暂无描述。'}${meta ? ` (${meta})` : ''}`,
      );
    }
    lines.push('');
  }

  // Methods
  const methods = component.members?.filter(m => m.kind === 'method' && m.privacy !== 'private' && m.description) || [];

  if (methods.length > 0) {
    lines.push('**方法:**');
    lines.push('');
    for (const method of methods) {
      const params = method.parameters?.length
        ? `(${method.parameters.map(p => `${p.name}: ${removeNewlines(p.type?.text) || '未知'}`).join(', ')})`
        : '()';
      lines.push(`- \`${method.name}${params}\`: ${removeNewlines(method.description) || '暂无描述。'}`);
    }
    lines.push('');
  }

  // Events
  const events = component.events?.filter(e => e.name) || [];
  if (events.length > 0) {
    lines.push('**事件:**');
    lines.push('');
    for (const event of events) {
      lines.push(`- \`${event.name}\`: ${removeNewlines(event.description) || '暂无描述。'}`);
    }
    lines.push('');
  }

  // CSS Custom Properties
  if (component.cssProperties?.length > 0) {
    lines.push('**CSS 自定义属性:**');
    lines.push('');
    for (const prop of component.cssProperties) {
      const defaultStr = prop.default ? ` (默认值: \`${prop.default}\`)` : '';
      lines.push(`- \`${prop.name}\`: ${removeNewlines(prop.description) || '暂无描述。'}${defaultStr}`);
    }
    lines.push('');
  }

  // CSS Parts
  if (component.cssParts?.length > 0) {
    lines.push('**CSS 部件:**');
    lines.push('');
    for (const part of component.cssParts) {
      lines.push(`- \`${part.name}\`: ${removeNewlines(part.description) || '暂无描述。'}`);
    }
    lines.push('');
  }

  // CSS States
  if (component.cssStates?.length > 0) {
    lines.push('**CSS 状态:**');
    lines.push('');
    for (const state of component.cssStates) {
      lines.push(`- \`${state.name}\`: ${removeNewlines(state.description) || '暂无描述。'}`);
    }
    lines.push('');
  }

  return lines;
}

/**
 * Generates the complete llms.txt content.
 */
function generateLlmsTxt({ components, packageData, frontMatterCache, baseUrl }) {
  // Account for base "abstract elements" that don't have a tagName.
  components = components.filter(c => c.tagName);
  const lines = [];

  // H1 Title (required by llmstxt.org spec)
  lines.push('# @SITE_NAME@');
  lines.push('');

  // Blockquote summary
  lines.push(`> ${packageData.description} Version ${packageData.version}.`);
  lines.push('');

  // Overview section
  lines.push(
    `
@SITE_NAME@ 提供一套全面的、可自定义的、可访问的 Web 组件，用于构建现代化的 Web 应用程序。所有组件都使用 Shadow DOM，并且与框架无关，可以与原生 JavaScript 或任何框架（包括 React、Vue、Angular 和 Svelte）一起使用。

表单控件是与表单关联的自定义元素，可与原生表单验证和约束验证 API 配合使用。

Font Awesome 是默认图标库，因此 \`<wa-icon name="...">\` 的值应引用 Font Awesome 图标名称。
`.trim(),
  );
  lines.push('');

  //
  // Documentation
  //
  lines.push('## 文档');
  lines.push('');
  lines.push(`如需完整文档，请访问 ${baseUrl}/docs/`);
  lines.push('');
  lines.push(`- [开始使用](${baseUrl}/docs/getting-started): 安装和设置指南`);
  lines.push(`- [组件概览](${baseUrl}/docs/components): 完整组件参考`);
  lines.push(`- [主题](${baseUrl}/docs/theming): 自定义和设计令牌`);
  lines.push(`- [表单控件](${baseUrl}/docs/form-controls): 表单集成和验证`);
  lines.push('');

  //
  // Components
  //
  lines.push('## 组件');
  lines.push('');

  const sortedComponentsList = components.filter(c => c.tagName).sort((a, b) => a.tagName.localeCompare(b.tagName));

  for (const component of sortedComponentsList) {
    const frontMatter = frontMatterCache.get(component.tagName);
    const description = removeNewlines(frontMatter?.description || component.summary || '');
    const componentSlug = component.tagName.replace(/^wa-/, '');
    const title = frontMatter?.title || componentSlug;

    lines.push(
      `- [${title}](${baseUrl}/docs/components/${componentSlug}): ${description || '暂无描述。'}`,
    );
  }
  lines.push('');

  //
  // Optional
  //
  lines.push('## 可选');
  lines.push('');
  lines.push(
    `以下是描述每个组件 API 的快速参考。如需完整文档，请使用上面提供的 URL 参考组件文档。`,
  );
  lines.push('');

  // Sort components alphabetically by tag name for the API reference
  const sortedComponents = components.filter(c => c.tagName).sort((a, b) => a.tagName.localeCompare(b.tagName));

  for (const component of sortedComponents) {
    lines.push(...generateComponentApiSection(component, frontMatterCache, baseUrl));
  }

  return lines.join('\n').trim();
}

/**
 * Generates the llms.txt file following the llmstxt.org specification.
 * This should be called after the CEM has been generated.
 */
export async function generateLlmsTxtFile(options = {}) {
  const {
    outdir = getCdnDir(),
    copyTo = [getDistDir()],
    docsDir = getDocsDir(),
    cemPath = path.join(getCdnDir(), 'custom-elements.json'),
    baseUrl = 'https://webawesome.com',
  } = options;

  // Load CEM
  if (!fs.existsSync(cemPath)) {
    console.warn(`Warning: Custom Elements Manifest not found at ${cemPath}`);
    return;
  }

  const customElementsManifest = JSON.parse(fs.readFileSync(cemPath, 'utf-8'));
  const components = getAllComponents(customElementsManifest);
  const packageData = customElementsManifest.package || {};
  const frontMatterCache = loadAllFrontMatter(components, docsDir);

  const llmsTxt = generateLlmsTxt({
    components,
    packageData,
    frontMatterCache,
    baseUrl,
  });

  // Ensure output directory exists
  fs.mkdirSync(outdir, { recursive: true });

  // Write to the output directory
  const outputPath = path.join(outdir, 'llms.txt');
  fs.writeFileSync(outputPath, llmsTxt, 'utf-8');

  // Copy to additional directories
  for (const dest of copyTo) {
    fs.mkdirSync(dest, { recursive: true });
    fs.copyFileSync(outputPath, path.join(dest, 'llms.txt'));
  }
}
