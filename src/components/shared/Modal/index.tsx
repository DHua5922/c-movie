import type { HTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onHide: () => void;
}

export default function Modal({
  children,
  className = "",
  show,
  onHide,
  ...props
}: Props) {
  return show ? (
    <div
      className={`${show ? "slide-in-from-left" : "slide-out-to-left"} ${styles.modal__container} ${className}`}
      {...props}
    >
      {children}
      <button className={styles["modal__button--close"]} onClick={onHide}>
        X
      </button>
    </div>
  ) : (
    <></>
  );
}
