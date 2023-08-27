import React from "react";

const MovieItem = (props) => {
  return (
    <div className="font-poppins relative">
      <div className="mb-2">
        <img className="h-[400px]" src={props.image} alt="" />
      </div>
      <h1 className="text-lg text-gray-900">{props.name}</h1>
      {props.genres.map((genre, index) => (
        <span key={index} className="text-blue-500  mr-1 text-sm">
          {genre}
        </span>
      ))}

      <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 px-5 py-1 rounded-full text-sm font-medium border border-black">
        {props.imdb}
      </span>
    </div>
  );
};

export default MovieItem;
