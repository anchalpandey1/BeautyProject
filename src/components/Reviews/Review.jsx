import React from 'react'
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
register();

import { FaChevronRight } from "react-icons/fa";

// import PopularProductCard from './PopularProductCard';
// import PopularProductCard  from '../PopularProduct/PopularProductCard'


// import ReviewImage1 from '../../assets/Image/ReviewImage1.png'
import ReviewImage1 from '../../assets/Image/reviewImg1.jpg'
import ReviewImage2 from '../../assets/Image/reviewImg2.jpg'
import ReviewImage3 from '../../assets/Image/reviewImg3.jpg'
import ReviewImage4 from '../../assets/Image/reviewImg1.jpg'
import ReviewImage5 from '../../assets/Image/reviewImg2.jpg'
import ReviewImage6 from '../../assets/Image/reviewImg3.jpg'

import rating from '../../assets/Image/rating.png';
import review from '../../assets/Image/review.png';


import ReviewCard from './ReviewCard';
const Review = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
            const params = {
            navigation: true,
            breakpoints : {
                100: 
                {
                    slidesPerView : 1
                },
                1090 : {
                slidesPerView: 2,
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
                @media screen and (max-width: 768px) {

                    .swiper-pagination-progressbar{
                        display : none
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        display:none
                    }
                }
            `,
            ],
            };
        
            Object.assign(swiperContainer, params);
            swiperContainer.initialize();
        }, []);

    return (
        <div className='hiddens md:block bg-[#FFFFFF] md:bg-transparent w-[85%] md:h-[593px] mx-auto my-8 max-w-[1050px]'>
            <div className='hidden md:flex justify-between items-center py-2 xl:py-3'>

                {/* heading */}
                <h4 className='font-SulphurPoint font-normal text-base md:text-2xl lg:text-4xl xl:text-[40px] text-[#121212] md:text-[#2D2D2D]'>Glowing Reviews</h4>

                {/* view all option */}
                <div className='flex items-center gap-1'>
                    <p className='font-SulphurPoint font-normal text-lg lg:text-xl xl:text-2xl text-[#A21D3C]'>View all</p>
                    <FaChevronRight className='text-3 lg:text-4 xl:w-[18px] xl:h-[18px] text-[#A21D3C]' />
                </div>
                </div>

                {/* display in mobile and tab view */}
                <div className="md:hidden">
                    <div className='w-[95%] xs:w-[90%] mx-auto
                    '>
                        <div className='flex justify-between items-center py-3'>
                            <div className='flex  gap-2 xs:gap-3 items-center justify-center font-SulphurPoint font-bold text-sm xs:text-[16px] sm:text-lg text-[#2D2D2D]'>
                                <img className='w-[18px] h-[18px]' src={rating} alt="" />
                                <p>Ratings & Reviews</p>
                            </div>
                            <div className='flex  gap-2 xs:gap-3 items-center justify-center font-SulphurPoint font-normal text-xs xs:text-sm sm:text-base'>
                                <img className='w-[24px] h-[24px]' src={review} alt="" />
                                <p>Ratings & Reviews</p>
                            </div>
                        </div>

                        <div className='font-SulphurPoint py-2 font-normal flex items-center justify-start gap-2 xs:gap-3'>
                            <p className='text-[#2D2D2D] text-xl sm:text-2xl'><span className='font-bold'>4.8</span>/5</p>
                            <p className='font-base sm:text-lg text-[#2D2D2D]'>Overall Ratings</p>
                        </div>

                    </div>
                    {/* line */}
                    <div className='my-[10px] w-[98%] mx-auto  border border-[#DCDCDC]'></div>

                    
                </div>


        <swiper-container ref={swiperRef} pagination= 'true' pagination-type='progressbar' init="false" 
        class= 'h-fit md:h-[460px]'
        
        > 
            {/* first */}
            <Swiper-slide class='h-fit'>
                <ReviewCard image = {ReviewImage1} name='Renee Fox' 
                review='The hairstylist did wonders with my hair! Professional service, friendly staff, and a salon with a great vibe. Highly recommend!'
                />
            </Swiper-slide>
            <Swiper-slide>
                <ReviewCard image = {ReviewImage2} name='Andrea Carver' 
                review='Absolutely amazing experience! The makeup artist understood my vision and executed it perfectly.'
                />
            </Swiper-slide>
            <Swiper-slide>
                <ReviewCard image = {ReviewImage3} name='Amy Fox' 
                review='Skincare treatment was top-notch! My skin feels rejuvenated and the results exceeded my expectations. Thank you for the excellent service.'
                />
            </Swiper-slide>
            <Swiper-slide>
                <ReviewCard image = {ReviewImage4} name='Andrea Carver' 
                review='Absolutely amazing experience! The makeup artist understood my vision and executed it perfectly.'
                />
            </Swiper-slide>
            <Swiper-slide>
                <ReviewCard image = {ReviewImage5} name='Rebecca Miller' 
                review='Absolutely amazing experience! The makeup artist understood my vision and executed it perfectly.'
                />
            </Swiper-slide>
            <Swiper-slide>
                <ReviewCard image = {ReviewImage6} name='Mary Carver' 
                review='Glamgo is the best platform for all your beauty needs! It was a great experience!!'
                />
            </Swiper-slide>


            
            
        </swiper-container>
        </div>
    )
}

export default Review
