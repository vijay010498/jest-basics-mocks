const { sum } = require("./sum");

describe("toBe toEqual ", () => {
  it("should add 1 and 2", function () {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assign", function () {
    const obj = {};
    expect(obj).toEqual({});
  });
});
describe("Truthy or falsy", () => {
  it("null", function () {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });
});

describe("numbers", () => {
  it("two plus two", function () {
    const value = 2 + 2;
    expect(value).toBe(4);
  });
  it("adding floats", function () {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });
});

describe("strings", () => {
  it("there is no I in team", function () {
    expect("team").not.toMatch(/I/);
  });
});

describe("Arrays", () => {
  const shoppingLists = ["t2-1", "milk", "towels"];
  it("shopping list contains milk", function () {
    expect(shoppingLists).toContain("milk");
  });
});

function compileAndroidCode() {
  throw new Error("This is error");
}

describe("exceptions", () => {
  it("should thrown an error code", function () {
    expect(() => compileAndroidCode()).toThrow("This is error");
  });
});
