let componentPrefix = 'wa';

export function getComponentPrefix(): string {
  return componentPrefix;
}

export function getComponentName(tagName: string): string {
  const prefix = getComponentPrefix();
  const regex = new RegExp(`^${prefix}-`, 'i');
  return tagName.replace(regex, '');
}

export function isWebAwesomeTag(tagName: string): boolean {
  const prefix = getComponentPrefix();
  return tagName.toLowerCase().startsWith(`${prefix}-`);
}
