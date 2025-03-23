import React from 'react'

import { Link } from 'react-router-dom';

// delete icon
import { RiDeleteBin7Line } from "react-icons/ri";

// left arrow icon
import { IoArrowBack } from "react-icons/io5";
// shopping bage
import { FiShoppingBag } from "react-icons/fi";

// heart icon
import { FaRegHeart } from "react-icons/fa";
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// start fill
import { GoStarFill } from "react-icons/go";

// popularProductImg1.png
import artistProduct from '../../assets/Image/popularProductImg1.png'
import artistProduct5 from '../../assets/Image/popularProductImg2.png'
import artistProduct3 from '../../assets/Image/product1.png'
import artistProduct4 from '../../assets/Image/product1.png'
import artistProduct2 from '../../assets/Image/product2.png'
import artistProduct6 from '../../assets/Image/popularProductImg1.png'
import artistProduct7 from '../../assets/Image/product5.png'
// import WishlistItems from '../../components/WishlistItems/WishlistItems';

const WishlistItems = ({items}) => {
    console.log(items)
    return (
        
        <div className='cursor-pointer w-fit w-[180px]s h-[300px]s bg-[#FFFFFF] p-2 lg:p-5  rounded-xl lg:rounded-2xl shadow-productCardSmall md:shadow-productCard' >

<div>
    <div className='relative'>
        <img className='w-[130px] h-[130px] xs:h-[140px] xs:w-[140px] sm:w-[160px] sm:h:w-[160px] md:w-[170px] md:h-[170px] lg:w-[240px] lg:h-[240px] rounded-xl' src={items.image} alt="" />
    </div>

    <div className='py-2 lg:py-3 px-1'>
        <h3 className='font-SulphurPoint font-bold text-base lg:text-2xl text-[#A21D3C] mb-1 lg:mb-2'>{items.name}</h3>
        <h4 className='font-Inter font-normal text-[12px] lg:text-lg text-[#989898]'>Abhigyna Makeovers</h4>
    </div>

    <div className='flex justify-between mt-2s lg:mt-4 px-1'>

        <div className='font-SulphurPoint font-bold  flex items-center justify-center gap-x-1 text-[#2D2D2D]'>
            <FaRupeeSign className='lg:text-xl xl:text-2xl'/>
            <p className='text-base lg:text-2xl xl:text-[28px]'>{items.price}/-</p>
        </div>

        <div className='font-Inter font-normal flex items-center justify-center gap-x-1'>
            <GoStarFill className='text-lg lg:text-2xl text-[#F6BB35]'/>
            <p className='text-[12px] lg:text-xl text-[#000000]'>4.8</p>
        </div>
    </div>

    <div className='flex justify-between items-center mt-2 lg:mt-4 px-1 mb-1'>
        <div>
            <RiDeleteBin7Line className='text-lg md:text-xl lg:text-2xl text-[#A21D3C]'/>
        </div>
        <div className='bg-[#A21D3C] rounded-lg py-1 px-2 lg:px-4 lg:py-2 cursor-pointer '>
            <p className='font-SulphurPoint font-bold text-sm md:text-base lg:text-lg text-[#F3EFEF]'>Add to Cart</p>
        </div>
    </div>

</div>
</div>
    )
}

export default WishlistItems
