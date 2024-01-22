import { FC } from "react";
import { ITodo } from "../../Types/types";
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
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          {index + 1}
          {todo.title}
          {todo.description}
          <TodoItem
            deleteTodos={deleteTodos}
            toggleTodos={toggleTodos}
            id={todo.id}
          />
        </div>
      ))}
    </div>
  );
};
