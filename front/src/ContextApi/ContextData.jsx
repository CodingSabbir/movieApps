import { useState } from "react";
import { createContext, useContext } from "react";
import { MovieClient } from "../Lib/MovieClient";
import { useEffect } from "react";

export const movieContext=createContext()

export const MoviesDataProvider=({children})=>{

const [allCategory,setAllCategory]=useState([])
const [allMovie,setAllMovie]=useState([])
const categoryData=async()=>{
const response=await MovieClient.fetch(`*[_type == "category"]{name,_id,"CategoryImg": catImg.asset->url}`)
return setAllCategory(response)
}

const movieData = async () => {
      const movies = await MovieClient.fetch(`*[_type == 'movies']{name,_id,trailerURL,releaseDate,"MovieImg": poster.asset->url}`);
   return  setAllMovie(movies);
    
  };

useEffect(()=>{
movieData()
categoryData()
},[])
console.log(allMovie)



return <movieContext.Provider value={{ allCategory,allMovie }}>
    {children}
</movieContext.Provider>
}


export const useData=()=>{
return useContext(movieContext)

}
