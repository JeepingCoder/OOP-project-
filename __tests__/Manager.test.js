const Manager = require('../lib/Manager');

test("Can instantiate Manager instance", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Manager(name);
    expect(e.name).toBe(name);
  });

  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", "j@site.com", testValue);
    expect(e.id).toBe(testValue);
  });

  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", testValue, 1);
    expect(e.email).toBe(testValue);
  });

  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Manager(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Manager("Foo", "test@test.com", testValue);
    expect(e.getId()).toBe(testValue);
  });

  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", testValue, 1);
    expect(e.getEmail()).toBe(testValue);
  });

  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", "test@test.com", 1, testValue);
    expect(e.getRole()).toBe(testValue);
  });


  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", "test@test.com", 100, " ",  testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });