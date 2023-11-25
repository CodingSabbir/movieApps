import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({categoryItem}) => {
const {name,_id,CategoryImg}=categoryItem
   
return (
<NavLink to={`/${name}`}>
<div >
    <div className="card md:w-48 image-full py-3">
        <figure><img style={{ height: '270px' }} className=' w-full object-cover'  src={CategoryImg?CategoryImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBxwVbcQGmKgrq4rGNOVcrGjfxM4EgZj9Ow&usqp=CAU' } alt="Shoes" /></figure>
        <div className="card-body px-3">
            <h2 className="card-title  hover:no-underline">{name}</h2>    
        </div>
    </div>
</div>
</NavLink>
);
};

export default CategoryCard;




