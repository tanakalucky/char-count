import { page } from "vitest/browser";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { CharCountPanel } from "./CharCountPanel";

describe("CharCountPanel", () => {
  it("テキスト入力でリアルタイムにカウントが更新される", async () => {
    await render(<CharCountPanel />);

    const textarea = page.getByPlaceholder("ここにテキストを入力してください...");
    await textarea.fill("hello");

    await expect.element(page.getByText("5")).toBeVisible();
  });

  it("トグル切り替えで空白を含む/含まない文字数が変わる", async () => {
    await render(<CharCountPanel />);

    const textarea = page.getByPlaceholder("ここにテキストを入力してください...");
    await textarea.fill("hello world");

    await expect.element(page.getByText("11")).toBeVisible();

    const toggle = page.getByRole("switch");
    await toggle.click();

    await expect.element(page.getByText("10")).toBeVisible();
  });

  it("改行カウントが正しく表示される", async () => {
    const { container } = await render(<CharCountPanel />);

    const textarea = page.getByPlaceholder("ここにテキストを入力してください...");
    await textarea.fill("line1\nline2\nline3");

    const lineBreakValue = container.querySelectorAll(".text-3xl")[1];
    expect(lineBreakValue?.textContent).toBe("2");
  });
});
