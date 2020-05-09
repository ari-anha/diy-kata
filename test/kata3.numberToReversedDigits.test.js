const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });

  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(19900921)).toEqual([1, 2, 9, 0, 0, 9, 9, 1]);
  });

  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(3.1415926)).toEqual([6, 2, 9, 5, 1, 4, 1, 3]);
  });

  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(-29)).toEqual([9, 2]);
  });
});
