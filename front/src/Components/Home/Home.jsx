
// import CategoryCard from "../CategoryCard/CategoryCard";
import CategorySlider from "../CategorySlider/CategorySlider";
import Slider from "../Slider/Slider";



const Home = () => {

    return (
        <>
            <Slider/>
            <div >
              <h1 className="text-[25px] font-semibold font-mono p-2  md:p-4 md:ml-5">Categories</h1>
            </div>
           
             <CategorySlider/>
           
           
        </>
    );
};

export default Home;