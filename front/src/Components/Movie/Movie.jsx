import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useData } from '../../ContextApi/ContextData';

const Movie = () => {
 const {allMovie}=useData()
return (
<div className='bg-black'>
    <h1 className='mt-12 pt-4 text-center  font-mono text-[25px] text-[#FFC436]'>All Movies</h1>
    <div className='grid grid-cols-2 md:flex flex-wrap justify-center mt-5 md:mt-12 md:gap-5  container mx-auto '>
        {
            allMovie.map((movieItems)=>(
                <MoviesCard movieInfo={movieItems} key={movieItems._id}/>
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
