import React from 'react'
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
register();

import { FaChevronRight } from "react-icons/fa";

// import PopularProductCard from './PopularProductCard';
// import BeautyPicksCard  from '../BestBeautyPicks/BeautyPicksCard'


// import required image
import ArtistImg1 from '../../assets/Image/ArtistImg1.png'
import ArtistImg2 from '../../assets/Image/ArtistImg2.png'
import ArtistImg3 from '../../assets/Image/ArtistImg3.png'
import ArtistImg4 from '../../assets/Image/ArtistImg4.png'

import ArtistsSpotlightCard from './ArtistsSpotlightCard';

const ArtistsSpotlight = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
            const params = {
            navigation: true,
            breakpoints : {
                100 : {
                slidesPerView: 1,
                }
            },

            injectStyles: [
                `
                .swiper-button-next,
                .swiper-button-prev {
                    position: absolute;
                    top: 90%;
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
                        margin-left: 0rem;
    
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        top: 95%;
                        width: 4px;
                        height : 4px;
                        padding: 10px;
                    }
                    .swiper-button-next{
                        right : 38%;
                    }
                    .swiper-button-prev{
                        left : 38%;
                    }
                }
            `,
            ],
            };
        
            Object.assign(swiperContainer, params);
            swiperContainer.initialize();
        }, []);

    return (
        <div className='w-[90%] sm:w-[85%] mx-auto my-8 mb-[5rem] md:mb-0'>
            <div className=' flex justify-between items-center py-1 md:py-2 xl:py-3'>

            {/* heading */}
            <h4 className='font-SulphurPoint font-bold md:font-normal text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D]'>Artists Spotlight</h4>

            {/* view all option */}
            <div className='text-[#A21D3C]s text-[#AB9F9F] flex items-center gap-1'>
                <p className='hidden md:block font-SulphurPoint font-normal md:text-lg lg:text-[24px] xl:text-[28px] text-[#A21D3C]'>View all</p>
                <p className='md:hidden font-SulphurPoint font-bold text-[#AB9F9F]'>See All</p>
                <FaChevronRight className='hidden md:block w-3 h-3 lg:w-[18px] lg:h-[18px] text-[#A21D3C]' />
            </div>
            </div>
        <swiper-container ref={swiperRef} pagination= 'true' pagination-type='progressbar' init="false" 
        class= 'h-[240px] md:h-[360px] lg:h-[460px] xl:h-[480px]'
        
        > 
            {/* first */}
            <swiper-slide class="h-[200px] md:h-[290px] lg:h-[380px] xl:h-[400px] flex items-center justify-center">
                <ArtistsSpotlightCard 
                artistImage = {ArtistImg1}
                artistName = 'Olivia Miller'
                artistNiche = 'Everyday Glam Makeup'
                />
            </swiper-slide>
            <swiper-slide class="h-[200px] md:h-[290px] lg:h-[380px] xl:h-[400px] flex items-center justify-center">
                <ArtistsSpotlightCard 
                artistImage = {ArtistImg2}
                artistName = 'Amelia Thomson'
                artistNiche = 'Bridal makeup expert'
                />
            </swiper-slide>
            <swiper-slide class="h-[200px] md:h-[290px] lg:h-[380px] xl:h-[400px] flex items-center justify-center">
                <ArtistsSpotlightCard 
                artistImage = {ArtistImg3}
                artistName = 'Amy Warren'
                artistNiche = 'Crafting hair perfection '
                />
            </swiper-slide>
            <swiper-slide class="h-[200px] md:h-[290px] lg:h-[380px] xl:h-[400px] flex items-center justify-center">
                <ArtistsSpotlightCard 
                artistImage = {ArtistImg4}
                artistName = 'Jordan Rodriguez'
                artistNiche = 'Trendsetting makeup artistry'
                />
            </swiper-slide>
            
        </swiper-container>
        </div>
    )
}

export default ArtistsSpotlight
