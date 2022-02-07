let animals = [];

beforeAll(() => {
  console.log("Before ALl");
  animals = ["cow", "tiger", "bear", "zebra"];
});

afterAll(() => {
  console.log("After ALl");
});
describe("animals array", () => {
  beforeEach(() => {
    console.log("Before Each");
    animals = ["cow", "tiger", "bear", "zebra"];
  });
  afterEach(() => {
    console.log("after Each");
    animals = ["cow", "tiger", "bear", "zebra"];
  });
  it("should add animal to end of an array", function () {
    animals.push("cat");
    expect(animals[animals.length - 1]).toBe("cat");
  });
  it("should add animal to begging  of an array", function () {
    animals.unshift("cat");
    expect(animals[0]).toBe("cat");
  });
  it("should have initial length of 4", function () {
    expect(animals.length).toBe(4);
  });
});

describe("Testing something out", () => {
  it.only("true should be truthy", function () {
    expect(true).toBeTruthy();
  });
});
