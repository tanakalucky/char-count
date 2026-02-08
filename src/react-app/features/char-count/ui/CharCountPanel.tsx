import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card/Card";
import { useCharCount } from "../model/useCharCount";
import { CountResultDisplay } from "./CountResultDisplay";
import { TextInputArea } from "./TextInputArea";

function CharCountPanel() {
  const { text, setText, includeSpaces, setIncludeSpaces, displayCharCount, lineBreaks } =
    useCharCount();

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>文字数カウント</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TextInputArea value={text} onChange={setText} />
        <CountResultDisplay
          displayCharCount={displayCharCount}
          lineBreaks={lineBreaks}
          includeSpaces={includeSpaces}
          onIncludeSpacesChange={setIncludeSpaces}
        />
      </CardContent>
    </Card>
  );
}

export { CharCountPanel };
