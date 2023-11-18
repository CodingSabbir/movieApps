import React from 'react';
import { useState } from 'react';
import { MovieClient } from '../Lib/MovieClient';
import { useEffect } from 'react';

const MovieData = () => {
    const [category,setCategory]=useState([])
    const movieDataShow=async ()=>{
        const movies=await MovieClient.fetch(`*[_type=='movies']{name,trailerURL,cast,"imageUrl": poster.asset->url}`)
        return setCategory(movies)
    }
 useEffect(()=>{
    movieDataShow()
 },[])
 console.log(category)
    return (
        <div>
           
        </div>
    );
};

export default MovieData;



