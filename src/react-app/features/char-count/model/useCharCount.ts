import { useMemo, useState } from "react";
import { countChars } from "../lib/countChars";

function useCharCount() {
  const [text, setText] = useState("");
  const [includeSpaces, setIncludeSpaces] = useState(true);

  const charCountResult = useMemo(() => countChars(text), [text]);

  const displayCharCount = includeSpaces
    ? charCountResult.totalChars
    : charCountResult.charsWithoutSpaces;

  return {
    text,
    setText,
    includeSpaces,
    setIncludeSpaces,
    displayCharCount,
    lineBreaks: charCountResult.lineBreaks,
  } as const;
}

export { useCharCount };
