export function isPlaceholder(value) {
  return typeof value === "string" && value.startsWith("YOUR_");
}

export function isExternalLink(url) {
  return (
    typeof url === "string" &&
    (url.startsWith("http") || url.startsWith("mailto:"))
  );
}

export function getLinkProps(url) {
  if (!url || isPlaceholder(url)) {
    return { href: undefined, external: false };
  }

  return {
    href: url,
    external: isExternalLink(url),
  };
}
