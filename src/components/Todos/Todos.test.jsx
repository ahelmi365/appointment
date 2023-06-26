// const { render, waitFor, screen } = require("@testing-library/react");
// // const Todos = require("./Todos").default;
// // const axios = require("axios");

// const dummyTodos = [
//   {
//     userId: 1,
//     id: 1,
//     title: "todo 1",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "todo 2",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "todo 3",
//     completed: false,
//   },
// ];

// test("todos list", async () => {
// //   axios.get.mockResolvedValue({ data: dummyTodos });
// //   render(<Todos />);

// //   const todoList = await waitFor(() => screen.findAllByTestId("todo"));

// //   expect(todoList).toHaveLength(3);
// });

// import { render, waitFor, screen } from "@testing-library/react";
// // import Todos from "./Todos";
// // import axios from "axios";

// let axios = jest.mock("axios");

// const dummyTodos = [
//   {
//     userId: 1,
//     id: 1,
//     title: "todo 1",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "todo 2",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "todo 3",
//     completed: false,
//   },
// ];

// it("todos list", async () => {
//   axios.get.mockResolvedValue({ data: dummyTodos });
//   // render(<Todos />);
//   render();

//   const todoList = await waitFor(() => screen.findAllByTestId("todo"));

//   expect(todoList).toHaveLength(3);
// });

import { render, waitFor, screen } from "@testing-library/react";
 import Todos from "./Todos";
import axios from "axios";

jest.mock("axios");

const dummyTodos = [
  {
    userId: 1,
    id: 1,
    title: "todo 1",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "todo 2",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "todo 3",
    completed: false,
  },
];

test("todos list", async () => {
  axios.get.mockResolvedValue({ data: dummyTodos });
    render(<Todos />);

  const todoList = await waitFor(() => screen.findAllByTestId("todo"));

  expect(todoList).toHaveLength(3);
});
