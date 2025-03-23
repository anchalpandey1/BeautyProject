import React from 'react'
import { useNavigate } from 'react-router-dom';

// heart icon
import { FaRegHeart } from "react-icons/fa";
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// start fill
import { GoStarFill } from "react-icons/go";
// import { useAddToWishlistMutation } from '../../features/user/wishlistAPISlice';

const BeautyPicksCard = ({image,data, servicesoffer, price, rating}) => {

    const navigate = useNavigate();

    const showArtist = ()=>{
        navigate('/allArtist',{replace : true})
    }
    //add to wihlist
    // const [addToWishlist, { isLoading, isError }] = useAddToWishlistMutation();
    // const handleAddToWishlist = () => {
    //     addToWishlist(data._id);
    // };

    return (
        // add drop shadow later box-shadow: 0px 0px 20px 0px #00000014;
        <div className='w-[286px] lg:w-[296px] rounded-xl p-[10px] lg:p-[0.8rem] bg-[#FFFFFF] shadow-CardBorder cursor-pointer'
        // onClick={()=>{showArtist()}}
        >
        
        {/* here our all content */}
        <div className="w-full h-full">
            {/* here will store our image and heart */}
            <div className='h-[250px] w-[270px] lg:h-[298px] lg:w-[270px] relative'>
                {/* if you find solutin of the image then add shadow-CardImageBorder class */}
                <img src={image} className='w-full h-full' alt="" />

                {/* heart icon */}
                {/* give drop shadow box-shadow: 0px 0px 10px 0px #0000001A;*/}
                <div className='w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#FFFFFF]  flex items-center justify-center rounded-[2rem]
                absolute top-5 right-5
                '>
                <FaRegHeart
                // onClick={handleAddToWishlist}
                className='text-xl lg:text-2xl text-[#D66F11]'
            />
                </div>
            </div>

            {/* content box */}
            <div className=' w-full px-2'>
                <h2 className='font-SulphurPoint font-bold text-xl lg:text-2xl text-[#A21D3C]'>{servicesoffer}</h2>
                <h2 className='font-Inter font-normal text-[16px] lg:text-[18px] leading-[2rem] text-[#989898]'>Starts</h2>

                {/* price and rating */}
                <div className='flex justify-between'>
                    {/* price */}
                    <div className='flex items-center'>
                        {/* rupee html &#8377; */}
                        <FaRupeeSign  className='text-[23px] lg:text-[25px]'/>
                        <h2 className='font-SulphurPoint font-bold text-[28px] lg:text-[32px] text-[#2D2D2D]'>{price}/-</h2>
                    </div>

                    {/* rating */}
                    <div className='flex items-center gap-x-3'>
                        <GoStarFill  className='text-xl lg:text-2xl text-[#F6BB35]'/>
                        <h2 className='font-Inter font-normal text-xl lg:text-2xl'>{rating}</h2>
                    </div>
                </div>


                
            </div>
        </div>
        </div>
    )
}

export default BeautyPicksCard;
