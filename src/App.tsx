import { Button, Checkbox, Heading, TextField } from "@navikt/ds-react";
import "@navikt/ds-css";
import './App.scss'
import { useState } from "react";
import { useTodos } from "./hooks";

export default function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos()

  const onChange = async (id: number, checked: boolean) => {
    updateTodo({ id, completed: checked });
  };

  return (
    <div>
      <Heading size="xlarge">Playwright demo</Heading>
      <p>Number of todos: {todos.length}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Checkbox 
              checked={todo.completed}
              onChange={(e) => onChange(todo.id, e.target.checked)}
            >
              {todo.title}
            </Checkbox>
            <button onClick={() => deleteTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>

      <form>
        <Heading size="large">Add todo item</Heading>
        <div>
          <TextField 
            label="Title" 
            value={todoTitle}
            placeholder="Write todo here" 
            onChange={(e) => setTodoTitle(e.target.value)} 
          />
          <Button
            type="button"
            onClick={() => addTodo({ title: todoTitle })}
            disabled={todoTitle === ""}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
