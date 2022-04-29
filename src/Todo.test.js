import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const todo =
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  };

  it("renders without crashing", function () {
    render(<Todo todo={todo} />);
  });

  it("shows todos on page", function () {
    let result = render(<Todo todo={todo} />);
    expect(result.queryByText("Write some code")).toBeInTheDocument();
  });


