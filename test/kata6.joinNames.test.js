const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}])).toEqual("Bart, Lisa & Maggie");
  });

  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: "Arianha"}, {name: "Alex"}, {name: "Marion"}, {name: "Cera"}])).toEqual("Arianha, Alex, Marion & Cera");
  });

  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: "A"}, {name: "B"}, {name: "C"}, {name: "D"}, 
    {name: "E"}, {name: "F"}, {name: "G"}, {name: "H"}, {name: "I"}, {name: "J"}, 
    {name: "K"}, {name: "L"}, {name: "M"}, {name: "N"}, {name: "O"}, {name: "P"}, 
    {name: "Q"}, {name: "R"}, {name: "S"}, {name: "T"}, {name: "U"}, {name: "V"}, 
    {name: "W"}, {name: "X"}, {name: "Y"}, {name: "Z"}])).toEqual("A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y & Z");
  });
});