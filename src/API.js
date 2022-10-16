const API_KEY = process.env.REACT_APP_API;

const Base_URL = `https://api.themoviedb.org/3`;

const ImageURL = "https://image.tmdb.org/t/p/original";

// Create review url request
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
// https://api.themoviedb.org/3/tv/{tv_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
// https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US

const fetchReviews = {
  fetchMovie: async (movieId) => {
    const movieEndpoint = `${Base_URL}/movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(movieEndpoint)).json();
  },

  fetchCredit: async (movieId) => {
    const creditsEndpoint = `${Base_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
};

// https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US
// SERCH URL
//   SerachBaseUrl: `${Base_URL}/search/movie?api_key=${API_KEY}&query=`,

export { Base_URL, ImageURL, fetchReviews };

const request = [
  {
    title: "UpComingMovies",
    url: `${Base_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    rowId: 1,
  },
  {
    title: "TrendingMovie",
    url: ` ${Base_URL}/trending/all/week?api_key=${API_KEY}`,
    rowId: 2,
  },
  {
    title: "TopRatedMovie",
    url: `${Base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    rowId: 3,
  },
  {
    title: "PopularMovies",
    url: `${Base_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    rowId: 4,
  },
  {
    title: "NowPlaying",
    url: `${Base_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    rowId: 5,
  },
];
export default request;

// TV SHOW API
