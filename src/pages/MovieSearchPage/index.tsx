import { useNavigate, useSearchParams } from "react-router";
import type { MovieDisplay as MovieDisplayType } from "../../types/movie";
import { useCallback, useEffect, useState } from "react";
import { getMovieListApi } from "../../api/movie";
import styles from "./index.module.css";
import Container from "../../components/shared/Container";
import Header from "../../components/shared/Header";
import Loader from "../../components/shared/Loader";
import MovieFilter from "../../components/features/movie-search/MovieFilter";
import Pagination from "../../components/shared/Pagination";
import MovieDisplay from "../../components/features/movie-search/MovieDisplay";

type MovieSortOption =
  | "alphabetical"
  | "reverse-alphabetical"
  | "newest"
  | "oldest"
  | "";

function sortMovieList(
  movies: MovieDisplayType[],
  sortOption: MovieSortOption,
) {
  const sortedMovies = movies.slice();

  if (sortOption === "alphabetical") {
    return sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortOption === "reverse-alphabetical") {
    return sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sortOption === "newest") {
    return sortedMovies.sort((a, b) =>
      b.release_date.localeCompare(a.release_date),
    );
  }

  if (sortOption === "oldest") {
    return sortedMovies.sort((a, b) =>
      a.release_date.localeCompare(b.release_date),
    );
  }

  return movies;
}

function getMovieSortOption(value: string) {
  if (
    value === "alphabetical" ||
    value === "reverse-alphabetical" ||
    value === "newest" ||
    value === "oldest"
  ) {
    return value;
  }

  return "";
}

function useMovies(desiredMovieName: string) {
  const [movies, setMovies] = useState<MovieDisplayType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useCallback(
    async (pageNum: number) => {
      if (!desiredMovieName) return;

      try {
        setIsLoading(true);
        const movieListData = await getMovieListApi(desiredMovieName, pageNum);
        setMovies(movieListData.results);
        setTotalPages(movieListData.total_pages);
        setTotalResults(movieListData.total_results);
      } finally {
        setIsLoading(false);
      }
    },
    [desiredMovieName],
  );

  const sortMovies = useCallback((sortOption: MovieSortOption) => {
    setMovies((movies) => sortMovieList(movies, sortOption));
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      getMovies(1);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [getMovies]);

  return {
    movies,
    sortMovies,
    totalPages,
    totalResults,
    isLoading,
    getMovies,
  };
}

function useMovieSearchInput(movieName: string) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(movieName);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/movies?name=${inputValue}`);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  return {
    value: inputValue,
    onSubmit,
    onChange,
  };
}

function usePagination(
  totalPages: number,
  getMovies: (pageNum: number) => Promise<void>,
) {
  const [currPage, setCurrPage] = useState(1);

  return {
    currPage,
    totalPages,
    onChangePage: setCurrPage,
    onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      getMovies(currPage);
    },
  };
}

export default function MovieSearchPage() {
  const [params] = useSearchParams();
  const movieName = params.get("name") || "";
  const { movies, sortMovies, totalPages, totalResults, isLoading, getMovies } =
    useMovies(movieName);
  const movieSearchInput = useMovieSearchInput(movieName);
  const pagination = usePagination(totalPages, getMovies);

  return (
    <section>
      <Container>
        <Header {...movieSearchInput}>
          <h1 className={`text-primary ${styles.title}`}>Search movies</h1>
        </Header>

        <div className={styles["movie__search-results"]}>
          {isLoading ? (
            <Loader className={styles.loader__container} />
          ) : (
            <>
              {movies.length > 0 ? (
                <>
                  <MovieFilter
                    totalResults={totalResults}
                    onChange={(evt) =>
                      sortMovies(getMovieSortOption(evt.target.value))
                    }
                  />

                  <div className={styles.movie__list}>
                    {movies.map((movie) => (
                      <MovieDisplay key={movie.id} movie={movie} />
                    ))}
                  </div>

                  <Pagination {...pagination} />
                </>
              ) : (
                <h2
                  className={`message ${styles["movie__search-results--message"]}`}
                >
                  No movies found.
                </h2>
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
