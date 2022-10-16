import React from "react";
import request from "../../API";
import { ImageURL } from "../../API";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiWindowClose } from "react-icons/bi";
import { useFetchMovies } from "../useFetch";
import YouTube from "react-youtube";

const Banner = () => {
  const { singleMovie, stringManage, trailer, setTrailer, opts, handleClick } =
    useFetchMovies(request[0].url);

  const bannerBtn = `border-0 outline-none bg-slate-900 py-1 w-[6rem]  flex items-center justify-center gap-x-2  rounded-sm text-lg ease-in duration-300 hover:bg-gradient-to-l hover:from-slate-900 hover:bg-[red] hover:to-[#ff6eff48] hover:bg-center`;

  return (
    <header
      className={`relative bg-no-repeat bg-cover bg-center h-[70vh] bg-fixed z-[1] before:absolute before:content[''] before:w-2/3 before:h-full before:z-0 before:left-0 before:top-0 before:bg-gradient-to-r before:from-black before:to-transparent`}
      style={{
        backgroundImage: `url('${ImageURL}${singleMovie?.backdrop_path}')`,
      }}
    >
      <div className="max-w-[35rem] text-white absolute top-[60%] left-14 -translate-y-1/2">
        <h1 className="text-white/95 text-5xl font-semibold">
          {singleMovie?.title ||
            singleMovie?.name ||
            singleMovie?.original_name}
        </h1>

        <div className="flex gap-x-4 py-4">
          <button
            className={`${bannerBtn}`}
            onClick={() => handleClick(singleMovie)}
          >
            <span>
              <FaRegPlayCircle />
            </span>
            <span>play</span>
          </button>
          <button className={`${bannerBtn}`}>My list</button>
        </div>
        <p className="opacity-80">{stringManage(singleMovie?.overview, 150)}</p>
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
    </header>
  );
};
export default Banner;
