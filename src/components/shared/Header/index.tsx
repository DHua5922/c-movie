import Input from "../../shared/Input";
import styles from "./index.module.css";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onSubmit"> & {
  onSubmit: React.SubmitEventHandler<HTMLFormElement> | undefined;
};

export default function Header({ children, className = "", ...props }: Props) {
  return (
    <header className={`${styles.header} ${className}`}>
      {children}
      <Input
        containerClassName="search-input-form"
        placeholder="Search for movies..."
        {...props}
      />
    </header>
  );
}
