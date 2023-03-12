const Manager = require('../lib/Manager');

test("Can instantiate Manager instance", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
})

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", "test@test.com", 2, " ",  testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });