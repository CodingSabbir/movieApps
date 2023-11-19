import React from 'react';
import CategoryCard from "../CategoryCard/CategoryCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './CategorySlider.css'

// import required modules
import { Pagination,Autoplay, } from 'swiper/modules';

const CategorySlider = () => {
    return (
        <div >
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
    
        modules={[Pagination,Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
        <SwiperSlide>
        <CategoryCard/>
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default CategorySlider;