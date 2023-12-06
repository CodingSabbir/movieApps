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
      const movies = await MovieClient.fetch(`*[_type == 'movies']{name,_id,trailerURL,cast,releaseDate,"MovieImg": poster.asset->url}`);
   return  setAllMovie(movies);
    
  };

const searchHandeler=(e)=>{
  const userSearchData= e.target.value
  searchMovieFatch(userSearchData)
}

const searchMovieFatch= async(resive)=>{
if(!resive){
  movieData()
}else{
  const userSearch= await MovieClient.fetch(`*[_type == 'movies' && ( name match '${resive} *')]{name,_id,trailerURL,releaseDate,"MovieImg": poster.asset->url}`)
  return setAllMovie(userSearch)
}
}

useEffect(()=>{
movieData()
categoryData()
searchMovieFatch()
},[])
console.log(allMovie)



return <movieContext.Provider value={{ allCategory,allMovie,searchHandeler }}>
    {children}
</movieContext.Provider>
}


export const useData=()=>{
return useContext(movieContext)

}
