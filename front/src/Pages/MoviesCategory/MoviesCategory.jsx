
import { useState } from 'react';
import MoviesCard from '../../Components/MoviesCard/MoviesCard';
import { useParams } from 'react-router-dom';
import { MovieClient } from '../../Lib/MovieClient';
import { useEffect } from 'react';
import Loding from '../../Components/Loader/Loding';



const MoviesCategory = () => {
  const {category}=useParams()
  const [movieCategory,setMovieCategory]=useState([])
  const [loading,setLoading]=useState(false)
  const movieCat=async()=>{
   try{
    setLoading(true)
    const categoryData=await MovieClient.fetch(`*[_type == 'movies' && category->name=='${category}']{name,_id,"MovieImg": poster.asset->url}`)
    setLoading(false)
    setMovieCategory(categoryData) 
   }catch(error){
    console.error('Error fetching category data:', error);
   }
  }
  useEffect(()=>{
    movieCat()
  },[])

    return (
        <div className='bg-black'>
             <h1 className='mt-12 pt-5 mx-3 md:mx-5 text-[#FFC436]  font-mono text-[25px]'>{category}</h1>
    <div className='md:flex md:flex-wrap grid grid-cols-2  justify-center mt-10 md:gap-5 container mx-auto'>
        {
         loading?<Loding/> :<>{ movieCategory.map((movie)=>(
          <MoviesCard movieInfo={movie} key={movie._id}/>
        ))}</>
        }
    </div>
        </div>
    );
};

export default MoviesCategory;



