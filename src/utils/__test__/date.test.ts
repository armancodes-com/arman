import formatPublishedDateHandler from "../date";

describe("Date util unit tests", () => {
  it("should format the date given to correctly and give a string formatted date with default locale: 'en-UK'", () => {
    const formattedDate = formatPublishedDateHandler("2000-06-28");

    expect(formattedDate).toBe("28, Jun 2000");
  });

  it("should format the date given to correctly if locale is set to: 'en-US'", () => {
    const expectedResult = "Jun, 28, 2000";
    const formattedDate = formatPublishedDateHandler("2000-06-28", "en-US");

    expect(formattedDate).toBe(expectedResult);
  });

  it("should change result format if different options are provided", () => {
    const formattedDate = formatPublishedDateHandler("2001-06-28", "en-UK", {
      day: "numeric",
      month: "long",
      year: "2-digit",
    });

    const expectedResult = "28, June 01";
    expect(formattedDate).toBe(expectedResult);
  });

  it("should handle invalid date strings gracefully", () => {
    const formattedDate = formatPublishedDateHandler("invalid-date");
    expect(formattedDate).toBe("Invalid Date");
  });

  it("should handle empty date input gracefully", () => {
    const formattedDate = formatPublishedDateHandler("");
    expect(formattedDate).toBe("Invalid Date");
  });

  it("should format a Date object correctly", () => {
    const date = new Date(2000, 5, 28); // Note: months are 0-indexed in JavaScript Date
    const formattedDate = formatPublishedDateHandler(date);
    expect(formattedDate).toBe("28, Jun 2000");
  });

  it("should correctly format a leap year date", () => {
    const formattedDate = formatPublishedDateHandler("2020-02-29");
    expect(formattedDate).toBe("29, Feb 2020");
  });
});
