import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

type FormEl = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  completed: boolean;
}

// interface ITodo2 extends ITodo {
//     tags:string[]
// }

export default function App(): JSX.Element {
  // const sum = (a: number, b: number): number => a + b;
  const [value, setValue] = useState<string>("");
  // debugger
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormEl): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((i: ITodo, k: number) => (
          <Fragment key={k}>
            <div style={{ textDecoration: i.completed && "line-through" }}>
              {i.text}
            </div>
            <button onClick={():void => completeTodo(k)} type="button">
              {i.completed ? "incomplete" : "complete"}{" "}
            </button>

            <button onClick={() => removeTodo(k)}>Remove</button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
