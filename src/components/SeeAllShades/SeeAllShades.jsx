import React, { useEffect, useState } from 'react';
import see1 from '../../assets/Image/see1.png';
import see2 from '../../assets/Image/see2.png';
import see3 from '../../assets/Image/see3.png';
import see4 from '../../assets/Image/see4.png';
import img5 from '../../assets/Image/img5.png';
import ss2 from '../../assets/Image/ss2.png';
import  ss3 from '../../assets/Image/ss3.png';
import  ss4 from '../../assets/Image/ss4.png';
import  ss5 from '../../assets/Image/ss5.png';
import ss6 from '../../assets/Image/ss6.png';
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const SeeAllShades = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [selectedImage, setSelectedImage] = useState(see1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the component only for mobile screens
  if (!isMobile) {
    return null;
  }

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };


  
  return (
   <div>
   {/*1st div*/}
    <div className="shadow-lg p-4 bg-white mx-auto w-[90%] rounded-md mt-5">
      <div className="flex">
        <img src={selectedImage} alt="Image" className="w-1/3 mr-4" />
        <div>
          <h1 className="text-[#2D2D2D]">
            NYX Eyeshadow- Dreamy Glow
          </h1>
          <p className="font-SulphurPoint text-[#989898] text-sm lg:text-base">Dreamy glow</p>
          <div className="flex">
            <img src={see2} alt="Image" className="w-1/3 cursor-pointer" onClick={() => handleImageClick(see2)} />
            <img src={see3} alt="Image" className="w-1/3 cursor-pointer" onClick={() => handleImageClick(see3)} />
            <img src={see4} alt="Image" className="w-1/3 cursor-pointer" onClick={() => handleImageClick(see4)} />
          </div>
        </div>
      </div>
    </div>


 {/*2nd div*/}

    <div className="shadow-lg p-4 bg-white mx-auto w-[90%] rounded-md mt-5">
    <h1 className="text-[#2D2D2D]">Total Shades:<span className='text-[#A21D3C]' >6</span></h1>
    <hr />

    <div className="flex">
      {/* First Column */}
      <div className="col-flex">
      <div className="flex flex-col mt-4">
      <div className="flex items-center">
               <img src={img5}  alt="Image Alt Text" className="w-full h-full object-cover w-12 h-12"/>
                   <span className="ml-1">Dreamy Glow</span>
               </div>
        </div>
        <div className="flex flex-col mt-4">
        <div className="flex items-center"><img src={ss2} alt="Image 2"   className="w-full h-full object-cover w-12 h-12" />         
        <span className="ml-1">Mystic Marvel</span></div>
        </div>    
      <div className="flex flex-col mt-4">
      <div className="flex items-center"><img src={ss3} alt="Image 2"   className="w-full h-full object-cover w-12 h-12" />         
      <span className="ml-1">Peachy Bliss Sold Out</span></div>
        </div>
      </div>

      {/* Second Column */}
      <div className="col-flex ml-4">
      <div className="flex flex-col mt-4">
      <div className="flex items-center"><img
                src={ss4}  
                alt="Image Alt Text"
                className="w-full h-full object-cover w-12 h-12" />         
            <span className="ml-1">Midnight Glam</span></div>
        </div>
        <div className="flex flex-col mt-4">
        <div className="flex items-center"><img src={ss5} alt="Image 2"   className="w-full h-full object-cover w-12 h-12" />         
        <span className="ml-1">Mystic Marvel</span></div>
        </div>    
      <div className="flex flex-col mt-4">
      <div className="flex items-center"><img src={ss6} alt="Image 2"   className="w-full h-full object-cover w-12 h-12" />         
      <span className="ml-1">Peachy Bliss Sold Out</span></div>
        </div>
      </div>
    </div>


    </div>



    </div>
  );
};

export default SeeAllShades;
