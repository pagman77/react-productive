import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import { update, remove } from "./TodoApp";

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

describe("it renders the TodoApp component", function () {


  it("renders without crashing", function () {
    render(<EditableTodo todo={initialTodos[0]} update={update} remove={remove} />);
  });

  it("shows editable Todo on page", function () {
    let result = render(<EditableTodo
      todo={initialTodos[0]}
      update={update}
      remove={remove} />);
    expect(result.queryByText("Write some code")).toBeInTheDocument();
    expect(result.queryByText("You have no todos.")).not.toBeInTheDocument();
  });

  it("shows form when edit is clicked", function () {
    let { container } = render(<EditableTodo
      todo={initialTodos[0]}
      update={update}
      remove={remove} />);
    const button = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(button);
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  });

});