import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, CoverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={CoverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>
        <p>
          <b>Summary</b>
        </p>{" "}
        {summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}
      </p>
      <br></br>
      <p>
        <b>Genres</b>
      </p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
