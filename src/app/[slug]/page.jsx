import Image from "next/image";


const Page= async ({ params }) => {
  try {
    const movieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79`,
      
    );

    if (!movieDetail.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const movieData = await movieDetail.json();

    return (
    <main className="relative z-0 w-full bg-salle bg-cover  text-white flex justify-center items-center">
        <div className="absolute top-0 h-full w-full bg-slate-800 bg-opacity-80" />
       <div className="z-50 ml-2 md:ml-10 mt-12 lg:mt-0 min-h-[90vh] w-[90%] md:w-[80%] flex flex-col lg:flex-row">  
            <div className="relative w-full lg:w-[40%] h-[90vh] p-4 flex overflow-hidden">  
                <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="poster" fill={true} className="object-cover object-center"/>
            </div>
            <div className=" w-fill lg:w-[60%] h-[90vh] flex flex-col p-8">
               <div className="w-full flex flex-col gap-10">
                    <h1 className="mt-6 text-6xl 3xl:text-8xl text-cyan-300">{movieData.title}</h1>
                    <p className="text-2xl 3xl:text-4xl flex flex-col gap-4"> <span  className="text-3xl 3xl:text-5xl underline">Genre:</span> {movieData.genres[0].name}, {movieData.genres[1].name}</p>
                    <p className="text-2xl 3xl:text-4xl flex flex-col gap-4"> <span  className="text-3xl 3xl:text-5xl underline">Release date:</span> {movieData.release_date}</p>
                    <p className="text-2xl 3xl:text-4xl flex gap-4 mb-6 items-center text-cyan-300"> <span  className="text-3xl text-white 3xl:text-5xl underline">Vote average:</span> {movieData.vote_average}</p>
                    <p className="  text-2xl 3xl:text-4xl flex flex-col gap-4"><span className="text-3xl 3xl:text-5xl underline">Synopsis:</span>{movieData.overview}</p>
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