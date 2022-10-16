import React from "react";
import { ImageURL } from "../../API";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useFetchMovies } from "../useFetch";

const MovieCast = ({ movieRb, rowId }) => {
  const { sliderRight, sliderleft } = useFetchMovies(null, rowId);

  const arrowBtn = `text-white bg-slate-900 opacity-0 text-2xl w absolute cursor-pointer grid place-items-center top-[60%] -translate-y-1/2 border-0 outline-none w-[40px] h-[40px] rounded-[50%] z-10 ease-in duration-500`;
  return (
    <article className="container arrow_hover relative mx-auto mt-10">
      <h2 className="text-white text-ellipsis">MovieCast</h2>
      <div>
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
      </div>
      <div
        className="flex mt-4 gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide"
        id={"slider" + rowId}
      >
        {movieRb?.movieCast.map((item) => {
          return (
            <div
              key={item.id}
              className="flex-none rounded-md overflow-hidden w-[180px] bg-slate-600/30 cursor-pointer"
            >
              <img
                className="object-cover w-[180px] h-[200px] rounded-t-md"
                src={`${ImageURL}${item?.profile_path}`}
                alt={"missing"}
              />
              <div className=" px-2 text-white text-base grid items-center">
                <h2 className="font-medium opacity-90 ">
                  {item?.original_name}
                </h2>
                <h4>{item?.character}</h4>
                <p className="text-slate-300">
                  popularity:{" "}
                  <span className="font-semibold text-teal-400">
                    {`${Math.round(item?.popularity)}`}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default MovieCast;
