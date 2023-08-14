import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import { DataContext } from "../Context/DataContext";

export default function AddMovieModal({ setModal }) {
  const { dispatch, setmovieDb } = useContext(DataContext);
  const [movieInfo, setMovieInfo] = useState(null);

  const submitHandler = () => {
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        ...movieInfo,
        id: uuid(),
        cast: movieInfo.cast.split(","),
        genre: movieInfo.genre.split(",")
      },
      setmovieDb
    });
    setMovieInfo(null);
    setModal(false);
  };

  return (
    <div className="Modal-container">
      <div className="Modal-container-card">
        <h2 className="padding-bottom">ADD NEW MOVIE</h2>
        <p className="padding-bottom">Fill Your Movie Information</p>
        <form onSubmit={submitHandler}>
          <label className="flex-coloumn padding-bottom ">
            Title
            <input
              type="text"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, title: e.target.value })
              }
              required
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            Summary
            <input
              type="text"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, summary: e.target.value })
              }
              required
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            Cast
            <input
              type="text"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, cast: e.target.value })
              }
              required
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            Director
            <input
              type="text"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, director: e.target.value })
              }
              required
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            Writer
            <input
              type="text"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, writer: e.target.value })
              }
              required
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            Year
            <input
              type="number"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, year: e.target.value })
              }
              id="yearInput"
              min="1900"
              max="2099"
              step="1"
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            Genre
            <input
              type="text"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, genre: e.target.value })
              }
              required
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            Rating
            <input
              type="number"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, rating: e.target.value })
              }
              min="1"
              max="10"
              required
            />
          </label>
          <label className="flex-coloumn padding-bottom">
            ImageUrl
            <input
              type="text"
              onChange={(e) =>
                setMovieInfo({ ...movieInfo, imageURL: e.target.value })
              }
              required
            />
          </label>

          <button type="submit" className="btn">
            ADD Movie
          </button>
        </form>
      </div>
    </div>
  );
}
