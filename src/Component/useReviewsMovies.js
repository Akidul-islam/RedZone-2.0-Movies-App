import { useState, useEffect } from "react";
import { fetchReviews } from "../API";

const useReviesMovies = (movieId) => {
  const [movieRb, setMovieRb] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // OVERVIEWS
  useEffect(() => {
    const movieReviwes = async (movieId) => {
      try {
        const movie = await fetchReviews.fetchMovie(movieId);
        const credits = await fetchReviews.fetchCredit(movieId);
        setMovieRb({
          ...movie,
          movieCast: credits.cast,
          moiveCrew: credits.crew,
        });
        setLoading(false);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    movieReviwes(movieId);
  }, [movieId]);

  return { movieRb, loading, error };
};
export default useReviesMovies;
