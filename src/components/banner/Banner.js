import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config/config";

const Banner = () => {
  const genresData = useSWR(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=7e12d3869fc93c0d942c505c589fe77a`,
    fetcher
  );
  const genres = genresData.data?.genres;
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=7e12d3869fc93c0d942c505c589fe77a`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} genres={genres}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item, genres }) {
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white left-8 bottom-8">
        <h2 className="mb-5 text-3xl font-bold">{item.title}</h2>
        <div className="flex items-center mb-8 text-xs gap-x-3">
          {item.genre_ids.length > 0 &&
            item.genre_ids.map((id) => (
              <span
                key={id}
                className="px-2 py-1 border border-white rounded-md"
              >
                {genres.find((genre) => genre.id === id).name}
              </span>
            ))}
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
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
