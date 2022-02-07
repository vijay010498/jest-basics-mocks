const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
};
const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", function () {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);

  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
});

it("mock return value", function () {
  const mock = jest.fn();
  mock.mockReturnValueOnce(true);

  const results = mock();
  expect(results).toBe(true);
});

it("mock axios", async function () {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Hello",
    },
  });
  const results = await fetchData(1);
  expect(results.todo).toBe("Hello");
});
