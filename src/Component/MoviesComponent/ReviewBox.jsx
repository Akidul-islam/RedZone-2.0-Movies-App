import React from "react";
import useReviewsMovies from "../useReviewsMovies";
import { useParams } from "react-router-dom";
import { ImageURL } from "../../API";
import { MdFavoriteBorder } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import MovieCast from "./MovieCast";

const ReviewBox = () => {
  const { movieId } = useParams();
  const { movieRb, error, loading } = useReviewsMovies(movieId);

  if (error) {
    return (
      <h2 className="text-3xl h-[100vh] bg-slate-900/80 grid place-items-center">
        CONTENT NOT FOUND
      </h2>
    );
  }
  if (loading) {
    return (
      <section className="h-[100vh]  grid place-content-center bg-slate-900 ">
        <span className="w-[8rem] h-[8rem] shadow-md rounded-full border-t-4 border-Red animate-circle"></span>
        {/* <h2 className="text-4xl text-white/80 font-semibold">Loading</h2> */}
      </section>
    );
  }
  return (
    <section
      className={`bg-slate-900 pb-10  text-3xl duration-500 ease-linear scale-0 ${movieRb && "scale-100"
        }`}
    >
      {movieRb && (
        <div
          className='relative min-h-[100vh] sm:flex items-center gap-14 md:py-0 py-20  px-14 z-10 bg-no-repeat bg-cover bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[""] before:backdrop-blur-sm before:-z-[1] before:bg-gradient-to-r before:from-transparent before:to-slate-900'
          style={{
            backgroundImage: `url('${ImageURL}${movieRb?.backdrop_path}')`,
          }}
        >
          <div className="overflow-hidden w-1/2 md:w-auto md:h-[380px] rounded-md cursor-pointer shadow-lg">
            <img
              className="w-full md:h-[380px] rounded-md
          object-cover duration-300 ease-linear hover:scale-105 border-none outline-none"
              src={`${ImageURL}${movieRb.poster_path}`}
              alt={movieRb.original_title}
            />
          </div>
          <div className="">
            <div>
              <h1 className="max-w-[400px] text-2lg text-white font-bold">
                {movieRb?.original_title} (
                <span className="px-1">{`${movieRb?.release_date.slice(
                  0,
                  4
                )}`}</span>
                )
              </h1>
              <div className="flex gap-x-2">
                {movieRb?.genres.map((item) => (
                  <span
                    key={item.id}
                    className="text-base font-semibold text-white/75"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-x-4">
              <div className="grid place-content-center cursor-pointer border-l-2 border-Red hover:border-r-2 hover:border-l-0 duration-300 ease-linear w-[4rem] h-[4rem] bg-slate-900 rounded-full">
                <span className="text-base text-teal-300 font-medium">{`${Math.round(
                  movieRb?.vote_average * 10
                )}%`}</span>
              </div>
              <span className="grid place-content-center cursor-pointer text-white w-[3rem] h-[3rem] bg-slate-900 rounded-full">
                {<RiPlayListFill />}
              </span>
              <span className="grid place-content-center cursor-pointer text-white w-[3rem] h-[3rem] bg-slate-900 rounded-full">
                {<MdFavoriteBorder />}
              </span>
              <span className="grid place-content-center cursor-pointer text-white w-[3rem] h-[3rem] bg-slate-900 rounded-full">
                {<BsFillBookmarkCheckFill />}
              </span>
            </div>
            <div className="max-w-md">
              <p className="mt-4 text-justify text-base text-white/70 font-medium">
                {movieRb?.overview.substring(0, 250)}
              </p>
              <p></p>
            </div>
          </div>
        </div>
      )}

      <MovieCast movieRb={movieRb} rowId="1" />
    </section>
  );
};

export default ReviewBox;
