const Employee = require('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Foo", "j@site.com", testValue);
    expect(e.id).toBe(testValue);
  });

  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", testValue, 1);
    expect(e.email).toBe(testValue);
  });
  
  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", " ", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", testValue, 1);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", "test@test.com", 1);
    expect(e.getRole()).toBe(testValue);
  });