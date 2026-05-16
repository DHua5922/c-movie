import type React from "react";
import styles from "./index.module.css";

interface FormProps {
  containerClassName?: string;
  onSubmit: React.SubmitEventHandler<HTMLFormElement> | undefined;
}

type Props = FormProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "onSubmit">;

export default function Input({
  onSubmit,
  containerClassName = "",
  className = "",
  ...props
}: Props) {
  return (
    <form
      className={`${styles.form} ${containerClassName}`}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className={`${styles.input} ${className}`}
        {...props}
      />
    </form>
  );
}
