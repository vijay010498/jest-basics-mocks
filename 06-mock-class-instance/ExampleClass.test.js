const { ex } = require("./OtherModule");
const { ExampleClass } = require("./ExampleClass");
jest.mock("./ExampleClass");

it("try to create a mock of ExampleClass", () => {
  // Verify values for **constructor** of ExampleClass
  expect(ExampleClass.mock.calls.length).toBe(1); // SUCCESS
  expect(ExampleClass.mock.calls[0][0]).toBe("hello world"); // SUCCESS
  ExampleClass.mockClear();
});
