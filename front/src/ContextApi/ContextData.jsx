import { useState } from "react";
import { createContext, useContext } from "react";

export const movieContext=createContext()

export const MoviesData=({children})=>{
    //*[_type == "category"]{name,_id,"CategoryImg": catImg.asset->url}
    const [category,setCategory]=useState([])
    const categoryData=()=>{
        
    }
   
 return <movieContext.Provider>
    {children}
  </movieContext.Provider>
}


export const useData=()=>{
    return useContext(movieContext)
  
}