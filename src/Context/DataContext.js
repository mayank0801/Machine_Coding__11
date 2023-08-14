import { createContext, useReducer, useState } from "react";
import useLocalStorage from "../CustomHook/useLocalStorage";
import { movies } from "../Data/data";
import reducer from "../Reducer/DataReducer";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  // const moviesDb = JSON.parse(localStorage.getItem("movies"));
  // const starredDb = JSON.parse(localStorage.getItem("starred"));
  // const watchlaterDb = JSON.parse(localStorage.getItem("watchlater"));
  //const filtersDB = JSON.parse(localStorage.getItem("filters"));

  const [moviesDb, setmovieDb] = useLocalStorage("movies", movies);
  const [watchlaterDb, setwatchlaterDb] = useLocalStorage("watchlater", []);
  const [starredDb, setstarredDb] = useLocalStorage("starred", []);
  const [filtersDB, setFilterDb] = useLocalStorage("filters", {
    genre: "",
    year: "",
    rating: "",
    searchText: ""
  });

  const [state, dispatch] = useReducer(reducer, {
    DBmovies: moviesDb,
    DBmoviesStarred: starredDb,
    DBwatchlater: watchlaterDb,
    filters: filtersDB
  });

  return (
    <DataContext.Provider
      value={{
        DBmovies: state.DBmovies,
        dispatch,
        filters: state.filters,
        DBwatchlater: state.DBwatchlater,
        DBmoviesStarred: state.DBmoviesStarred,
        setFilterDb,
        setmovieDb,
        setstarredDb,
        setwatchlaterDb
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
