import { FC } from "react";
import { Input } from "../../Styles/UI/Input/input";
import { Button } from "../../Styles/UI/Button/button";
import { CheckBox } from "../../Styles/UI/CheckBox/checkBox";
import s from "./addForm.module.scss";
export const AddForm: FC = () => {
  return (
    <div className={s.AddForm}>
      <Input />
      <Button butText={"add ToDo"} />
      <CheckBox />
    </div>
  );
};
