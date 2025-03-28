import React from 'react'

// location icon
import { IoLocationOutline } from "react-icons/io5";
//call icon
import { IoCallOutline } from "react-icons/io5";
//share icon
import { FiShare } from "react-icons/fi";


//// add social icon for website view

const AboutArtist = () => {
    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>           
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%]   rounded-xl 
            lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>

                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl  text-[#504949]' >About Abhigyna Makeovers</h3>
                    {/* our icons */}
                    {/* icon-30 text-24  */}
                    <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                        <div className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6'>
                            <IoCallOutline className='text-2xl lg:text-3xl'/>
                            <p className='text-xs sm:text-sm md:text-base xl:text-xl'>Call</p>
                        </div>
                        <div className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6'>
                            <IoLocationOutline className='text-2xl lg:text-3xl'/>
                            <p className='text-xs sm:text-sm md:text-base xl:text-xl'>Directions</p>
                        </div>
                        <div className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6'>
                            <FiShare className='text-2xl lg:text-3xl'/>
                            <p className='text-xs sm:text-sm md:text-base xl:text-xl'>Share</p>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                    <p>The Luxe Hair & Makeup where beauty meets expertise. With over a decade of experience in the industry, we specialize in creating timeless and trend-setting looks for every occasion.were currently the popular makeovers in India. Our company will provide services to your doorstep.</p>

                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Specializations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>Bridal Makeup, High-Fashion Looks, Celebrity Styles</li>
                        </ul>
                    </div>
                    <div>
                        <p>Experience:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>14 years</li>
                        </ul>
                    </div>
                </div>

                {/* social icons */}
                {/* <div>

                </div> */}


            </div>
        </div>
    )
}

export default AboutArtist
