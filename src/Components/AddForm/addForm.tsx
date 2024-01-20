import { FC } from "react";
import { Input } from "../../Styles/UI/Input/input";
import { Button } from "../../Styles/UI/Button/button";
import { CheckBox } from "../../Styles/UI/CheckBox/checkBox";
import s from "./addForm.module.scss";
import { ITodo } from "../../Types/types";
interface IAddForm {
  todo: ITodo[];
}
export const AddForm: FC<IAddForm> = ({ todo }) => {
  return (
    <div className={s.AddForm}>
      <Input />
      <Button butText={"add ToDo"} />
      <CheckBox />
    </div>
  );
};
