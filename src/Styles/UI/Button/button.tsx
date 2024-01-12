import { FC } from "react";
import s from "./button.module.scss";
interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  butText: string;
}
export const Button: FC<IButtonProps> = ({ butText, ...props }) => {
  return (
    <button className={s.Button} {...props}>
      {butText}
    </button>
  );
};
