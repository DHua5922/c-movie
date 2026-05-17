import styles from "./index.module.css";

export default function Badge({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${styles.badge} ${className}`} {...props}>
      {children}
    </div>
  );
}
