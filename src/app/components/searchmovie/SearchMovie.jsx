'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const MovieCard = ({ movie }) => (
  <div key={movie.id} className="mb-14 h-[950px] lg:h-[550px] w-full flex max-lg:flex-col gap-8 text-white ">
    <div className='h-[60%] lg:h-full  w-full lg:w-[30%]'>
    <Image
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      width={360}
      height={360}
    />
    </div>
    <div className='h-[40%] lg:h-full w-full lg:w-[80%] flex flex-col'>
    <div className='h-[250px] w-full'>
        <h2 className="text-5xl lg:text-6xl mb-4 text-cyan-300">{movie.title}</h2>
        <p className="text-xl lg:text-2xl 3xl:text-4xl flex gap-4 mb-6 items-center text-cyan-300"> <span  className="text-xl lg:text-2xl 3xl:text-5xl text-white underline">Release Date:</span> {movie.release_date}</p>
        <p className="text-xl lg:text-2xl 3xl:text-4xl flex gap-4 mb-6 items-center text-cyan-300"> <span  className="text-xl lg:text-2xl text-white 3xl:text-5xl underline">Vote average:</span> {movie.vote_average}</p>
        <p className="text-xl lg:text-2xl text-white 3xl:text-5xl underline">Synopsis:</p>
        <p className="mt-2 lg:mt-6 text-xl lg:text-2xl 3xl:text-4xl flex gap-4 mb-6 items-center text-cyan-300"> {movie.overview}</p>
    </div>
    </div>
  </div>
);

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('movie');

  console.log(movies)

  const fetchData = async () => {
    let url = `https://api.themoviedb.org/3/search/${type}?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79&query=${input}`;

    
    if (type === 'tv') {
        const genres = genre.split('|');
        if (genres.length > 1) {
          url += `&with_genres=${genres[1].trim()}`;
        }
      } else {
        if (genre) {
          const genres = genre.split('|');
          url += `&with_genres=${genres[0].trim()}`;
        }
      }
    
     
      if (year) {
        url += `&year=${year}`;
      }
    
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results || []);
    };

    const handleSearch = () => {
      if (!input && !genre && !year) {
        alert('Pas de titre ? pas de genre ? ... entrer au moins un terme de recherche')
      }

        setGenre('');
        setYear('');
        setMovies([]);
        fetchData();
        fetchData();
    };

        const startYear = 1960;
        const endYear = 2030;
        const yearOptions = [];

        for (let year = startYear; year <= endYear; year++) {
        yearOptions.push(<option key={year} value={year}>{year}</option>);
        }

  return (
    <>
    <div className=" z-50 mt-4 h-[90vh] w-full flex flex-col items-center">
        <div className='h-[30vh] w-full flex flex-col justify-center items-center'>
            <div className="h-10 flex items-center text-white mb-2">
                <label className="mr-4">
                <input
                    className='m-1'
                    type="radio"
                    value="movie"
                    checked={type === 'movie'}
                    onChange={() => setType('movie')}
                />
                Movie
                </label>
                <label>
                <input
                    className='m-1'
                    type="radio"
                    value="tv"
                    checked={type === 'tv'}
                    onChange={() => setType('tv')}
                />
                TV
                </label>
            </div>
           <label htmlFor="movie-search" className="text-cyan-300 mb-4 text-3xl">
          CHERCHER UN FILM OU UNE SERIE
           </label>
        <div className='flex w-full gap-6 justify-center items-center'>
           
            <input
            type="search"
            className="text-grayBlack w-[40%] mb-2 h-10 p-4 rounded-xl mr-2 outline-none"
            value={input}
            placeholder='Enter a title or a keyword'
            onChange={(e) => setInput(e.target.value)}
            />
        </div>
        <div className="w-full flex justify-center items-center h-[40%]">
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="text-grayBlack w-[15%] mb-2 h-10 p-2 rounded-xl mr-2"
          >
            <option value="">Genre</option>
            <option value="28 | 10759">Action & Aventure</option>
            <option value="18">Drame</option>
            <option value="14 | 10765">Fantastique</option>
            <option value="878 | 10765">Science-fiction</option>
            <option value="53 | 80">thriller</option>
            <option value="27 | 9648">horreur</option>
            <option value="10751">Familiale</option>
            <option value="36">histoire</option>
            <option value="99">documentaire</option>
            <option value="16">animation</option>
            
          </select>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="text-grayBlack w-[15%] mb-2 h-10 p-2 rounded-xl mr-2"
          >
            <option value="">Years</option>
            {yearOptions}
          </select>
          
        </div>
        <button
          onClick={handleSearch}
          className="bg-cyan-300 border border-cyan-300 mt-2 w-32 h-8 rounded-full hover:text-tertiary shadow-xl shadow-teal-700 hover:bg-transparent hover:text-cyan-300"
        >
          CHERCHER
        </button>
      </div>
      <div className="h-[70vh] w-[90%] lg:w-[80%] ml-4 lg:ml-20 p-8 mt-8 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    </>
  );
}