import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import MovieDetail from "./Page/MovieDetail";
import Movies from "./Page/Movies";
import StarredList from "./Page/StarredList";
import WatchList from "./Page/WatchList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/starred" element={<StarredList />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </main>
    </div>
  );
}
