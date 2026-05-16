import React from "react";
import type { MovieDisplay } from "../../../../types/movie";
import MovieImage from "../../../shared/MovieImage";
import styles from "./index.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  movie: MovieDisplay;
}

export default function MovieDisplay({ movie, className, ...props }: Props) {
  return (
    <div className={`${styles["movie__wrapper"]} ${className}`} {...props}>
      <div key={movie.id} className={styles["movie"]}>
        <div className={styles.movie__overlay}>Click to see more details</div>
        {movie.poster_path ? (
          <MovieImage
            className={styles["movie__poster"]}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ) : (
          <div className={styles["movie__poster--skeleton"]}>
            Poster Not Available
          </div>
        )}
        <h6 className={styles["movie__title"]}>{movie.title}</h6>
      </div>
    </div>
  );
}
