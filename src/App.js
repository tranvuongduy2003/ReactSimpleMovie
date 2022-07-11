import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)] rounded-lg"></div>
          <img
            src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-8 bottom-8 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 text-xs mb-8">
              <span className="py-1 px-2 border border-white rounded-md">
                Action
              </span>
              <span className="py-1 px-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-1 px-2 border border-white rounded-md">
                Drama
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
                Watch now
              </button>
              <span className="text-white py-3 px-4 bg-black bg-opacity-50 rounded-lg cursor-pointer">
                <i class="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
