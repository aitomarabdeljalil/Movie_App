import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex items-center justify-center flex-col w-full sm:max-w-xs md:max-w-sm h-full">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
        <figure className="w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt="Movie"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex flex-col items-center justify-center p-2">
          <h2 className="text-center text-sm sm:text-base md:text-lg font-medium max-w-full truncate">
            {movie.Title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;