import React, { useContext } from "react";
import { SearchContext } from "../hooks/searchContext";

const Navbar = () => {
  const { title, setTitle, searchMovie } = useContext(SearchContext);
  return (
    <div className="bg-gray-800 text-white py-3 px-4 md:px-6 fixed w-full z-10">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl">
        {/* Logo Section */}
        <h1 className="text-2xl md:text-3xl font-bold">
          <a href="/" className="hover:text-gray-300">
            MovieLand
          </a>
        </h1>

        {/* Search Bar Section */}
        <div className="relative flex items-center w-full mt-4 md:mt-0 md:w-auto">
          <label className="flex items-center gap-2 bg-gray-700 rounded-full pl-3 pr-2 py-2 w-full md:w-auto">
            <input
              type="text"
              className="bg-transparent text-white placeholder-gray-400 outline-none w-full md:w-60 lg:w-80"
              placeholder="Search for movies"
              value={title}
              onChange={(e) => setTitle(e.target.value)} // Update context value
            />
            <button
              onClick={() => searchMovie(title)} // Call search function from context
              className="p-2 text-white rounded-full hover:bg-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
