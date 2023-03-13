const Engineer = require('../lib/Engineer');

test("Can instantiate Engineer instance", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
})


test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
  });

  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", testValue);
    expect(e.email).toBe(testValue);
  });

  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Engineer("Foo", "j@site.com", 100);
    expect(e.id).toBe(testValue);
  });

  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Engineer(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Engineer("Foo", "test@test.com ", 100, testValue);
    expect(e.getId()).toBe(testValue);
  }); 

    
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", "test@test.com");
    expect(e.getEmail()).toBe(testValue);
  });

  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", "test@test.com", 1, " ");
    expect(e.getRole()).toBe(testValue);
  });

  test("getGithub() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", "test@test.com", 1, " ", testValue);
    expect(e.getGithub()).toBe(testValue);
  });