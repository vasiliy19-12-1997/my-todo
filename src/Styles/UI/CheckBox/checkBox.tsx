import { FC } from "react";
import s from "./checkBox.module.scss";
interface ICheckBoxProps extends React.ComponentPropsWithoutRef<"input"> {}
export const CheckBox: FC<ICheckBoxProps> = ({ ...props }) => {
  return (
    <label>
      <input className={s.CheckBox} {...props} type="checkbox" />
    </label>
  );
};
