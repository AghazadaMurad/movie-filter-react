import { movies } from "../data";

// Styles
const styles = {
  ulStyles:
    "flex flex-wrap justify-center rounded-lg font-poppins bg-slate-900 p-5 mb-5",
  liStyles:
    "border border-white mr-2 mb-2 md:mb-0 bg-white text-sm px-2 py-1 rounded active:scale-95 transition-all hover:bg-transparent hover:text-white duration-200 cursor-pointer",
};

const categories = [
  "All Movies",
  ...new Set(movies.flatMap((movie) => movie.genres)),
];

const Categories = (props) => {
  return (
    <ul className={styles.ulStyles}>
      {categories.map((category, index) => (
        <li
          onClick={props.filterMovies.bind(null, category)}
          className={styles.liStyles}
          key={index}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
