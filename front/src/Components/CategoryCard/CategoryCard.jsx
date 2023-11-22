import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({categoryItem}) => {
const {name,_id,CategoryImg}=categoryItem
   
return (
<NavLink to={`/${name}`}>
<div >
    <div className="card md:w-48 image-full py-3">
        <figure><img className=' w-full object-cover'  src={CategoryImg} alt="Shoes" /></figure>
        <div className="card-body px-3">
            <h2 className="card-title  hover:no-underline">{name}</h2>    
        </div>
    </div>
</div>
</NavLink>
);
};

export default CategoryCard;
