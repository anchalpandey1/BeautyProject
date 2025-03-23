import React from 'react'

// right icon
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import ArtistPortfolioImage1 from '../../assets/Image/ArtistPortfolioImg1.png'
import ArtistPortfolioImage2 from '../../assets/Image/ArtistPortfolioImg2.png'
import ArtistPortfolioImage3 from '../../assets/Image/ArtistPortfolioImg3.png'
import ArtistPortfolioImage4 from '../../assets/Image/ArtistPortfolioImg4.png'
import { Link } from 'react-router-dom';

const ArtistPortfolio = () => {
    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] min-h-[19rem] lg:min-h-[21rem] xl:min-h-[25rem] h-full'>
            
            <div className=' border-blac relative w-[85%] md:w-[85%] lg:w-[85%] max-w-[390px] mx-auto  md:max-w-[1000px]'>
            <div className='flex justify-center gap-x-4 md:gap-x-[2rem] lg:gap-x-[3rem] py-2 md:py-4 lg:py-5'>
                    <div>
                        <img className=' w-[150px] h-[150px] md:w-[250px] md:h-[230px]  lg:w-[300px] lg:h-[250px] rounded-xl' src={ArtistPortfolioImage1} alt="" />
                    </div>
                    <div>
                        <img className=' w-[150px] h-[150px] md:w-[250px] md:h-[230px]  lg:w-[300px] lg:h-[250px] rounded-xl' src={ArtistPortfolioImage2} alt="" />
                    </div>
                </div>

                <div className='flex justify-center gap-x-4 md:gap-x-[2rem] lg:gap-x-[3rem] py-2 md:py-4 lg:py-5'>
                    <div>
                        <img className=' w-[150px] h-[150px] md:w-[250px] md:h-[230px] lg:w-[300px] lg:h-[250px] rounded-xl' src={ArtistPortfolioImage3} alt="" />
                    </div>
                    <div className='relative'>
                        <img className='blur-[2px] w-[150px] h-[150px] md:w-[250px] md:h-[230px] lg:w-[300px] lg:h-[250px] rounded-xl' src={ArtistPortfolioImage4} alt="" />
                        <div className='bg-[#dbe4e7]s absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center'>
                            <Link to="/portfolio/id" className='rounded-lg w-fit px-2 py-[2px] md:py-1 lg:py-2 lg:px-4 bg-[#F5F5F5] shadow-portfolioShowMore flex items-center justify-center gap-x-1 font-SulphurPoint font-bold text-base lg:text-xl text-[#2D2D2D] cursor-pointer'>
                                <p>+40 more </p>
                                <MdOutlineKeyboardDoubleArrowRight/>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ArtistPortfolio
