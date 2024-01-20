import { useState } from "react";
import "./App.scss";
import { AddForm } from "./Components/AddForm/addForm";
import { ITodo } from "./Types/types";
import { Button } from "./Styles/UI/Button/button";
import { Input } from "./Styles/UI/Input/input";
import { v4 as uuidv4 } from "uuid";
import { CheckBox } from "./Styles/UI/CheckBox/checkBox";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [todos, setTodos] = useState<ITodo[]>([
    {
      title: "Hello world",
      description: "this is so hard",
      id: "1",
      isCompleted: false,
    },
    {
      title: "Hello Vasya",
      description: "i want to go home",
      id: "2",
      isCompleted: false,
    },
  ]);
  const addTodo = () => {
    const todo: ITodo = {
      title: title,
      description: description,
      id: uuidv4(),
      isCompleted: false,
    };
    const a = [...todos, todo];
    setTodos(a);
    setTitle("");
    setDescription("");
    toggleTodo();
  };
  console.log(todos);
  const toggleTodo = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <div className="App">
      {/* <AddForm todo={todos} /> */}
      <Button onClick={addTodo} butText="add todo" />
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <CheckBox onClick={toggleTodo} />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          {todo.description}
          {todo.isCompleted}
        </div>
      ))}
    </div>
  );
}

export default App;
