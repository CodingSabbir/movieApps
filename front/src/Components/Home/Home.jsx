
// import { Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination,Autoplay  } from 'swiper/modules';

import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <>
            {/* <div className='mt-44'>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
            </div> */}
            <Slider/>
            <h1>sabbir</h1>
           
        </>
    );
};

export default Home;