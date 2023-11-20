import React from 'react';
import MoviesCard from '../../Components/MoviesCard/MoviesCard';


const MoviesCategory = () => {
    return (
        <div>
             <h1 className='mt-16 text-center  font-mono text-[25px]'>Movie Category </h1>
    <div className='flex flex-wrap justify-center mt-10 gap-5 container mx-auto'>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
    </div>
        </div>
    );
};

export default MoviesCategory;