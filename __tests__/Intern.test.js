const Intern = require('../lib/Intern');

test("Can instantiate Intern instance", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
})