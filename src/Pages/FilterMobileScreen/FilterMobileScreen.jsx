import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// left arrow icon
import { IoArrowBack } from "react-icons/io5";
// location icon
import { IoLocationOutline } from "react-icons/io5";

import chooseDate from '../../assets/Image/choose-date.png'

const FilterMobileScreen = () => {
    // store value of active filter section
    const [activeFilter, setActiveFilter] = useState('location')

    return (
        <div className='block md:hidden py-[1rem] w-full h-screen overflow-hidden sh-full'>
        {/* top bar */}
        <div className='w-[90%] h-[3rem] mx-auto flex justify-between items-center'>
            <Link to="/">
            <IoArrowBack className='text-2xl text-[#504949] cursor-pointer'/>
            </Link>
            <p className='font-SulphurPoint font-normal text-[#504949] text-2xl'>Filter</p>
            <p className='font-sulphurPoint font-normal text-[#989898] text-lg cursor-pointer'>Reset</p>
        </div>

        <div className="w-full h-full
        flex 
        ">
            
            <div className='bg-[#D66F1117] pl-[1.5rem] pt-[2rem]
            min-w-[40%] font-SulphurPoint font-normal text-[#2D2D2D] text-lg
            '>

                <h3 
                onClick={() => setActiveFilter('location')}
                className={`py-5 ${activeFilter === 'location' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Location</h3>
                <h3 
                onClick={() => setActiveFilter('category')}
                className={`py-5 ${activeFilter === 'category' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Category</h3>

                <h3
                onClick={() => setActiveFilter('sort')}
                className={`py-5 ${activeFilter === 'sort' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Sort</h3>

                <h3
                onClick={() => setActiveFilter('availability')}
                className={`py-5 ${activeFilter === 'availablity' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Availability</h3>

            </div>

            <div className='bg-[#F3EFEF] pt-[2rem] px-[1.2rem] grow'>
                {/* location box */}
                {
                    activeFilter === 'location' ?
                    <div className='rounded-[15px] shadow-SearchBar
                    w-full border border-[#D66F11]   h-[45px]
                        flex
                    '>
                        
                        <div className='flex items-center gap-3 px-3  text-xl lg:text-2xl'>
                        <IoLocationOutline className='text-[#989898] text-2xl'/>
                        <input 
                        type="text" placeholder='Choose Location' 
                        className='placeholder-[#989898] text-[14px] w-[100px]  font-SulphurPoint font-normal outline-none text-[#989898] bg-[#F3EFEF]' />
                        </div>
                    </div> 
                    :null
                }


                {/* category */}
                {
                    activeFilter === 'category' ? 
                    <div className='
                font-SulphurPoint font-bold text-base text-[#989898]
                '>
                    <div className="flex gap-x-3 gap-y-3 flex-wrap py-2">
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>All</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Makeup</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Hair</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Skincare</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Nail care</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Eyelash Extensions</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Special Packages</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Facial Treatment</p>
                        <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Hair removal</p>
                    </div>
                </div> 

                : null
                }

                {/* sort */}
                {
                    activeFilter === 'sort' ? 
                    <div className='
                        font-SulphurPoint font-bold text-base text-[#989898]
                        '>
                            <div className="flex gap-x-3 gap-y-3 flex-wrap py-2">
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Popularity</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Discounts</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Discounts</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Lowest Price First</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Highest Price first</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Highest Ratings <br /> (4 stars & above)</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Low Ratings <br /> (1 stars & above)</p>
                            </div>
                        </div> 

                : null
                }

                {/* availability */}
                {
                    activeFilter === 'availability' ?
                    <div className='rounded-[15px] shadow-SearchBar
                    w-full border border-[#D66F11]   h-[45px]
                        flex
                    '>
                        
                        <div className='flex items-center gap-3 px-3  text-xl lg:text-2xl'>
                        <img 
                        className='w-[24px] h-[24px]'
                        src={chooseDate} alt="" />
                        <input 
                        type='text' placeholder='Choose date' 
                        className='placeholder-[#989898] text-[14px] w-[100px]  font-SulphurPoint font-normal outline-none text-[#989898] bg-[#F3EFEF] ' />
                        </div>
                        
                    </div> 
                    :null
                }


            </div>
        </div>



        {/* apply filter */}
            <div className='fixed bottom-0 w-full h-[75px] bg-[#DDDDDD] bg-[#b82f4f]s flex items-center justify-center'> 
           
                <p className='font-Roboto font-bold cursor-pointer text-lg text-[#504949] text-whites'>Apply Filter</p> 
            </div>
        </div>
    )
}

export default FilterMobileScreen



