export function getImageUrl(name: string) {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}
