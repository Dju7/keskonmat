import Image from "next/image";


const Page= async ({ params }) => {
  try {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}?api_key=YOUR_API_KEY`
    );

    const seriesResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${params.slug}?api_key=YOUR_API_KEY`
    );

    let moviesData = null;
    let seriesData = null;

    if (movieResponse.ok) {
      moviesData = await movieResponse.json();
    }

    if (seriesResponse.ok) {
      seriesData = await seriesResponse.json();
    }

    const movieData = {
      movie: moviesData,
      series: seriesData
    };

    return movieData;

    return (
    <main className="relative z-0 w-full bg-salle bg-cover  text-white flex justify-center items-center">
        <div className="absolute top-0 h-full w-full bg-slate-800 bg-opacity-80" />
       <div className="z-50 ml-2 md:ml-10 mt-12 lg:mt-0 min-h-[90vh] w-[90%] md:w-[80%] flex flex-col lg:flex-row">  
            <div className="relative w-full lg:w-[40%] h-[90vh] p-4 flex overflow-hidden">  
            {movieData.movie ? (
              <Image src={`https://image.tmdb.org/t/p/w500${movieData.movie.poster_path}`} alt="poster" fill={true} className="object-cover object-center" />
            ) : (
              <Image src={`https://image.tmdb.org/t/p/w500${movieData.series.poster_path}`} alt="poster" fill={true} className="object-cover object-center" />
            )}
            </div>
            <div className=" w-fill lg:w-[60%] h-[90vh] flex flex-col p-8">
               <div className="w-full flex flex-col gap-10">
                    <h1 className="mt-6 text-6xl 3xl:text-8xl text-cyan-300">{movieData.movie ? movieData.movie.title : movieData.series.name}</h1>
                    <p className="text-2xl 3xl:text-4xl flex flex-col gap-4"> <span  className="text-3xl 3xl:text-5xl underline">Genre:</span> {movieData.movie ? movieData.movie.genres[0].name : movieData.series.genres[0].name}, {movieData.movie ? movieData.movie.genres[1].name : movieData.series.genres[1].name}</p>
                    <p className="text-2xl 3xl:text-4xl flex flex-col gap-4"> <span  className="text-3xl 3xl:text-5xl underline">Release date:</span> {movieData.movie ? movieData.movie.release_date : movieData.series.first_air_date}</p>
                    <p className="text-2xl 3xl:text-4xl flex gap-4 mb-6 items-center text-cyan-300"> <span  className="text-3xl text-white 3xl:text-5xl underline">Vote average:</span> {movieData.movie ? movieData.movie.vote_average : movieData.series.vote_average}</p>
                    <p className="  text-2xl 3xl:text-4xl flex flex-col gap-4"><span className="text-3xl 3xl:text-5xl underline">Synopsis:</span>{movieData.movie ? movieData.movie.overview : movieData.series.overview}</p>
                </div>
            </div>
        </div> 
    </main>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

export default Page;