import searchArticlesHandler from "../search-articles";

const sampleArticles = [
  {
    title: "Sample Article Title: Here it starts",
  },
  {
    title: "Marvels Fight to Death with Me",
  },
];

describe("Search Articles Function", () => {
  it("should return 'Please enter a valid query!' when the input is not valid", () => {
    const query = "";
    const resultTextWhenInputIsNotValid = "Please enter a valid query!";

    const result = searchArticlesHandler(sampleArticles, query);

    expect(result).toBe(resultTextWhenInputIsNotValid);
  });

  it("should return all articles that their titles include the query", () => {
    const query = "marvel";
    const expectedResult = [
      {
        title: "Marvels Fight to Death with Me",
      },
    ];

    const result = searchArticlesHandler(sampleArticles, query);
    expect(result).toEqual(expectedResult);
  });
});
