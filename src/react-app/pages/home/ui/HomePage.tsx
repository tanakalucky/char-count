import { CharCountPanel } from "@/features/char-count";

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <CharCountPanel />
    </div>
  );
}

export { HomePage };
