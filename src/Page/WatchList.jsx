import { useContext } from "react";
import MovieCard from "../Component/MovieCard";
import { DataContext } from "../Context/DataContext";

export default function WatchList() {
  const { DBwatchlater } = useContext(DataContext);
  if (DBwatchlater.length == 0) return <h1>NO Movie In WatcHlist</h1>;
  return (
    <div className="movie-container">
      {DBwatchlater.map((movie) => (
        <MovieCard key={movie.id} movie={movie} WatchList={true} />
      ))}
    </div>
  );
}
