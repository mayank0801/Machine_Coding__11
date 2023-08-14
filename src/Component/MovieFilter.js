import { useContext, useRef, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { useClickOutside } from "../CustomHook/useClickOutside";
import { genre } from "../Data/data";
import AddMovieModal from "./AddMovieModal";

export default function MovieFilter() {
  const year = new Date().getFullYear();
  const { dispatch, filters, setFilterDb } = useContext(DataContext);
  const [isOpenmodal, setModal] = useState(false);
  const modalRef = useRef();

  useClickOutside(modalRef, setModal);

  return (
    <div className="filter-container">
      <h2>Movies</h2>
      <select
        value={filters?.genre}
        onChange={(e) =>
          dispatch({
            type: "APPLY_FILTER",
            payload: { type: "genre", value: e.target.value },
            setFilterDb
          })
        }
      >
        <option value={""}>Select Genre</option>
        {genre.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>
      <select
        value={filters?.year}
        onChange={(e) =>
          dispatch({
            type: "APPLY_FILTER",
            payload: { type: "year", value: e.target.value },
            setFilterDb
          })
        }
      >
        <option value={""}>Realease Year</option>
        {Array.from(new Array(40), (v, i) => (
          <option key={i} value={year - i}>
            {year - i}
          </option>
        ))}
      </select>
      <select
        value={filters?.rating}
        onChange={(e) =>
          dispatch({
            type: "APPLY_FILTER",
            payload: { type: "rating", value: e.target.value },
            setFilterDb
          })
        }
      >
        <option value={""}>Rating</option>
        {Array.from(new Array(10), (v, i) => (
          <option key={i} value={10 - i}>
            {10 - i}
          </option>
        ))}
      </select>
      <button onClick={() => setModal(!isOpenmodal)}>Add Movie</button>

      {isOpenmodal && (
        <div className="Modal-wrapper">
          <div className="Wrapper" ref={modalRef}>
            <AddMovieModal setModal={setModal} />
          </div>
        </div>
      )}
    </div>
  );
}
