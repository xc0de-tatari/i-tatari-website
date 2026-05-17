/** Image URL helpers — responsive Unsplash widths, alt patterns */

const WIDTHS = [480, 768, 1080, 1440, 1920] as const;

export function unsplashWidth(url: string, width: number): string {
  if (!url.includes('unsplash.com')) return url;
  try {
    const u = new URL(url);
    u.searchParams.set('w', String(width));
    u.searchParams.set('q', '80');
    u.searchParams.set('auto', 'format');
    u.searchParams.set('fit', 'max');
    return u.toString();
  } catch {
    return url;
  }
}

export function imageSrcSet(url: string): string | undefined {
  if (!url.includes('unsplash.com')) return undefined;
  return WIDTHS.map((w) => `${unsplashWidth(url, w)} ${w}w`).join(', ');
}

export function defaultSizes(context: 'hero' | 'card' | 'thumb' = 'card'): string {
  switch (context) {
    case 'hero':
      return '100vw';
    case 'thumb':
      return '(max-width: 640px) 100vw, 400px';
    default:
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px';
  }
}
