import { useContext, useState } from "react";
import MovieCard from "../Component/MovieCard";
import MovieFilter from "../Component/MovieFilter";
import { DataContext } from "../Context/DataContext";
import { filterData } from "../Utlis/utlis";

export default function Movies() {
  const { DBmovies, filters, DBmoviesStarred } = useContext(DataContext);
  const filteredMovies = filterData(
    DBmovies,
    filters.genre,
    filters.year,
    filters.rating,
    filters.searchText
  );

  console.log(DBmoviesStarred);
  return (
    <>
      <MovieFilter />
      <main className="movie-container">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </>
  );
}
