'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Releases() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let moviesData = [];

        // Fetch the first page
        const response1 = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79&page=1');
        const data1 = await response1.json();
        moviesData = moviesData.concat(data1.results);

        // Fetch the second page
        const response2 = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79&page=2');
        const data2 = await response2.json();
        moviesData = moviesData.concat(data2.results);

        // Fetch the third page
        const response3 = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79&page=3');
        const data3 = await response3.json();
        moviesData = moviesData.concat(data3.results);

        // Set the concatenated data to the state
        setMovies(moviesData);
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="h-full w-full flex flex-col">
      <div className="w-full h-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-4 gap-2 px-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`https://keskonmat.vercel.app/${movie.id}`}>
            <Image
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={350}
              height={400}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}