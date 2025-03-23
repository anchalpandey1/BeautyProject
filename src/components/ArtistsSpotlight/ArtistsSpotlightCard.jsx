import React from 'react'
import ArtistImg1 from '../../assets/Image/ArtistImg1.png'

// small artist
import artist1 from '../../assets/Image/artist1.png';
import artist2 from '../../assets/Image/artist2.png';
import artist3 from '../../assets/Image/artist3.png';
import artist4 from '../../assets/Image/artist4.png';

// start fill
import { GoStarFill } from "react-icons/go";

// double arrow
import { RiArrowRightDoubleLine } from "react-icons/ri";
const ArtistsSpotlightCard = ({artistImage , artistName ,artistNiche}) => {
    return (
        <div className='w-full  rounded-[12px] bg-[#FFFFFF]
        md:shadow-ArtistsSpotlight p-2 lg:p-4
        '>
            <div className='flex items-center'>
                {/* image box */}
                <div>
                    <img src={artistImage} className='w-[135px] h-[138px] md:w-[200px] md:h-[215px] lg:w-[260px] lg:h-[280px] xl:w-[280px] xl:h-[300px]' alt="" />
                </div>
                {/* name and other */}
                <div className='grow px-2 lg:px-4 sm:px-5 lg:py-0'>
                    {/* Artist name and rating */}
                    <div className=' flex justify-between items-center py-1 lg:py-2'> 
                        <h3 className='font-SulphurPoint font-bold text-sm xs:text-base md:text-3xl lg:text-[36px] text-[#504949] md:text-[#D66F11]'>{artistName}</h3>
                        <div className='flex gap-x-2 items-center'>
                        <GoStarFill  className='text-sm xs:text-base md:text-xl text-[#F6BB35]'/>
                        <p className='font-Inter font-normal text-[10px] xs:text-xs md:text-xl lg:text-2xl text-[#000000]'>5.0</p>
                        </div>
                    </div>
                    {/* if in pxel */}
                    <h4 className='font-Inter font-normal text-xs xs:text-[14px] md:text-lg lg:text-[22px] xl:text-[28px] text-[#989898]'>{artistNiche}</h4>
                    {/* side artist */}
                    <div className='h-[50px] md:h-[70px] lg:h-[100px] relative my-2 xs:my-[9px] md:my-[12px] my-[1rem]s lg:my-[1.7rem]'>
                        <img src={artist1} className='w-[52px] md:w-[70px] lg:w-[100px] h-fit rounded-[10rem] absolute top-0 left-0' alt="" />
                        <img src={artist2} className='w-[52px] md:w-[70px] lg:w-[100px] h-fit rounded-[10rem] absolute top-0 left-[22%] xs:left-[30px] md:left-[50px] lg:left-[70px] translate-x-1/2s z-10' alt="" />
                        <img src={artist3} className='w-[52px] md:w-[70px] lg:w-[100px] h-fit rounded-[10rem] absolute top-0 left-[45%] xs:left-[60px] md:left-[100px] lg:left-[140px] translate-x-1/2s z-20' alt="" />
                        <img src={artist4} className='w-[52px] md:w-[70px] lg:w-[100px] h-fit rounded-[10rem] absolute top-0 left-[65%] xs:left-[90px] md:left-[150px] lg:left-[210px] translate-x-1/2s z-20' alt="" />
                    </div>

                    {/* view portfolio */}
                    <div className='flex items-center gap-x-1 font-SulphurPoint font-bold  text-xs xs:text-[14px] md:text-base lg:text-[24px] text-[#989898]'>
                    <h5>View Portfolio</h5>
                    <RiArrowRightDoubleLine/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistsSpotlightCard
