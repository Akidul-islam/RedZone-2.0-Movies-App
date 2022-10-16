import React from "react";
import YouTube from "react-youtube";
import { ImageURL } from "../../API";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useFetchMovies } from "../useFetch";
import { SiBbciplayer } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { BiWindowClose } from "react-icons/bi";
import { Link } from "react-router-dom";
const Movie = ({ heading, fetchUrl, rowId }) => {
  const {
    movies,
    setTrailer,
    loading,
    trailer,
    opts,
    handleClick,
    sliderRight,
    sliderleft,
  } = useFetchMovies(fetchUrl, rowId);

  // REVIEWS FUNCTION

  const arrowBtn = `text-white bg-slate-900 opacity-0 text-2xl w absolute cursor-pointer grid place-items-center top-[60%] -translate-y-1/2 border-0 outline-none w-[40px] h-[40px] rounded-[50%] z-10 ease-in duration-500`;

  const iconHover = `text-white text-2xl hover:text-Red relative duration-300 ease-in  before:absolute before:top-0 before:shadow-sm before:scale-0 before:opacity-0 before:duration-300 before:ease-linear hover:before:scale-100 hover:before:opacity-100 before:text-white before:text-sm`;

  if (loading) {
    return (
      <div className="grid place-items-center h-[60vh] bg-black ">
        <h2 className="text-white/80 font-semibold text-lg">loading....</h2>
      </div>
    );
  } else {
    return (
      //notice here
      <div className="arrow_hover w-full relative">
        <h2 className="text-lg text-yellow-50 font-medium pl-3">{heading}</h2>
        <button
          className={`${arrowBtn} left-0 hover:text-Red hover:bg-slate-400/50 arrow`}
          onClick={sliderleft}
        >
          {<IoIosArrowBack />}
        </button>
        <button
          className={`${arrowBtn} right-0 hover:text-Red hover:bg-slate-400/50 arrow`}
          onClick={sliderRight}
        >
          {<IoIosArrowForward />}
        </button>
        <div
          className="scrollbar-hide overflow-y-hidden overflow-x-scroll flex gap-x-4 p-4"
          id={"slider" + rowId}
        >
          {movies.map((movie) => {
            return (
              <article
                key={movie.id}
                className="relative group cursor-pointer h-[100px] flex-none w-[180px] opacity-80 ease-linear duration-300 hover:scale-105 hover:opacity-100 overflow-hidden hover:animate-fade"
              >
                <img
                  className="rounded-sm  w-full object-cover"
                  src={`${ImageURL}${movie.backdrop_path}`}
                  alt={movie.name}
                />
                <div className="absolute flex justify-center items-center gap-x-2 top-0 left-0 bg-slate-900/50 w-full h-full scale-0  ease-linear duration-500 group-hover:scale-100">
                  <Link to={`/${movie.id}`}>
                    <span
                      className={`${iconHover} before:content-['reviews'] before:-left-14`}
                    >
                      <MdPreview />
                    </span>
                  </Link>

                  <span
                    className={`${iconHover} before:content-['play'] before:-right-8`}
                    onClick={() => handleClick(movie)}
                  >
                    <SiBbciplayer />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {trailer && (
          <div className="fixed top-0 z-[1000] bg-black w-full h-full">
            <div className="absolute top-[10%] w-full">
              <button
                className='absolute z-0 top-3 right-40 text-white sm:bg-transparent px-2 flex flex-col before:absolute before:text-white before:content-["Exit&home"] before:top-10 before:-left-10 before:scale-0 before:duration-300 before:ease-linear hover:before:scale-100'
                onClick={() => setTrailer("")}
              >
                <span className="text-2xl">
                  <BiWindowClose />
                </span>
                <span className="text-base text-white/80 font-[500]">Exit</span>
              </button>
              <YouTube videoId={trailer} opts={opts} />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Movie;
