import { FC } from "react";
import s from "./input.module.scss";
interface IInputProps extends React.ComponentPropsWithoutRef<"input"> {}
export const Input: FC<IInputProps> = ({ ...props }) => {
  return <input className={s.Input} {...props} />;
};
