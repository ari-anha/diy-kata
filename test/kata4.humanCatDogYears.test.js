const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  test("returns the number of cat years and dog years when passed human years", () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
  });

  test("returns the number of cat years and dog years when passed human years", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });

  test("returns the number of cat years and dog years when passed human years", () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });

  test("returns the number of cat years and dog years when passed human years", () => {
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
  });

  test("returns the number of cat years and dog years when passed human years", () => {
    expect(humanCatDogYears(11)).toEqual([11, 60, 69]);
  });

  test("returns the number of cat years and dog years when passed human years", () => {
    expect(humanCatDogYears(150)).toEqual([150, 616, 764]);
  }); 
});
  