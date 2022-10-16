import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
// import request from "../API";
export const useFetchMovies = (url, rowId) => {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState("");

  // play function
  const handleClick = (movie) => {
    if (trailer) {
      setTrailer("");
      return;
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URL(url).search;
          const newParam = new URLSearchParams(urlParams);
          // let id =  urlParams.slice(3)
          setTrailer(newParam.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // YOUTUBE CONTROLLER
  const opts = {
    height: 390,
    width: "100%",
    // https://developers.google.com/youtube/player_parameters
    playerVars: {
      autoPlay: 1,
      origin: "https://www.youtube.com",
    },
  };

  // FETCH ALL THE
  const items = false;
  useEffect(() => {
    const getMovies = async (serach) => {
      try {
        const endPoint = serach ? `` : url;
        const response = await fetch(`${endPoint}`);
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies(items);
  }, [url, items]);

  // Fetch Random Single Moives
  useEffect(() => {
    const BannerData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setSingleMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };
    BannerData();
  }, [url]);

  // paragrap control
  const stringManage = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) : string;
  };

  const sliderRight = () => {
    const slide = document.getElementById("slider" + rowId);
    slide.scrollLeft = slide.scrollLeft + 500;
  };

  const sliderleft = () => {
    const slide = document.getElementById("slider" + rowId);
    slide.scrollLeft = slide.scrollLeft - 500;
  };

  return {
    movies,
    loading,
    trailer,
    singleMovie,
    setTrailer,
    opts,
    handleClick,
    stringManage,
    sliderleft,
    sliderRight,
    items,
  };
};
