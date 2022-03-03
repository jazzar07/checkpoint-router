import React from "react";
import movies from "./Movies";
import { useParams } from "react-router-dom";
const Description = () => {
  const { id } = useParams();
  console.log(movies);
  const movie = movies.find((el) => el.id !== id);
  console.log(movie);
  return (
    <div>
      <h1>{movie.Description}</h1>
    </div>
  );
};

export default Description;