const Engineer = require('../lib/Engineer');

test("Can instantiate Engineer instance", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
})