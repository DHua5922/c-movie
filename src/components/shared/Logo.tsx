import logo from "../../assets/logo.png";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export default function Logo({
  containerClassName = "",
  className = "",
  ...props
}: Props) {
  return (
    <figure className={containerClassName}>
      <img
        className={`img ${className}`}
        src={logo}
        alt="CMovie Logo"
        {...props}
      />
    </figure>
  );
}
