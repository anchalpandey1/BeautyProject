import React from 'react'
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
register();

import { FaChevronRight } from "react-icons/fa";

// import required images
import image1 from '../../assets/Image/beautyPicksImg1.png'
import image2 from '../../assets/Image/beautyPicksImg2.png'
import image3 from '../../assets/Image/beautyPicksImg3.png'
import BeautyPicksCard from './BeautyPicksCard';


const BestBeautyPicks = ({fromWhere}) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;


        const params = {
          navigation: true,
          breakpoints : {
            100:{
              slidesPerView: 2,
          },
          1150 : {
          slidesPerView: 3,
          }
          },

          injectStyles: [
            `
              .swiper-button-next,
              .swiper-button-prev {
                position: absolute;
                top: 95%;
                width: 15px;
                height : 15px;
                padding: 15px;
                background-color: #F8E3E3;
                border-radius: 100%;
                color: #A21D3C;
              }
              .swiper-button-next{
                right : 40%;
              }
              .swiper-button-prev{
                left : 40%;
              }
              
              .swiper-pagination-progressbar{
                background: #A21D3C33;

              }
              .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{

                background: #A21D3C;
              }
          `,
          ],
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
      }, []);



    return (
        <div className='hidden md:block w-[85%] lg:w-[80%] h-[693px] mx-auto  my-8'>

<div className=' flex justify-between items-center py-2 xl:py-3'>

{/* heading */}
<h4 className='font-SulphurPoint font-normal text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D]'>
  
  {
    fromWhere === 'ArtistOverview' ?
    "Similar Artists":
    "Best Beauty picks"
  }
</h4>

{/* view all option */}
<div className='flex items-center gap-1'>
    <p className='font-SulphurPoint font-normal text-lg lg:text-[24px] xl:text-[28px] text-[#A21D3C]'>View all</p>
    <FaChevronRight className='w-3 h-3 lg:w-[18px] lg:h-[18px] text-[#A21D3C]' />
</div>
</div>


        <swiper-container ref={swiperRef} pagination= 'true' pagination-type='progressbar' init="false" 

        class= 'h-[530px] lg:h-[570px]'
        
        > 
            {/* first */}
            <swiper-slide class="h-[26rem] lg:h-[28rem] my-[2.5rem]">
              <BeautyPicksCard image={image1} servicesoffer='Abhigyna Makeovers' price='699' rating='5.0'/>
            </swiper-slide>

            {/* second */}
            <swiper-slide class="h-[26rem] lg:h-[28rem] my-[2.5rem]">
              <BeautyPicksCard image={image2} servicesoffer='Luxe Salon' price='699' rating='5.0'/>
            </swiper-slide>

            {/* third */}
            <swiper-slide class="h-[26rem] lg:h-[28rem] my-[2.5rem]">
              <BeautyPicksCard image={image3} servicesoffer='Luxe Nail Salon' price='549' rating='5.0'/>
            </swiper-slide>

            {/* repeat them */}

            {/* first */}
            <swiper-slide class="h-[26rem] lg:h-[28rem] my-[2.5rem]">
              <BeautyPicksCard image={image1} servicesoffer='Abhigyna Makeovers' price='699' rating='5.0'/>
            </swiper-slide>

            {/* second */}
            <swiper-slide class="h-[26rem] lg:h-[28rem] my-[2.5rem]">
              <BeautyPicksCard image={image2} servicesoffer='Luxe Salon' price='699' rating='5.0'/>
            </swiper-slide>

            {/* third */}
            <swiper-slide class="h-[26rem] lg:h-[28rem] my-[2.5rem]">
              <BeautyPicksCard image={image3} servicesoffer='Luxe Nail Salon' price='549' rating='5.0'/>
            </swiper-slide>
            
            
        </swiper-container>
        </div>
    )
}

export default BestBeautyPicks




