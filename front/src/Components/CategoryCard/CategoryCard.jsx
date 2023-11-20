import React from 'react';

const CategoryCard = () => {
return (
<div >
    <div className="card  md:w-48 bg-base-100 shadow-lg image-full py-3">
        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazMvIaaOJhEmDG36GW_JlxN6bW11GU_ZkkQ&usqp=CAU" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title hover:no-underline">Action</h2>    
        </div>
    </div>
</div>
);
};

export default CategoryCard;
