// ! Hooks
import { useState } from "react";

// ! Data

import { movies as moviesData } from "./data";

// ! Components
import Categories from "./Components/Categories";
import Container from "./Components/Container";
import Movies from "./Components/Movies";

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const filterMovies = (category) => {
    if (category === "All Movies") {
      setMovies(moviesData);
    } else {
      const filteredMovies = moviesData.filter((movie) =>
        movie.genres.includes(category)
      );
      setMovies(filteredMovies);
    }
  };
  return (
    <Container>
      <Categories filterMovies={filterMovies} />
      <Movies movies={movies} />
    </Container>
  );
};

export default App;
