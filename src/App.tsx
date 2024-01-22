import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import { Button } from "./Styles/UI/Button/button";
import { CheckBox } from "./Styles/UI/CheckBox/checkBox";
import { Input } from "./Styles/UI/Input/input";
import { ITodo } from "./Types/types";
import { AddForm } from "./Components/AddForm/addForm";
import { TodoItem } from "./Components/TodoItem/todoItem";
import { TodoList } from "./Components/TodoList/todoList";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
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
    setTodos([...todos, todo]);
    setTitle("");
    setDescription("");
  };

  const deleteTodos = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodos = () => {
    setIsCompleted(!isCompleted);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  console.log(todos);

  return (
    <>
      <Button butText="modal window" onClick={() => setIsToggle(!isToggle)} />
      {isToggle && <div>1</div>}
      <div className="App">
        <AddForm
          todo={todos}
          addTodo={addTodo}
          title={title}
          description={description}
          handleTitle={handleTitle}
          handleDescription={handleDescription}
        />
        <TodoList
          todos={todos}
          deleteTodos={deleteTodos}
          toggleTodos={toggleTodos}
        />
      </div>
    </>
  );
}

export default App;
