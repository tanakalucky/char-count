import { Label } from "@/shared/ui/Label/Label";
import { Switch } from "@/shared/ui/Switch/Switch";

type CountResultDisplayProps = {
  displayCharCount: number;
  lineBreaks: number;
  includeSpaces: boolean;
  onIncludeSpacesChange: (value: boolean) => void;
};

function CountResultDisplay({
  displayCharCount,
  lineBreaks,
  includeSpaces,
  onIncludeSpacesChange,
}: CountResultDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Switch
          id="include-spaces"
          checked={includeSpaces}
          onCheckedChange={onIncludeSpacesChange}
        />
        <Label htmlFor="include-spaces">空白を含める</Label>
      </div>

      <div className="grid grid-cols-2 gap-4" aria-live="polite">
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-sm text-muted-foreground">文字数</p>
          <p className="text-3xl font-bold">{displayCharCount}</p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-sm text-muted-foreground">改行数</p>
          <p className="text-3xl font-bold">{lineBreaks}</p>
        </div>
      </div>
    </div>
  );
}

export { CountResultDisplay };
