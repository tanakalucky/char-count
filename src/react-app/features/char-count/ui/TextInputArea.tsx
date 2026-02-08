import { Label } from "@/shared/ui/Label/Label";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

type TextInputAreaProps = {
  value: string;
  onChange: (value: string) => void;
};

function TextInputArea({ value, onChange }: TextInputAreaProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="text-input">テキスト</Label>
      <Textarea
        id="text-input"
        placeholder="ここにテキストを入力してください..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[200px] resize-y"
      />
    </div>
  );
}

export { TextInputArea };
