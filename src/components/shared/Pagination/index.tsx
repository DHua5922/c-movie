import Input from "../Input";
import styles from "./index.module.css";

interface Props {
  currPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
  onSubmit: React.SubmitEventHandler<HTMLFormElement> | undefined;
  className?: string;
}

export default function Pagination({
  currPage,
  totalPages,
  onChangePage,
  onSubmit,
  className = "",
}: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Input
        value={currPage}
        onChange={(e) => {
          const page = Math.max(
            1,
            Math.min(totalPages, Number(e.target.value)),
          );
          if (!isNaN(page)) onChangePage(page);
        }}
        onSubmit={onSubmit}
        className={styles.pagination__input}
      />
      of <span>{totalPages}</span>
    </div>
  );
}
