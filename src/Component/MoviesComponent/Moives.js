import React from "react";
import request from "../../API";
import Movie from "./Movie";

const Movies = () => {
  return (
    <section className="py-4">
      <div className="max-w-[1100px] lg:max-w-[1240px] mx-auto mt-4 flex flex-col gap-y-1 overflow-x-hidden px-2">
        {request?.map((item) => (
          <Movie
            key={item.rowId}
            rowId={item.rowId}
            heading={item.title}
            fetchUrl={item.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Movies;
