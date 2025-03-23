// MobileOnlyContainer.jsx
import React from 'react';
import img2 from '../../assets/Image/img2.png';
import { GoStarFill } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductFilter from "../../components/FilterCategory/ProductFilter";
const AppBox = () => {
  return (
    <div>
    <div className="sm:hidden h-30 bg-white shadow-box p-4 mx-10 my-5 rounded-tl rounded-br">
  {/* Your content goes here */}
<div className="flex items-center justify-between">
  <div className="left ">
    <p className="mt-4">NYX Eyeshadow-Dreamy Glow</p>
    <div className='flex items-center mt-4'>
    <p className=""><b>4.8/5</b></p>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
        </div>
  </div>
  <div className="right bg-white shadow-box">
  <img
            src={img2}
            alt="Image Alt Text"
            className="w-20 h-20 "
          />             
  </div>
  </div> 
</div>

<ProductFilter/>

<div className='block sm:hidden'>
  <h3 className='sm:text-xl md:text-2xl  ml-5 mb-5 lg:text text-[#504949]'>44 Reviews | 64 Photos</h3>
</div>


</div>


  );
};

export default AppBox;
