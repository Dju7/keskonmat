import Image from "next/image";
import Link from "next/link"


export default async function Upcoming() {

  let data = [];
 

  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79', { cache: 'no-store' });
     data = await response.json();
     const series = data.results

   return (
    <section className=" h-full w-full flex  flex-col">
     <div className="w-full h-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-4 gap-2 px-4">
      {series.map((serie)=> (
        
        <Link key={serie.id} href={`http://kesskonmat.jcros-web.fr/${serie.id}`}>
        <Image key={serie.id}
         src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
         alt={serie.title}
         width={350}
         height={400}
       />
       </Link>
      ))}
      
    </div>
    
    </section>
   );
  } catch (error) {
  console.error('Une erreur s\'est produite :', error);
  return <p>Erreur lors du chargement des données</p>;
  }
}