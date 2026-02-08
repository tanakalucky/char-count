import { describe, expect, it } from "vitest";
import { countChars } from "./countChars";

describe("countChars", () => {
  it("空文字列の場合、すべて0を返す", () => {
    const result = countChars("");
    expect(result).toEqual({
      totalChars: 0,
      charsWithoutSpaces: 0,
      lineBreaks: 0,
    });
  });

  it("通常のテキストを正しくカウントする", () => {
    const result = countChars("hello");
    expect(result).toEqual({
      totalChars: 5,
      charsWithoutSpaces: 5,
      lineBreaks: 0,
    });
  });

  it("半角スペースを含むテキストをカウントする", () => {
    const result = countChars("hello world");
    expect(result).toEqual({
      totalChars: 11,
      charsWithoutSpaces: 10,
      lineBreaks: 0,
    });
  });

  it("日本語テキストを正しくカウントする", () => {
    const result = countChars("こんにちは");
    expect(result).toEqual({
      totalChars: 5,
      charsWithoutSpaces: 5,
      lineBreaks: 0,
    });
  });

  it("日本語テキストに全角スペースが含まれる場合", () => {
    const result = countChars("こんにちは\u3000世界");
    expect(result).toEqual({
      totalChars: 8,
      charsWithoutSpaces: 7,
      lineBreaks: 0,
    });
  });

  it("日本語テキストに半角スペースが含まれる場合", () => {
    const text = ["こんにちは", "世界"].join(" ");
    const result = countChars(text);
    expect(result).toEqual({
      totalChars: 8,
      charsWithoutSpaces: 7,
      lineBreaks: 0,
    });
  });

  it("空白のみのテキスト", () => {
    const result = countChars("   ");
    expect(result).toEqual({
      totalChars: 3,
      charsWithoutSpaces: 0,
      lineBreaks: 0,
    });
  });

  it("改行を含むテキストをカウントする", () => {
    const result = countChars("hello\nworld\n");
    expect(result).toEqual({
      totalChars: 12,
      charsWithoutSpaces: 10,
      lineBreaks: 2,
    });
  });

  it("タブと全角スペースを含むテキスト", () => {
    const result = countChars("hello\t世界\u3000テスト");
    expect(result).toEqual({
      totalChars: 12,
      charsWithoutSpaces: 10,
      lineBreaks: 0,
    });
  });

  it("複数の空白文字が混在するテキスト", () => {
    const result = countChars("a b\tc\nd\u3000e");
    expect(result).toEqual({
      totalChars: 9,
      charsWithoutSpaces: 5,
      lineBreaks: 1,
    });
  });
});
