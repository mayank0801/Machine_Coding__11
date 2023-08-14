import { useContext } from "react";
import MovieCard from "../Component/MovieCard";
import { DataContext } from "../Context/DataContext";

export default function StarredList() {
  const { DBmoviesStarred } = useContext(DataContext);
  if (DBmoviesStarred.length == 0) return <h1>No Starred Movies</h1>;
  return (
    <div>
      {DBmoviesStarred.map((movie) => (
        <MovieCard key={movie.id} movie={movie} Starred={true} />
      ))}
    </div>
  );
}
