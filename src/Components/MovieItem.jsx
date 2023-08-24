import React from "react";

const MovieItem = (props) => {
  return (
    <div className="font-poppins relative">
      <div className="mb-2">
        <img className="h-[400px]" src="" alt="" />
      </div>
      <h1 className="text-lg text-gray-900">Movie name</h1>
      <p className="text-blue-500 text-sm">Drama</p>
      <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 px-5 py-1 rounded-full text-sm font-medium border border-black">
        10
      </span>
    </div>
  );
};

export default MovieItem;
