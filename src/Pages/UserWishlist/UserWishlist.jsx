import React, { useEffect, useState } from 'react'

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
import artistProduct1 from '../../assets/Image/product4.png'

import artistProduct2 from '../../assets/Image/product1.png'
import artistProduct3 from '../../assets/Image/popularProductImg3.png'
import artistProduct4 from '../../assets/Image/product2.png'
import artistProduct5 from '../../assets/Image/popularProductImg1.png'
import artistProduct6 from '../../assets/Image/product5.png'

import WishlistItems from '../../components/WishlistItems/WishlistItems';
import { useGetProductWishlistQuery } from '../../features/user/wishlistAPISlice';
import { useGetArtistWishlistQuery } from '../../features/user/wishlistAPISlice';
import { useRemoveFromWishlsitMutation } from '../../features/user/wishlistAPISlice';


// these are artist list
import artist1 from '../../assets/Image/ArtistImg1.png';
import artist2 from '../../assets/Image/ArtistImg2.png';
import artist3 from '../../assets/Image/ArtistImg3.png';
import artist4 from '../../assets/Image/ArtistImg4.png';
import artist5 from '../../assets/Image/image1.png';
import artist6 from '../../assets/Image/beautyPicksImg1.png';
import artist7 from '../../assets/Image/beautyPicksImg2.png';
// import DemoHeader from '../../components/Demo/DemoHeader';
import Heading from '../../components/Heading/Heading';
import Navbar from '../../components/Navbar/Navbar';




const UserPersonalInfo = () => {
    const headerData = [
        {page : 'My Profile', pageURL : '/userProfile'},
        {page : 'Wishlist', pageURL : '/userWishlist'}
    ]
//product wishlist
    const { data: allWishlistProducts, isError, isLoading } = useGetProductWishlistQuery()
    if (allWishlistProducts) {
        console.log("get all data", allWishlistProducts)
    }
//artist wishlist
    const { data: allWishlistArtist} = useGetArtistWishlistQuery()
    if (allWishlistArtist) {
        console.log("get all data", allWishlistArtist)
    }


    // artist wishlist items
    const artistWishlist = [
        {image: artist1, name:"Abhigyna Makeovers", brandName: "", price:"1200", rating:""},
        {image: artist2, name:"Luxe Salon", brandName: "", price:"169", rating:""},
        {image: artist3, name:"Luxe Nail Salon", brandName: "", price:"799", rating:""},
        {image: artist4, name:"Olivia Miller", brandName: "", price:"260", rating:""},
        {image: artist5, name:"Renee Fox", brandName: "", price:"1199", rating:""},
        {image: artist6, name:"Luxe Nail Salon", brandName: "", price:"678", rating:""},
        {image: artist7, name:"Abhigyna Makeovers", brandName: "", price:"222", rating:""},
    ]

    // product wishlist items
    const productWishlist = [
        {image: artistProduct1, name:"NYX Eyeshadow", brandName: "", price:"1199", rating:""},
        {image: artistProduct2, name:"NYX Lip Tint - Red", brandName: "", price:"2000", rating:""},
        {image: artistProduct3, name:"Missha BB cream", brandName: "", price:"1200", rating:""},
        {image: artistProduct4, name:"Coconut Mist", brandName: "", price:"800", rating:""},
        {image: artistProduct5, name:"NYX Lip Tint - Red", brandName: "", price:"1300", rating:""},
        {image: artistProduct6, name:"M-Perfect BB cream", brandName: "", price:"899", rating:""},
    ]

    const [displayWishlist, setDisplayWishlist] = useState(productWishlist)
    const [activeWishlist, setActiveWishlsit] = useState('products');

    // it will change on every change in wishlist
    useEffect(()=>{
        if(activeWishlist === 'products'){
            setDisplayWishlist(productWishlist)
        }
        else if(activeWishlist === 'artist'){
            setDisplayWishlist(artistWishlist)
        }
        else{
            console.log('not found anything')
        }
        console.log(displayWishlist)
    },[activeWishlist])

    

    return (
        <div className='bg-[#F3EFEF] min-h-screen'>
            <div className='hidden md:block'>
                <Navbar/>
            </div>

        <Heading  pageNavigation={headerData} />            
        {/* artist navbar */}
        <div className='shadow-ArtistNavbar md:hidden  h-[3rem] sm:h-[4rem] '>
                <div className='w-[87%]s mx-auto flex justify-between items-center text-[#2D2D2D] h-full'>
                    <Link to='/userProfile'>
                        <IoArrowBack className='text-2xl sm:text-[28px]'/>
                    </Link>
                    {/* <h3 className='text-base sm:text-lg font-SulphurPoint font-bold'>Abhigyna Makeovers</h3> */}
                    <h3 className='text-base text-[#504949] sm:text-lg font-SulphurPoint font-bold'>My Orders</h3>
                    <div className='vis invisible'>
                        <FiShoppingBag className='text-2xl sm:text-[28px]'/>
                    </div>
                </div>
            </div>

            <div className=' w-[90%] mx-auto'>
            

        <div className='md:bg-[#FFFFFF] rounded-xl md:shadow-ArtistsSpotlight max-w-[1050px] mx-auto'>
            <div className='py-[1rem] px-[1rem] xs:px-[1.5rem] md:px-[2rem] flex justify-around font-SulphurPoint font-normal text-base md:text-lg lg:text-2xl'>
                <div className=' basis-2/4'>
                    <h2 
                    onClick={()=>{setActiveWishlsit('artist')}}
                    className={`text-center ${activeWishlist === 'artist' ? "text-[#A21D3C]": 'text-[#989898]' } cursor-pointer`}>Artist</h2>
                    <div className={`border-[1.5px] md:border-[2.5px] ${activeWishlist === 'artist' ? "border-[#A21D3C]" : 'border-[#DCDCDC]' } my-1 md:my-2 w-full`}></div>
                </div>
                <div className='basis-2/4'>
                    <h2 
                    onClick={()=>{setActiveWishlsit('products')}}
                    className={`text-center ${activeWishlist === 'products' ? "text-[#A21D3C]": 'text-[#989898]' } cursor-pointer`}>Products</h2>
                        <div className={`border-[1.5px] md:border-[2.5px] ${activeWishlist === 'products' ? "border-[#A21D3C]" : 'border-[#DCDCDC]' } my-1 md:my-2 w-full`}></div>
                </div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center gap-3 xs:gap-6 sm:gap-6 lg:gap-8'>
                {
                    displayWishlist.map((val,ind)=>{
                        return(
                            <div key={ind}>
                                <WishlistItems items={val}/>
                            </div>
                        )
                    })
                }
            </div>
            
            {/* <div className= 'justify-start sjustify-between  grid grid-cols-2 md:grid-cols-3 justify-items-center gap-3 xs:gap-6 sm:gap-6 lg:gap-8'>
                <WishlistItems/>
                <WishlistItems/>
                <WishlistItems/>
                <WishlistItems/>
                <WishlistItems/>
            </div> */}
        </div>

        </div>
        </div>
    )
}

export default UserPersonalInfo















