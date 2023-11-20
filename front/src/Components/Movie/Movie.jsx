import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const Movie = () => {
return (
<div>
    <h1 className='mt-16 text-center  font-mono text-[25px]'>Movie Card </h1>
    <div className='flex flex-wrap justify-center mt-5 md:mt-12 gap-5  container mx-auto '>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
    </div>
    <div className='flex justify-end gap-3 py-2   container mx-auto h-auto'>
        <button className='btn btn-success'>prev</button>
        <button className='btn btn-secondary mr-4 '>next</button>
    </div>
</div>
);
};

export default Movie;
