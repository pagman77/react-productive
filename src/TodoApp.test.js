import React from "react";
import { render } from "@testing-library/react";
import TodoApp, {create} from "./TodoApp";

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

describe("it renders the TodoApp component", function (){


    it("renders without crashing", function(){
        render(<TodoApp initialTodos={initialTodos}/>);
    });
    
    it("shows todos on page", function(){
        let result = render(<TodoApp initialTodos={initialTodos}/>);
        expect(result.queryByText("Write some code")).toBeInTheDocument();
        expect(result.queryByText("You have no todos.")).not.toBeInTheDocument();
    });
  
    it("shows you have no todos if empty", function(){
        let result = render(<TodoApp/>);
        expect(result.queryByText("You have no todos.")).toBeInTheDocument();
    });
    
    it("topTodo in document", function(){
        let result = render(<TodoApp initialTodos={initialTodos}/>);
        expect(result.queryAllByText("Cook something healthy").length).toEqual(2);
    });
   
    it("toDoForm renders", function(){
        let result = render(<TodoApp initialTodos={initialTodos}/>);
        expect(result.queryByRole("form")).toBeInTheDocument();
    });

})

describe("state functions update state", function(){
    it("creates new todo", function(){
        let result = render(<TodoApp initialTodos={initialTodos}/>);
        create({
            title: "New Todo!",
            description: "Pass the test",
            priority: 2,
          });
        expect(result.queryByText("Pass the test")).toBeInTheDocument();
    })
})