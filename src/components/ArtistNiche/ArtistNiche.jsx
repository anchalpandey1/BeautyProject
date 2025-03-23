import React, { useState } from 'react'

// import required images.
import makeupImage from '../../assets/Image/icon-park-lipstick1.png'
import hairImage from '../../assets/Image/mingcute_hair.png'
import nailCareImage from '../../assets/Image/nail-care-image.png'
import waxingImage from '../../assets/Image/WaxingImage.png'
import specialpackagesImage from '../../assets/Image/Special-Packages-image.png'

// import useDispatch from react-redux.
import { useDispatch } from 'react-redux';

import { selecteArtistServiceCategory } from '../../features/user/valueSlice';



const ArtistNiche = () => {
    // assign useDispatch.
    const dispatch = useDispatch();

    // data for catgories.
    const servicesCategroy = [
        {
            serviceImage: makeupImage, 
            servicesName : 'Makeup'
        },
        {
            serviceImage: hairImage, 
            servicesName : 'Hair'
        },
        {
            serviceImage: nailCareImage, 
            servicesName : 'Nail care'
        },
        {
            serviceImage: waxingImage, 
            servicesName : 'Waxing'
        },
        {
            serviceImage: specialpackagesImage, 
            servicesName : 'Special Packages'
        },
    ]

    // stored selected category by the user.
    const [selectedCategory, setSelectedCategory] = useState('');

    // when user will click on specific category.
    const selectCategory = (category)=>{
        setSelectedCategory(category)
        dispatch(selecteArtistServiceCategory(category))
    }

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>           
            <div className='w-[85%] md:w-[85%] rounded-xl 
            lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]
            '>
                <div className='flex gap-x-4 md:gap-x-[2rem] lg:gap-x-[3rem] gap-y-3 md:gap-y-5 sgap-y-[2rem] flex-wrap justify-start'>
                    {
                        servicesCategroy.map((val, index)=>{
                            return(
                                <div 
                                    key={index}
                                    onClick={()=>{selectCategory(val.servicesName)}}
                                    className={`bg-[#FFFFFF] py-3 px-5 rounded-[50px] ${selectedCategory === val.servicesName ? 'border-[#D66F11] shadow-serviceNiche' : 'border-[#FFFFFF]'} border-2 md:border-4 cursor-pointer`}>
                                    <div className='flex justify-center items-center gap-2 lg:gap-3'>
                                        <img className='w-6 h-6 sm:h-7 sm:w-7 md:w-8 md:h-8 lg:w-[40px] lg:h-[40px]' src={val.serviceImage} alt="" />
                                        <p className='font-DMSans font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-[#2D2D2D]'>{val.servicesName}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

export default ArtistNiche
