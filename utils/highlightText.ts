const escapeRegex = (word: string): string =>
  word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const highlightText = (
  text: string,
  highlightWords: string[]
): string => {
  if (!text || !highlightWords.length) return text;

  const safeWords = highlightWords.map(escapeRegex);
  const regex = new RegExp(`(${safeWords.join("|")})`, "gi");

  return text.replace(regex, `<span class="text-primary">$1</span>`);
};
