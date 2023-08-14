export default function reducer(state, action) {
  switch (action.type) {
    case "APPLY_FILTER": {
      action.setFilterDb({
        ...state.filters,
        [action.payload.type]: action.payload.value
      });
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: action.payload.value
        }
      };
    }
    case "ADD_MOVIE": {
      const updatedmovie = [...state.DBmovies, action.payload];
      action.setmovieDb(updatedmovie);
      return { ...state, DBmovies: [...updatedmovie] };
    }
    case "ADD_WATCHLIST": {
      const updatedWatchList = [...state.DBwatchlater, action.payload];
      action.setwatchlaterDb(updatedWatchList);
      return { ...state, DBwatchlater: [...updatedWatchList] };
    }
    case "REMOVE_FROM_WATCHLIST": {
      const updatedWatchList = state.DBwatchlater.filter(
        (movie) => movie.id !== action.payload.id
      );
      action.setwatchlaterDb(updatedWatchList);
      return { ...state, DBwatchlater: [...updatedWatchList] };
    }
    case "STAR_MOVIE": {
      const updatedStarredMovie = [...state.DBmoviesStarred, action.payload];
      action.setstarredDb(updatedStarredMovie);
      return { ...state, DBmoviesStarred: updatedStarredMovie };
    }
    case "UNSTAR_MOVIE": {
      const updatedStarredMovie = state.DBmoviesStarred.filter(
        (movie) => movie.id !== action.payload.id
      );
      action.setstarredDb(updatedStarredMovie);
      return { ...state, DBmoviesStarred: updatedStarredMovie };
    }
    default:
      return { ...state };
  }
}
