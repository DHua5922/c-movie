import styles from "./index.module.css";
import type React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmit?: () => void;
}

export default function Input({ onSubmit, className = "", ...props }: Props) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        className={`${styles.input} ${className}`}
        {...props}
      />
    </form>
  );
}
