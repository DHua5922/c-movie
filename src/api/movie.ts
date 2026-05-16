import axios from "axios";

const publicApiKey = "e1dc213ccbcaa6eadb77075160fe39dd";
const apiBaseUrl = "https://api.themoviedb.org";

async function getMovieListApi(movieName: string, pageNum: number) {
  const response = await axios({
    method: "get",
    url: `${apiBaseUrl}/3/search/movie?api_key=${publicApiKey}&language=en-US&query=${movieName}&page=${pageNum}`,
  });
  return response.data;
}

export { getMovieListApi };
