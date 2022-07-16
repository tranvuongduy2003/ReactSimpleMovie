import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { apiKey, fetcher } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="py-10 text-white">
      <div className="w-full h-[600px] relative -z-50">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[450px] max-w-[800px] mx-auto -mt-[225px] pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <h1 className="mb-10 text-4xl font-bold text-center">{title}</h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="px-4 py-2 font-medium border rounded-full text-primary border-primary"
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-base text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl font-bold text-center">Casts</h2>
      <div>
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"5"}>
          {cast.length > 0 &&
            cast.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="cast-item">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                    className="w-full h-[350px] object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-xl font-medium text-center">
                    {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl font-bold text-center">Trailers</h2>
      <div className="flex flex-col gap-10">
        {results
          .filter((item) => item.type === "Trailer")
          .map((result) => (
            <div key={result.id}>
              <h3 className="inline-block p-3 mb-5 text-xl font-medium bg-secondary">
                {result.name}
              </h3>
              <div className="w-full mb-10 aspect-video">
                <iframe
                  width="864"
                  height="486"
                  src={`https://www.youtube.com/embed/${result.key}`}
                  title={result.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-fill w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl font-bold text-center">Trailers</h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
