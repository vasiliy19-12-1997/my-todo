import { FC } from "react";
import { ITodo } from "../../Types/types";
import s from "./todoList.module.scss";
import { TodoItem } from "../TodoItem/todoItem";
interface ITodoList {
  todos: ITodo[];
  deleteTodos: (id: string) => void;
  toggleTodos: () => void;
}
export const TodoList: FC<ITodoList> = ({
  todos,
  deleteTodos,
  toggleTodos,
}) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={todo.id} className={s.TodoList}>
          {index + 1}
          {todo.title}
          {todo.description}
          <TodoItem
            id={todo.id}
            toggleTodos={toggleTodos}
            deleteTodos={deleteTodos}
          />
          <hr />
        </div>
      ))}
    </>
  );
};
