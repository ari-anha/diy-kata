const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const employees = [{

      name: "Nobunaga",
      role: "Managing Director"

    }, {

      name: "Yoshimoto",
      role: 'Vice President'

    }, {

      name: "Ieyasu",
      role: "Finance Manager"

    }, {

      name: "Nagamasa",
      role: "Sales Coordinator"

    }, {

      name: "Shingen",
      role: "Accountant"

    }, {

      name: "Hisahide",
      role: "Administrator"

    }, {

      name: "Nagaharu",
      role: "Senior Administrator"

    }, {

      name: "Terumoto",
      role: "Cleaner"

    }, {

      name: "Mitsuhide",
      role: "Administrator"
      
    }]

    expect(getEmployerRole("Nobunaga", employees)).toBe("Managing Director");
    expect(getEmployerRole("Shingen", employees)).toBe("Accountant");
    expect(getEmployerRole("Terumoto", employees)).toBe("Cleaner");
    expect(getEmployerRole("Mitsuhide", employees)).toBe("Administrator");  
  });
});