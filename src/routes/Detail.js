import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const data = await response.json();
      setMovie(data.data.movie);
    } catch (error) {
      console.error("영화 정보를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      <h1>-Detail-</h1>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Rating: {movie.rating}</p>
          <p>Genres: {movie.genres.join(", ")}</p>
          <p>Synopsis: {movie.description_full}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;
