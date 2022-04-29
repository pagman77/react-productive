import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({todo: { id, title, description, priority }}) {
  return (
      <div key={id} id={id} className="Todo">
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
