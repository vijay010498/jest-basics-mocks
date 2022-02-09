const { Person } = require("./constructor");
const { seqPerson } = require("./constructor-1");
jest.mock("./constructor");

it("should gg", function () {
  expect(Person.mock.calls.length).toBe(1);
  expect(Person.mock.calls[0][0]).toStrictEqual({ name: "vijay", age: 23 });
  Person.mockClear();
});
