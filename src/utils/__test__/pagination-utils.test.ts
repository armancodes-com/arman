import getTotalArticlesPage from "../pagination-utils";

describe("Pagination utils tests suite", () => {
  it("should return correct number of pages when totalArticles divides evenly by showPerPage", () => {
    expect(getTotalArticlesPage(100, 10)).toBe(10);
    expect(getTotalArticlesPage(50, 25)).toBe(2);
    expect(getTotalArticlesPage(30, 15)).toBe(2);
  });

  it("should return correct number of pages when totalArticles does not divide evenly by showPerPage", () => {
    expect(getTotalArticlesPage(101, 10)).toBe(11); // Rounded up
    expect(getTotalArticlesPage(55, 25)).toBe(3);
    expect(getTotalArticlesPage(31, 15)).toBe(3);
  });

  it("should return 0 when totalArticles is 0", () => {
    expect(getTotalArticlesPage(0, 10)).toBe(0);
  });

  it("should return totalArticles as the number of pages when showPerPage is 1", () => {
    expect(getTotalArticlesPage(100, 1)).toBe(100);
    expect(getTotalArticlesPage(25, 1)).toBe(25);
  });

  it("should handle large numbers correctly", () => {
    expect(getTotalArticlesPage(1000000, 1000)).toBe(1000);
    expect(getTotalArticlesPage(1000000, 3)).toBe(333334); // Rounded up
  });

  it("should handle case when showPerPage is larger than totalArticles", () => {
    expect(getTotalArticlesPage(5, 10)).toBe(1); // Even though we can fit all articles in one page
  });
});
