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
      <button
        key={movie.id}
        className={styles["movie"]}
        onClick={movie.onClick}
      >
        <MovieImage
          className={styles["movie__poster"]}
          title={movie.title}
          posterPath={movie.poster_path}
        />
        <h6 className={styles["movie__title"]}>{movie.title}</h6>
      </button>
    </div>
  );
}
