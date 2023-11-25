import { useState } from "react";
import { createContext, useContext } from "react";
import { MovieClient } from "../Lib/MovieClient";
import { useEffect } from "react";

export const movieContext=createContext()

export const MoviesDataProvider=({children})=>{

const [allCategory,setAllCategory]=useState([])

const categoryData=async()=>{
const response=await MovieClient.fetch(`*[_type == "category"]{name,_id,"CategoryImg": catImg.asset->url}`)
return setAllCategory(response)
}


useEffect(()=>{

categoryData()
},[])
console.log(allCategory)



return <movieContext.Provider value={{ allCategory }}>
    {children}
</movieContext.Provider>
}


export const useData=()=>{
return useContext(movieContext)

}
