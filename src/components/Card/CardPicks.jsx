// import React from 'react'
// import image1 from '../../assets/Image/Logo.png'

// // heart icon
// import { FaRegHeart } from "react-icons/fa";
// // rupee icon
// import { FaRupeeSign } from "react-icons/fa";
// // start fill
// import { GoStarFill } from "react-icons/go";
// import { useAddToWishlistMutation } from '../../features/user/wishlistAPISlice';
// const CardPicks = ({image,productName, brandName, price,data, ratings}) => {
    

//     //add wishlist 
//     const [addToWishlist, { isLoading, isError }] = useAddToWishlistMutation();
//     const handleAddToWishlist = () => {
//         addToWishlist(data._id);
//     };
// //   const addwishlist = (data)=>{
// //     console.log(data)
// //   }


//     return (
//         // add drop shadow later box-shadow: 0px 0px 20px 0px #00000014;
//         <div className='w-[286px] lg:w-[296px] rounded-xl p-[10px] lg:p-[0.8rem] bg-[#FFFFFF] shadow-CardBorder'>
        
//         {/* here our all content */}
//         <div className="w-full h-full">           
//             <div className='h-[250px] w-[270px] lg:h-[298px] lg:w-[270px] relative'>
//                 <img src={image} className='w-full h-full' alt="" />               
//                 <div   className='w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#FFFFFF]  flex items-center justify-center rounded-[2rem]
//                 absolute top-5 right-5
//                 '>
//                 <FaRegHeart
//                 onClick={handleAddToWishlist}
//                 className='text-xl lg:text-2xl text-[#D66F11]'
//             />
                    
//                 </div>
//             </div>

//             {/* content box */}
//             <div className=' w-full px-2'>
//                 <h2 className='font-SulphurPoint font-bold text-xl lg:text-2xl text-[#A21D3C]'>{data.productName }</h2>
//                 <h2 className='font-Inter font-normal text-[16px] lg:text-[18px] leading-[2rem] text-[#989898]'>{data.brandName}</h2>
                
//                 {/* price and rating */}
//                 <div className='flex justify-between'>
//                     {/* price */}
//                     <div className='flex items-center'>
//                         {/* rupee html &#8377; */}
//                         <FaRupeeSign  className='text-[23px] lg:text-[25px]'/>
//                         <h2 className='font-SulphurPoint font-bold text-[28px] lg:text-[32px] text-[#2D2D2D]'>{data.price}/-</h2>
//                     </div>

//                     {/* rating */}
//                     <div className='flex items-center gap-x-3'>
//                         <GoStarFill  className='text-xl lg:text-2xl text-[#F6BB35]'/>
//                         <h2 className='font-Inter font-normal text-xl lg:text-2xl'>{data.ratings}</h2>
//                     </div>
//                 </div>


                
//             </div>
//         </div>
//         </div>
//     )
// }

// export default CardPicks



import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { useAddToWishlistMutation, useRemoveFromWishlsitMutation } from '../../features/user/wishlistAPISlice';

const CardPicks = ({ image, productName, brandName, price, data, ratings }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);

    // Add to wishlist mutation
    const [addToWishlist, { isLoading: addToWishlistLoading }] = useAddToWishlistMutation();
    // Remove from wishlist mutation
    const [removeFromWishlist, { isLoading: removeFromWishlistLoading }] = useRemoveFromWishlsitMutation();

    useEffect(() => {
        // Check if the item is in the wishlist from local storage
        const isInWishlistStorage = localStorage.getItem(`wishlist_${data._id}`);
        setIsInWishlist(!!isInWishlistStorage);
    }, []);

    const handleAddToWishlist = () => {
        if (isInWishlist) {
            removeFromWishlist(data._id);
            localStorage.removeItem(`wishlist_${data._id}`);
        } else {
            addToWishlist(data._id);
            localStorage.setItem(`wishlist_${data._id}`, true);
        }
        setIsInWishlist(prevState => !prevState);
    };

    return (
        <div className='w-[286px] lg:w-[296px] rounded-xl p-[10px] lg:p-[0.8rem] bg-[#FFFFFF] shadow-CardBorder'>
            <div className="w-full h-full">
                <div className='h-[250px] w-[270px] lg:h-[298px] lg:w-[270px] relative'>
                    <img src={image} className='w-full h-full' alt="" />
                    <div className={`w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem] absolute top-5 right-5 ${isInWishlist ? 'text-[#A21D3C]' : ''}`}>
                        {isInWishlist ? (
                            <FaHeart className='text-xl lg:text-2xl' onClick={handleAddToWishlist} />
                        ) : (
                            <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]' onClick={handleAddToWishlist} />
                        )}
                    </div>
                </div>
                <div className=' w-full px-2'>
                
                    <h2 className='font-SulphurPoint font-bold text-xl cursor-pointer lg:text-2xl text-[#A21D3C]'>{data.productName}</h2>
                    <h2 className='font-Inter font-normal text-[16px] lg:text-[18px] leading-[2rem] text-[#989898]'>{data.brandName}</h2>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <FaRupeeSign className='text-[23px] lg:text-[25px]' />
                            <h2 className='font-SulphurPoint font-bold text-[28px] lg:text-[32px] text-[#2D2D2D]'>{data.price}/-</h2>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <GoStarFill className='text-xl lg:text-2xl text-[#F6BB35]' />
                            <h2 className='font-Inter font-normal text-xl lg:text-2xl'>{data.ratings}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPicks;
