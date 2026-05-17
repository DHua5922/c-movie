import { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import MovieImage from "../../components/shared/MovieImage";
import styles from "./index.module.css";
import { useParams } from "react-router";
import { getMovieApi } from "../../api/movie";
import Loader from "../../components/shared/Loader";
import type { MovieDisplay } from "../../types/movie";
import Badge from "../../components/shared/Badge";
import { IoMdArrowBack } from "react-icons/io";

function useMovie() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDisplay>({
    id: 0,
    title: "",
    poster_path: "",
    release_date: "",
    overview: "",
    onClick: () => {},
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    original_language: "",
    original_title: "",
    popularity: 0,
    softcore: false,
    video: false,
    vote_average: 0,
    vote_count: 0,
    genres: [],
    tagline: "",
    status: "",
  });
  const params = useParams();
  const movieId = Number(params.id || "0");

  useEffect(() => {
    async function getMovie() {
      setIsLoading(true);
      setMovie(await getMovieApi(movieId));
      setIsLoading(false);
    }

    if (movieId) getMovie();
  }, [movieId]);

  return { movie, isLoading };
}

export default function MoviePage() {
  const { movie, isLoading } = useMovie();

  return (
    <section>
      <Container className={`scale-in ${styles.movie__container}`}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button
              className={styles["movie__back--button"]}
              onClick={() => window.history.back()}
            >
              <IoMdArrowBack className={styles["movie__back--icon"]} /> Back
            </button>
            <div className={styles.movie__row}>
              <MovieImage
                title={movie.title}
                posterPath={movie.poster_path}
                containerClassName={styles["movie__img--wrapper"]}
                overlay={false}
              />
              <div className={styles.movie__details}>
                <h1>{movie.title}</h1>

                <p className={styles.movie__tagline}>{movie.tagline}</p>
                <p className={styles.movie__languages}>
                  <strong>Languages:</strong>{" "}
                  {movie.spoken_languages
                    ?.map((lang) => lang.english_name)
                    .join(", ")}
                </p>
                <p className={styles.movie__status}>{movie.status}</p>

                <p className={styles.movie__overview}>{movie.overview}</p>

                <div className={styles.movie__genres}>
                  {movie.genres.map((genre) => (
                    <Badge key={genre.id}>{genre.name}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
