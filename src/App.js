import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import { SearchContext } from "./hooks/searchContext";

const API_URL = "http://omdbapi.com?apikey=2182defa";



/**
 * The main App component that manages the movie search functionality.
 * It fetches movie data from the OMDb API based on the user's search query,
 * and renders a list of movie cards using the `MovieCard` component.
 * The component also provides the search-related state and functions
 * to its child components through the `SearchContext`.
 */
const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data?.Search);
  };

  useEffect(() => {
    searchMovie(title);
  }, []);

  return (
    <SearchContext.Provider value={ {title, setTitle, searchMovie} }>
      <div>
        <Navbar />
        <div className="flex items-center justify-center flex-row space-x-4 w-full pt-40 md:pt-28">
          {movies?.length > 0 ? (
            <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 px-3 place-items-center justify-center gap-3">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <h2 className="">No movies found</h2>
            </div>
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default App;