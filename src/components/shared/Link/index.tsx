import { Link as RouterLink, type LinkProps } from "react-router";
import styles from "./index.module.css";

interface Props extends LinkProps {
  variant?: "primary" | "secondary";
  hover?: boolean;
}

const variants = {
  primary: `text-primary ${styles["link__hover-effect--primary"]}`,
  secondary: `text-secondary ${styles["link__hover-effect--secondary"]}`,
};

export default function Link({
  children,
  className = "",
  variant = "primary",
  hover = false,
  ...props
}: Props) {
  return (
    <RouterLink
      className={`${styles.link} ${variants[variant]} ${hover ? styles["link__hover-effect"] : ""} ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
