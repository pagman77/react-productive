import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const initialTodos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("it renders the TopTodo component", function () {

  it("renders without crashing", function () {
    render(<TopTodo todos={initialTodos} />);
  });

  it("topTodo in document", function () {
    let result = render(<TopTodo todos={initialTodos} />);
    expect(result.queryByText("Cook something healthy")).toBeInTheDocument();
  });

  it("returns null", function () {
    let result = render(<TopTodo todos={[]} />);
    expect(result.queryByText("Cook something healthy")).not.toBeInTheDocument();
  });
});