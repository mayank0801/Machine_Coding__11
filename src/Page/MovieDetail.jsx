import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { StarredFilter, WatchLaterFilter } from "../Utlis/utlis";

export default function MovieDetail() {
  const { movieId } = useParams();
  const { DBmovies, setwatchlaterDb, setstarredDb } = useContext(DataContext);
  const movieDetail = DBmovies.find(({ id }) => id == movieId);
  const {
    id,
    imageURL,
    cast,
    writer,
    director,
    rating,
    genre,
    year,
    summary,
    title
  } = movieDetail;

  const { DBwatchlater, DBmoviesStarred, dispatch } = useContext(DataContext);
  const isWatchlater = WatchLaterFilter(DBwatchlater, id);
  const isStarred = StarredFilter(DBmoviesStarred, id);
  const starHandler = () => {
    if (!isStarred) {
      dispatch({ type: "STAR_MOVIE", payload: movieDetail, setstarredDb });
    } else
      dispatch({ type: "UNSTAR_MOVIE", payload: movieDetail, setstarredDb });
  };

  const watchlaterHandler = () => {
    if (!isWatchlater)
      dispatch({
        type: "ADD_WATCHLIST",
        payload: movieDetail,
        setwatchlaterDb
      });
    else
      dispatch({
        type: "REMOVE_FROM_WATCHLIST",
        payload: movieDetail,
        setwatchlaterDb
      });
  };
  return (
    <div className="movieDetail">
      <img src={imageURL} alt="moviePoster" />
      <div>
        <h1>{title}</h1>
        <h3>{summary}</h3>
        <p>Year:{year}</p>
        <p>Genre:{genre}</p>
        <p>Director:{director}</p>
        <p>Writer:{writer}</p>
        <p>Cast:{cast}</p>
        <div>
          <button className="btn btn-star" onClick={starHandler}>
            {isStarred ? "Starred" : "Star"}
          </button>
          <button className="btn btn-watch" onClick={watchlaterHandler}>
            {isWatchlater ? "Added to WatchList" : "Add To Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
