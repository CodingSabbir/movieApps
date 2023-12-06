import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useData } from '../../ContextApi/ContextData';


const Movie = () => {
const {allMovie,searchHandeler}=useData()
return (
<div className='bg-black'>
    <div className='mt-10 w-72 md:w-96 ml-[10%] md:ml-[36%]'>
        <li className='pb-2 md:pb-0 relative'>
            <input onChange={searchHandeler}
                className='border-2 text-black rounded-md px-2 py-1 md:py-0.5 w-full mt-1 md:mt-0 pr-8' type="search"
                placeholder='Search' />
           
        </li>
    </div>
    
    <div className='grid grid-cols-2 md:flex flex-wrap justify-center mt-5 md:mt-12 md:gap-5  container mx-auto '>
        {
        allMovie.map((movieItems)=>(
        <MoviesCard movieInfo={movieItems} key={movieItems._id} />
        ))
        }
    </div>
    <div className='flex justify-end gap-3 py-2   container mx-auto h-auto'>
        <button className='btn btn-success'>prev</button>
        <button className='btn btn-secondary mr-4 '>next</button>
    </div>
</div>
);
};

export default Movie;
