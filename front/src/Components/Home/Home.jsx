
import { useData } from "../../ContextApi/ContextData";
import CategoryCard from "../CategoryCard/CategoryCard";
import Slider from "../Slider/Slider";


const Home = () => {
    const {allCategory}=useData()
    console.log(allCategory)
    return (
        <>
            <Slider/>
            <div >
              <h1 className="text-[25px] font-semibold font-mono p-2  md:p-4 md:ml-8">Categories</h1>
            </div>
           <div className="md:flex grid grid-cols-2 justify-center flex-wrap gap-5 mx-2 md:mx-0">
           {
                allCategory.map((category)=>(
                    <CategoryCard categoryItem={category} key={category._id}/>
                ))
            }
           </div>
        

           
           
        </>
    );
};

export default Home;