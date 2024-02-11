import { FC } from "react";
import { Button } from "../../Styles/UI/Button/button";
import { CheckBox } from "../../Styles/UI/CheckBox/checkBox";

interface ITodoItemProps {
  id: string;
  toggleTodos: () => void;
  deleteTodos: (id: string) => void;
}
export const TodoItem: FC<ITodoItemProps> = ({
  deleteTodos,
  toggleTodos,
  id,
}) => {
  return (
    <div>
      <Button butText="Delete ToDo" onClick={() => deleteTodos(id)} />
      <div>
        <CheckBox onClick={toggleTodos} />
      </div>
    </div>
  );
};
