import styles from "./index.module.css";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  totalResults: number;
}

export default function MovieFilter({
  className,
  totalResults,
  ...props
}: Props) {
  return (
    <div className={`${styles.movie__filter} ${className}`}>
      <h2 className="text-primary">Search Results: {totalResults}</h2>

      <select
        className={`text-primary ${styles["movie__filter--select"]}`}
        {...props}
      >
        <option value="">-- Choose Filter --</option>
        <option value="alphabetical">Alphabetical A to Z</option>
        <option value="reverse-alphabetical">Alphabetical Z to A</option>
        <option value="newest">Newest to oldest</option>
        <option value="oldest">Oldest to newest</option>
      </select>
    </div>
  );
}
