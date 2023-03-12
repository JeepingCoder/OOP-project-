const Manager = require('../lib/Manager');

test("Can instantiate Manager instance", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
})