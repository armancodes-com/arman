/* eslint-disable @typescript-eslint/ban-ts-comment */
import readingTime, {
  countWordsHandler,
  isCJK,
  isPunctuation,
  readingTimeWithCount,
} from "../reading-time";

describe("reading-time function Tests Suites", () => {
  // isCJK Function
  describe("isCJK Unit Tests Suite", () => {
    it("should return true for CJK characters", () => {
      // @ts-ignore
      const isChineseResult = isCJK("漢");
      // @ts-ignore
      const isJapaneseResult = isCJK("あ");
      // @ts-ignore
      const isKoreanResult = isCJK("한");

      expect(isChineseResult).toBeTruthy();
      expect(isChineseResult).toBe(true);
      expect(isJapaneseResult).toBeTruthy();
      expect(isJapaneseResult).toBe(true);
      expect(isKoreanResult).toBeTruthy();
      expect(isKoreanResult).toBe(true);
    });

    it("should return false for non-CJK characters", () => {
      // @ts-ignore
      expect(isCJK("a")).toBe(false);
      // @ts-ignore
      expect(isCJK("2")).toBe(false);
      // @ts-ignore
      expect(isCJK("  ")).toBe(false);
    });
  });

  describe("isPunctuation Tests Suite", () => {
    it("should return true for punctuation characters", () => {
      // @ts-ignore
      expect(isPunctuation(".")).toBe(true);
      // @ts-ignore
      expect(isPunctuation(",")).toBe(true);
      // @ts-ignore
      expect(isPunctuation("!")).toBe(true);
    });

    it("should return false for non-punctuation characters", () => {
      // @ts-ignore
      expect(isPunctuation("q")).toBe(false);
      // @ts-ignore
      expect(isPunctuation("1")).toBe(false);
      // @ts-ignore
      expect(isPunctuation("  ")).toBe(false);
    });
  });

  describe("countWordsHandler Tests Suite", () => {
    it("should correctly count the number of words in a text", () => {
      const sampleText = "Hello world!"; // 2 words ==> 1. Hello - 2. world!

      const countResult = countWordsHandler(sampleText);

      expect(countResult.total).toBe(2);
    });

    it("should correctly count the number of words in a CJK text", () => {
      const sampleText = "こんにちは世界"; // each one a word ==> 7

      const countResult = countWordsHandler(sampleText);
      expect(countResult.total).toBe(7);
      expect(countResult).toEqual({ total: 7 });
    });

    it("should return total of 0 if the text is an empty spaces string", () => {
      const sampleText = "     ";
      const countResult = countWordsHandler(sampleText);
      expect(countResult.total).toBe(0);
    });

    it("should return total words of 0 if the text is empty", () => {
      const countResult = countWordsHandler("");
      expect(countResult.total).toBe(0);
    });
  });

  describe("readingTimeWithCount tests suite", () => {
    it("should calculate reading time correctly given the word count to with default wordsPerMinute to 200", () => {
      const sampleCount = { total: 400 }; // suppose we have a text with 400 words count

      const result = readingTimeWithCount(sampleCount);
      const secondResult = readingTimeWithCount({ total: 200 }); // half of it

      expect(result).toEqual({ minutes: 2, time: 120000 });
      expect(secondResult).toEqual({ minutes: 1, time: 60000 }); // half ot the 400 word counts
    });

    it("should calculate correctly when different wordsPerMinute value is given", () => {
      const sampleCount = { total: 400 };

      // 400 word count with default wordsPerMinute (200), became 2 minutes, so the 100 will state that it should be slower and take twice as the initial time
      const result = readingTimeWithCount(sampleCount, { wordsPerMinute: 100 });

      expect(result).toEqual({ minutes: 4, time: 240000 });
    });
  });
});

describe("Integration Tests Suite For readingTime", () => {
  it("should calculate reading time and word count properly", () => {
    const sampleText = "Hello world"; // total words: 2 - 1 minute, time: 600 textEllipsisFormatter

    const result = readingTime(sampleText);

    expect(result.words).toEqual({
      total: 2,
    });
    expect(result.time).toBe(600);
    expect(result.minutes).toBe(1);
  });

  it("should calculate reading time correctly when different wordsPerMinute is passed to the function", () => {
    const sampleText = "Hello world";

    const result = readingTime(sampleText, { wordsPerMinute: 100 }); // default is 200, so 100 words per minute highlights the user is slower

    expect(result.words).toEqual({ total: 2 });
    expect(result.minutes).toBe(1);
    expect(result.time).toBe(1200); // twice 600
  });
});
