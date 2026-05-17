import { type ImgHTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  posterPath: string;
  containerClassName?: string;
  overlay?: boolean;
}

export default function MovieImage({
  className = "",
  containerClassName = "",
  title,
  posterPath,
  overlay = true,
}: Props) {
  return (
    <figure
      className={`${styles["movie__img--wrapper"]} ${containerClassName}`}
    >
      {overlay && (
        <div className={styles.movie__overlay}>Click to see more details</div>
      )}

      {posterPath ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title}
          className={`img ${styles.movie__poster} ${className}`}
        />
      ) : (
        <div className={styles["movie__poster--skeleton"]}>
          Poster Not Available
        </div>
      )}
    </figure>
  );
}
