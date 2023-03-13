const Intern = require('../lib/Intern');

test("Can instantiate Intern instance", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com"
    const e = new Intern("Alice", testValue);
    expect(e.email).toBe(testValue);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Intern("Alice", "j@site.com", testValue);
    expect(e.id).toBe(testValue);
  });

  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Intern(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Intern("Foo", "test@test.com" , testValue);
    expect(e.getId()).toBe(testValue);
  });

//   I dont think this is working correctly 
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", "test@test.com", 1, " ");
    expect(e.getRole()).toBe(testValue);
  });

//   I dont think this is working correctly
  test("getSchool() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", "test@test.com", 1, " ", testValue);
    expect(e.getSchool()).toBe(testValue);
  });


