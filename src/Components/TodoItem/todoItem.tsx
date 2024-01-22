import { FC } from "react";
import { Button } from "../../Styles/UI/Button/button";
import { CheckBox } from "../../Styles/UI/CheckBox/checkBox";
interface ITodoItemProps {
  id: string;
  deleteTodos: (id: string) => void;
  toggleTodos: () => void;
}
export const TodoItem: FC<ITodoItemProps> = ({
  deleteTodos,
  toggleTodos,
  id,
}) => {
  return (
    <div>
      <Button butText="delete todo" onClick={() => deleteTodos(id)} />
      <CheckBox onClick={toggleTodos} />
    </div>
  );
};
