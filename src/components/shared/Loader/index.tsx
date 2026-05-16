import styles from "./index.module.css";

export default function Loader({
  children = "Loading...",
  className = "",
  ...props
}) {
  return (
    <div className={`${styles.loader__container} ${className}`} {...props}>
      <div className={styles.loader} />
      <div className="message">{children}</div>
    </div>
  );
}
