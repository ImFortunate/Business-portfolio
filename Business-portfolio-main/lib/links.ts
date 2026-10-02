// True only for real absolute links, so "[PLACEHOLDER]" values in content.ts never render as broken hrefs.
export function isHttpUrl(value: string | undefined): value is string {
  return !!value && /^https?:\/\//.test(value);
}
