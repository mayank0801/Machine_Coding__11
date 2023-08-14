import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../Context/DataContext";
import { StarredFilter, WatchLaterFilter } from "../Utlis/utlis";

export default function MovieCard({ movie, WatchList, Starred }) {
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
  } = movie;

  const {
    DBwatchlater,
    DBmoviesStarred,
    dispatch,
    setwatchlaterDb,
    setstarredDb
  } = useContext(DataContext);
  const isWatchlater = WatchLaterFilter(DBwatchlater, id);
  const isStarred = StarredFilter(DBmoviesStarred, id);
  const navigate = useNavigate();
  const starHandler = () => {
    if (!isStarred) {
      dispatch({ type: "STAR_MOVIE", payload: movie, setstarredDb });
    } else if (Starred)
      dispatch({ type: "UNSTAR_MOVIE", payload: movie, setstarredDb });
  };

  const watchlaterHandler = () => {
    if (!isWatchlater)
      dispatch({ type: "ADD_WATCHLIST", payload: movie, setwatchlaterDb });
    else if (WatchList)
      dispatch({
        type: "REMOVE_FROM_WATCHLIST",
        payload: movie,
        setwatchlaterDb
      });
  };

  return (
    <div className="movie-card">
      <img
        src={imageURL}
        alt="movieposter"
        onClick={() => navigate(`/movie/${id}`)}
      />
      <main>
        <h1>{title}</h1>
        <strong>{summary}</strong>
        {!WatchList && !Starred && (
          <div>
            <button className="btn btn-star" onClick={starHandler}>
              {isStarred ? "Starred" : "Star"}
            </button>
            <button className="btn btn-watch" onClick={watchlaterHandler}>
              {isWatchlater ? "Added to WatchList" : "Add To Watchlist"}
            </button>
          </div>
        )}

        {WatchList && (
          <div>
            <button className="btn btn-watch" onClick={watchlaterHandler}>
              {isWatchlater ? "Remove to WatchList" : "Add To Watchlist"}
            </button>
          </div>
        )}

        {Starred && (
          <div>
            <button className="btn btn-star" onClick={starHandler}>
              {isStarred ? "Unstar" : "Star"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
