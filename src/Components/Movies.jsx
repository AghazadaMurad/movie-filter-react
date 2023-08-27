// Components
import MovieItem from "./MovieItem";

const Movies = (props) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {props.movies.map((movie, index) => (
        <MovieItem
          key={index}
          image={movie.image}
          name={movie.name}
          genres={movie.genres}
          imdb={movie.imdb}
        />
      ))}
    </div>
  );
};

export default Movies;
