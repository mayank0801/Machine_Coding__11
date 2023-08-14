import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

export default function Header() {
  const {
    dispatch,
    filters: { searchText },
    setFilterDb
  } = useContext(DataContext);
  return (
    <header className="header">
      <NavLink to="/" className="nav-item">
        <h2>IMBD</h2>
      </NavLink>
      <input
        type="search"
        value={searchText}
        placeholder="Search Movie by Cast Genre"
        onChange={(e) =>
          dispatch({
            type: "APPLY_FILTER",
            payload: { type: "searchText", value: e.target.value },
            setFilterDb
          })
        }
      />
      <nav>
        <NavLink to="/" className="nav-item">
          Movie{" "}
        </NavLink>
        <NavLink to="/watchlist" className="nav-item">
          WatchList{" "}
        </NavLink>
        <NavLink to="/starred" className="nav-item">
          Starred Movie{" "}
        </NavLink>
      </nav>
    </header>
  );
}
