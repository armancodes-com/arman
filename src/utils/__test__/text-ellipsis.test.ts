import textEllipsisFormatter from "../text-ellipsis";

describe("Text Ellipsis Function Test Suite", () => {
  it("should return the exactly the text given when its length is smaller than the count", () => {
    const sampleText = `This is sample text here.`; // its length is 21
    const expectedText = `This is sample text here.`;

    const result = textEllipsisFormatter(sampleText, 40); // bigger than the length

    expect(result).toBe(expectedText);
    expect(result).toHaveLength(expectedText.length);
    expect(result).not.toContain("...");
  });

  it("should return '...' at the end of the text when text's length is bigger than the count given", () => {
    const sampleText = `This is sample text here.`; // its length is 21

    const resultText = textEllipsisFormatter(sampleText, 14);

    expect(resultText).toContain("...");
  });
});
