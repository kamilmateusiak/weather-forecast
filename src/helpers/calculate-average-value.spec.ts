import calculateAverageValue from "./calculate-average-value";

describe("calculateAverageValue should return", () => {
  const testsConfig = [
    {
      description: "correct result for odd number of elements",
      data: [4, 2, 5, 1, 3],
      expectedResult: 3,
    },
    {
      description: "correct result for even number of elements",
      data: [4, 2, 5, 1, 2, 3],

      expectedResult: 2.83,
    },
    {
      description: "correct result for different fractionDigits parameter",
      data: [4, 2, 5, 1, 1, 3],
      fractionDigits: 4,
      expectedResult: 2.6667,
    },
    {
      description: "correct result for 0 as fractionDigits",
      data: [4, 2, 5, 1, 1, 3],
      fractionDigits: 0,
      expectedResult: 3,
    },
    {
      description: "zero when an empty array was passed as argument",
      data: [],
      expectedResult: 0,
    },
  ];

  testsConfig.forEach((test) => {
    it(test.description, () => {
      expect(calculateAverageValue(test.data, test.fractionDigits)).toBe(
        test.expectedResult
      );
    });
  });
});
