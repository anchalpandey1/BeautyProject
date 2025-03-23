import React from 'react';
import imgp1 from '../../assets/Image/imgp1.png';
import { FaRegHeart , FaShareAlt} from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import img5 from '../../assets/Image/img5.png';
import img6 from '../../assets/Image/img6.png';
import img7 from '../../assets/Image/img7.png';
import img8 from '../../assets/Image/img8.png';
import img9 from '../../assets/Image/img9.png';
import { GoStarFill } from "react-icons/go";
const ArtistProductApp = () => {    
    return (
        <div className="lg:flex lg:items-center">        
        <img
            className="w-full max-w-sm  mx-auto mobile-only-image "
            src={imgp1}
            alt="Mobile Only Image" />
{/*Content for mobile screen*/}
<div className="  bg-white shadow-lg p-4 rounded-lg mx-auto my-8 w-full " >          
<div className=" flex gap-[1.5rem] w-[90%]">
    <h1 className="   text-[#2D2D2D]   ">
        NYX Eyeshadow- Dreamy Glow
    </h1>
    <FaShareAlt className="text-xl lg:text-2xl text-[#D66F11]" />
    <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
    </div>                    
    <div>
    <p className='mt-2 items-center gap-2 font-SulphurPoint lg:my-1 text-[#989898]'>
        <span>Abhigyna makeovers</span></p>
    </div>
    <div className="flex">
    <div>    
    <p className='mt-2 flex items-center text-[#2D2D2D] text-2xl lg:text-3xl xl:text-4xl lg:my-1 font-bold'>
        <FaRupeeSign />
        <span>499/-</span>       
    </p>
    {/*<div className=' items-center gap-2 lg:my-1 space-x-4'>
        <div className='flex items-center'>
            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>            
        </div>
        <p className='font-Inter font-normal text-base xl:text-lg text-[#000000]'>5.0</p>
    </div>
    */}
    <p className='mt-2 mb-1 items-center gap-2 lg:my-1 text-[#989898]'>
        <span>Inclusive of all taxes</span>
    </p>
    </div>
    </div>
    <hr />
    <div className=" flex justify-between space-x-4">
        <p className="font-SulphurPoint text-[#989898] text-sm lg:text-base">Dreamy glow</p>
         <p className="font-SulphurPoint text-[#A21D3C] text-sm lg:text-base font-bold">See all shades {/*>*/} </p>
    </div>
      <div className="flex justify-between space-x-4">
       <div>
       <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
                src={img5}  
                alt="Image Alt Text"
                className="w-full h-full object-cover" />           
        </div>
        <p><button className="text-[#F3EFEF] bg-[#D66F11] w-12 mt-4">4 left!</button></p>    
       </div>        
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                    src={img6}  
                    alt="Image Alt Text"
                    className="w-full h-full object-cover"/>
            </div> 
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                    src={img7}  
                    alt="Image Alt Text"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                    src={img8}  
                    alt="Image Alt Text"
                    className="w-full h-full object-cover"
                />
            </div> 
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                    src={img9}  
                    alt="Image Alt Text"
                    className="w-full h-full object-cover"
                />
            </div>         
          </div>
        <hr className="mt-2"/>
        <p className='font-SulphurPoint items-center gap-2 lg:my-1 text-[#504949] mt-2'>
        <span>Sold by : Abhigyna Makeover</span>
    </p>
</div>
{/*Add To Cart Button*/}
<div className="mx-auto  h-16">
        <button className="text-[#F3EFEF] bg-[#A21D3C] w-full h-full py-2 font-roboto">Add to Cart</button>
      </div>



    </div>  
       );
};

export default ArtistProductApp;
