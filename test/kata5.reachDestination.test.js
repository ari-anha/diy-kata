const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(3.2, 2)).toEqual("I should be there in 2 hours.");
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(80.97, 60)).toEqual("I should be there in 1.5 hours.");
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(136, 7.1)).toEqual("I should be there in 19.5 hours.");
  });
});
