
import { useState } from 'react';
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { MovieClient } from '../../../Lib/MovieClient';
import Loding from '../../../Components/Loader/Loding';


const MovieDetails = () => {

   const {id}=useParams()
   const [allMovieDetaild,setAllMovieDetaild] = useState([])
   console.log(allMovieDetaild)
   const [loding,setLoding]=useState(false)
  const moviesDetails=async()=>{
    setLoding(true)
    const moviesDetails= await MovieClient. fetch(`*[_type == 'movies' && _id == "${id}"]{name,_id,trailerURL,cast,releaseDate,"MovieImg": poster.asset->url}`)
    setLoding(false)
    setAllMovieDetaild(moviesDetails)
  }
  useEffect(()=>{
    moviesDetails()
  },[])

  

return (
<>
{
   loding ? <div className='flex justify-center pt-28'><Loding /></div>:<>
    {
        allMovieDetaild.map((movie) =>(
          <div  style={{
            backgroundColor: '#000',
            minHeight: '100vh', 
            minWidth: '640px', 
            color: '#fff', 
          }}>
  <div className=' pt-20  md:flex container mx-auto '>
      
      <div  className="card card-side bg-slate-100 shadow-xl md:h-[360px] w-[640px] rounded-none">
    <figure><img className='h-full md:w-[500px] ' src={movie.MovieImg} alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title text-black uppercase line-clamp-1">{movie.name}</h2>
      <p className='text-black'>Release Date:{movie.releaseDate}</p>
      <div className="card-actions justify-end text-black">
        <p>Movie Link:{movie.trailerURL}</p>
      </div>
      <ul>
        {
          movie.cast.map((c)=>(
            <li className='text-black'> Movie cast-{c}</li>
          ))
        }
      </ul>
    </div>
  </div>
      
  
  <div className='h-full w-[500px] '>
            <ReactPlayer
              url={movie.trailerURL}
              controls={true}
            />
          </div>
  
  </div>
  </div>
          ))
    }
   </>

}


</>
);
};

export default MovieDetails;




