const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when passed true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  test("returns Yes when passed true", () => {
    expect(booleanToWord("String")).toEqual("Yes");
  });

  test("returns No when passed false", () => {
    expect(booleanToWord(undefined)).toEqual("No")
  })

  test("returns No when passed false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
