import calculateMedian from "./calculate-median";

describe("calculateMedian should return", () => {
  const testsConfig = [
    {
      description: "correct result for odd number of elements",
      data: [4, 2, 5, 1, 3],
      expectedResult: 3,
    },
    {
      description: "correct result for even number of elements",
      data: [4, 2, 5, 1, 1, 3],
      expectedResult: 2.5,
    },
    {
      description: "zero when an empty array was passed as argument",
      data: [],
      expectedResult: 0,
    },
  ];

  testsConfig.forEach((test) => {
    it(test.description, () => {
      expect(calculateMedian(test.data)).toBe(test.expectedResult);
    });
  });
});
