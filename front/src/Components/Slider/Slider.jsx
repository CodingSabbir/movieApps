
import React, { useRef } from 'react';
import slider1 from '../Image/slider1.jpg'
import slider2 from '../Image/slider2 (2).png'
import slider3 from '../Image/slider3.png'
import slider4 from '../Image/slider4.jpg'
import slider5 from '../Image/slider5.png'
import slider6 from '../Image/slider6.png'
import slider7 from '../Image/1200-600.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation,EffectCreative } from 'swiper/modules';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const image=[slider7,slider2,slider3,slider4,slider5,slider6,slider1]
    
    return (
        <>
     <div className='mt-12'>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectCreative]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       
        {
          image.map((img,index)=>(
            <SwiperSlide key={index}>
            <img src={img}  alt="" />
        </SwiperSlide>
          ))
        }
       
      
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
     </div>
        </>
    );
};

export default Slider;




