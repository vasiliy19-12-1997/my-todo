import { FC } from "react";
import { Button } from "../../Styles/UI/Button/button";
import { Input } from "../../Styles/UI/Input/input";
import { ITodo } from "../../Types/types";
import s from "./addForm.module.scss";
interface IAddForm {
  todo: ITodo[];
  addTodo: () => void;
  title: string;
  description: string;
  handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const AddForm: FC<IAddForm> = ({
  todo,
  addTodo,
  title,
  description,
  handleTitle,
  handleDescription,
}) => {
  return (
    <div className={s.AddForm}>
      <Button onClick={addTodo} butText="add todo" />
      <Input value={title} onChange={handleTitle} />
      <Input value={description} onChange={handleDescription} />
    </div>
  );
};
