import React from 'react';
import { MdSlowMotionVideo } from "react-icons/md";
const SliderUpNext = () => {
    return (
        <div>
            <div className='grid grid-cols-3 container mx-auto mt-5 pb-4'> 
                <div className='col-span-2 '>
                    <img className='w-full h-80' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-nvJTqOpZbZBLPjCXrupJkzwLRXLoOjpOg&usqp=CAU" alt="" />
                </div>
                <div className='cols-span-1'>
                    <div className='flex'>
                        <img className='ml-5 h-[150px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WE9EZUEiqnqgBKRYRjagvXhoEjHl1kq0UA&usqp=CAU" alt="" />
                        <div className='ml-3'>
                            <button className='text-[50px] px-3 text-white'><MdSlowMotionVideo /></button>
                            <h1 className='text-[16px] font-semibold text-white'>Ariana DeBose and Chris Pine Reveal Hidden </h1>
                            <p className='font-mono text-[14px] line-clamp-2 text-white' >Jennifer Lee, and directors Chris Buck and Fawn Veerasunthorn celebrate the classic references hidden throughout the animated musical.</p>
                        </div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    );
};

export default SliderUpNext;
