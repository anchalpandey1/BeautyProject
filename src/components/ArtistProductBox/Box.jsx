import React, { useState } from 'react';
import img1 from '../../assets/Image/img1.png';
import img2 from '../../assets/Image/img2.png';
import img3 from '../../assets/Image/img3.png';
import img4 from '../../assets/Image/img4.png';
import img5 from '../../assets/Image/img5.png';
import img6 from '../../assets/Image/img6.png';
import img7 from '../../assets/Image/img7.png';
import img8 from '../../assets/Image/img8.png';
import img9 from '../../assets/Image/img9.png';
import img10 from '../../assets/Image/img10.png';
import { FaRupeeSign } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetSingleProductQuery } from '../../features/user/artistAPISlice';
import { useAddItemToCartMutation } from '../../features/user/userSlice';

import { useParams } from 'react-router-dom';

const Box = () => {
  // get ID from url
  const { productId } = useParams();

  // show selected product
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);
  
  // add product into cart.
  const [addItemToTheCart] = useAddItemToCartMutation();


    // when click on add to cart
    const handleAddToCart = () => {
        addItemToTheCart(productId)
    };




  if (error){
    console.log("error")
  }
  if(product){
    console.log(product)
  }


  const [selectedImage, setSelectedImage] = useState(img1);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    
   {/*function */}
  const [currentImage, setCurrentImage] = useState(img5);

  const handleThumbnailClick5 = () => {
    setCurrentImage(img5);
  };

  const handleThumbnailClick6 = () => {
    setCurrentImage(img6);
  };

  const handleThumbnailClick7 = () => {
    setCurrentImage(img7);
  };

  const handleThumbnailClick8 = () => {
    setCurrentImage(img8);
  };

  const handleThumbnailClick9 = () => {
    setCurrentImage(img9);
  };

  const handleThumbnailClick10 = () => {
    setCurrentImage(img10);
  };

    

    return (
      <div className='hidden md:flex w-full bg-[#F3EFEF] py-[1rem] h-fit'>
        <div className="  bg-white shadow-lg p-4 rounded-lg mx-auto my-8 w-[90%] flex" >

            {/* Left side - Image thumbnails */}
            <div className="  flex flex-col w-1/4">
                <img
                    className={`w-1/2 h-auto mb-2 rounded-md cursor-pointer ${
                        selectedImage === img1 ? 'border-2 border-[#A21D3C]' : ''
                    }`}
                    src={img1}
                    alt="Image 1"
                    onClick={() => handleImageClick(img1)}
                />
                <img
                    className={`w-1/2 h-auto mb-2 rounded-md cursor-pointer ${
                        selectedImage === img2 ? 'border-2 border-[#A21D3C]' : ''
                    }`}
                    src={img2}
                    alt="Image 2"
                    onClick={() => handleImageClick(img2)}
                />
                <img
                    className={`w-1/2 h-auto mb-2 rounded-md cursor-pointer ${
                        selectedImage === img3 ? 'border-2 border-[#A21D3C]' : ''
                    }`}
                    src={img3}
                    alt="Image 3"
                    onClick={() => handleImageClick(img3)}
                />
                <img
                    className={`w-1/2 h-auto rounded-md cursor-pointer ${
                        selectedImage === img4 ? 'border-2 border-[#A21D3C]' : ''
                    }`}
                    src={img4}
                    alt="Image 4"
                    onClick={() => handleImageClick(img4)}
                />
            </div>

            {/* Center - Display selected image, text, and button */}
            <div className="  flex flex-col w-full md:w-3/4">
    {selectedImage && (
        <div className="w-full h-auto mb-4">
            <img
                className="w-full md:w-3/4 h-auto rounded-md"
                src={selectedImage}
                alt="Selected Image"
            />
                       <button
    className="bg-[#A21D3C] text-[#F3EFEF] py-3 px-6 rounded-md mt-2 flex items-center justify-center ml-10 "    
    onClick={handleAddToCart}
    style={{ minWidth: '250px' }} // Adjust the minimum width as needed
>
    Add to Cart
</button>
                    </div>
                )}
            </div>



    




                {/* Display title, subtitle, and text */}
                <div className=" flex flex-col w-3/4">
    <h1 className=" items-center gap-2 lg:my-1 text-[#A21D3C] font-bold xl:text xl:text-xl">
        NYX Eyeshadow- Dreamy Glow
    </h1>
    <div className=' items-center gap-2 lg:my-1 space-x-4'>
        <div className='flex items-center'>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
        </div>
        <p className='font-Inter font-normal text-base xl:text-lg text-[#000000]'>5.0</p>
    </div>
    <p className=' items-center gap-2 lg:my-1 text-[#504949]'>
        <span>Sold by: Abhigyna Makeover</span>
    </p>
    <p className='flex items-center text-[#2D2D2D] text-2xl lg:text-3xl xl:text-4xl lg:my-1 font-bold'>
        <FaRupeeSign />
        <span>499/-</span>
    </p>
    <p className=' items-center gap-2 lg:my-1 text-[#989898]'>
        <span>Inclusive of all taxes</span>
    </p>
    <hr />
    <div className=" flex justify-between space-x-4">
        <p className="font-normal text-[#989898] text-sm lg:text-base">Dreamy glow</p>
         <p className="font-normal text-[#989898] text-sm lg:text-base">All shades(6)</p>
    </div>
    
    <div className=" flex justify-between space-x-6">
    <div className=" justify-between space-x-6">
    <div className="w-20 h-20 rounded-full overflow-hidden ">
    <img
            src={currentImage}
            alt="Image Alt Text"
            className="w-full h-full object-cover"
          />     
    </div>   
    <p><button className="text-[#F3EFEF] bg-[#D66F11] w-12 mt-4">4 left!</button></p>
    </div>
    <div className=" flex flex-wrap justify-between border b-2px py-16 rounded-lg px-3 py-3 overflow-hidden space-x-4">
    <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={handleThumbnailClick5}
        >
          <img
            src={img5}
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer "
          onClick={handleThumbnailClick6}
        >
          <img
            src={img6}
            alt="Image 6"
            className="w-full h-full object-cover "
          />
        </div>
        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={handleThumbnailClick7}
        >
          <img
            src={img7}
            alt="Image 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={handleThumbnailClick8}
        >
          <img
            src={img8}
            alt="Image 8"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          onClick={handleThumbnailClick9}
        >
          <img
            src={img9}
            alt="Image 9"
            className="w-full h-full object-cover"
          />
        </div>

  
        <div
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointerhidden  "
          onClick={handleThumbnailClick10}
        >
          <img
            src={img10}
            alt="Image 10"
            className="w-full h-full object-cover"
          />
        </div>          
        </div>  
       
    </div>
    
    
   
</div>

            </div>
            </div>
       
    );
};

export default Box;


 //     {isError && 
      //     <div>error accoured</div>
      // }
      // {
      //     isLoading && 
      //     <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-[#A21D3C] bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
      //         <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      //         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      //         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
      //         </svg>
      //         Loading...
      //     </button>
      // }