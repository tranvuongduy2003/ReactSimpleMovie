import { Fragment } from "react";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-5 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="relative w-full h-full rounded-lg">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)] rounded-lg"></div>
          <img
            src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-full text-white left-8 bottom-8">
            <h2 className="mb-5 text-3xl font-bold">Avengers: Endgame</h2>
            <div className="flex items-center mb-8 text-xs gap-x-3">
              <span className="px-2 py-1 border border-white rounded-md">
                Action
              </span>
              <span className="px-2 py-1 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-2 py-1 border border-white rounded-md">
                Drama
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">
                Watch now
              </button>
              <span className="px-4 py-3 text-white bg-black bg-opacity-50 rounded-lg cursor-pointer">
                <i class="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 movie-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="pb-20 movie-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-20 movie-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
