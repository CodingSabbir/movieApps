import React from 'react';
import { NavLink } from 'react-router-dom';

const MoviesCard = ({movieInfo}) => {
  
return (
<div className='mx-3 mb-3'> 
    <div className="card card-compact h-[300px] md:h-[400px]  md:w-56 bg-slate-200 shadow-xl ">
        <figure><img className=' h-[150px] w-[300px] md:w-[300px] md:h-[250px] rounded-md ' src={movieInfo.MovieImg} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title line-clamp-1">{movieInfo.name}</h2>
            <p className='line-clamp-2'>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <NavLink to={'/movies/id'}>
                <button  className="btn btn-primary "> Movie Details</button>
                </NavLink>
            </div>
        </div>
    </div>
</div>

);
};

export default MoviesCard;
