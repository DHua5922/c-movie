import axios from "axios";

const publicApiKey = "e1dc213ccbcaa6eadb77075160fe39dd";

const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

async function getMovieListApi(movieName: string, pageNum: number) {
  const response = await movieAxios({
    method: "get",
    url: `/search/movie?api_key=${publicApiKey}&language=en-US&query=${movieName}&page=${pageNum}`,
  });
  return response.data;
}

async function getMovieApi(movieId: number) {
  const response = await movieAxios({
    method: "get",
    url: `/movie/${movieId}?api_key=${publicApiKey}&language=en-US`,
  });
  return response.data;
}

export { getMovieListApi, getMovieApi };
