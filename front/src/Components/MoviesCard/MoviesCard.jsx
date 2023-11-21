import React from 'react';
import { NavLink } from 'react-router-dom';

const MoviesCard = () => {
return (
<div className='mx-3'> 
    <div className="card card-compact  md:w-96 bg-base-100 shadow-xl ">
        <figure><img src="https://wallpapercave.com/wp/wp6549341.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <NavLink to={'/movies/id'}>
                <button className="btn btn-primary"> Movie Details</button>
                </NavLink>
            </div>
        </div>
    </div>
</div>

);
};

export default MoviesCard;
