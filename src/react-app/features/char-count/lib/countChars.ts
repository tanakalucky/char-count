type CharCountResult = {
  totalChars: number;
  charsWithoutSpaces: number;
  lineBreaks: number;
};

function countChars(text: string): CharCountResult {
  const totalChars = text.length;
  const charsWithoutSpaces = text.replace(/\s/g, "").length;
  const lineBreaks = (text.match(/\n/g) ?? []).length;

  return { totalChars, charsWithoutSpaces, lineBreaks };
}

export { countChars };
export type { CharCountResult };
