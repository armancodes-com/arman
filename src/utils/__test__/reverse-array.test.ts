import reverseArrayHandler from "../reverse-array";

describe("Reverse array Test Suite", function () {
  it("should reverse the order of the given array", () => {
    const initialArray = [1, 2, 3, 4];
    const expectedArray = [4, 3, 2, 1];

    const reversedArray = reverseArrayHandler(initialArray);

    expect(reversedArray).toEqual(expectedArray);
  });
});
