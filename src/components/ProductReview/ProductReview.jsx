import React from 'react'


{/*import ProductReviewFull from '../../components/ProductReviewFull/ProductReviewFull'; */}
import { Link } from 'react-router-dom';
import { GoStarFill } from "react-icons/go";
import imge1 from '../../assets/Image/imge1.png';
import imge2 from '../../assets/Image/imge2.png';
import imge3 from '../../assets/Image/imge3.png';
//// add social icon for website view

const ProductReview = () => {
    return (
     
             

        <div className='md:flex w-full bg-[#F3EFEF] py-[1rem] h-fit flex'>
        
      <div className="bg-white shadow-lg p-4 rounded-lg mx-auto w-[65%] font-SulphurPoint">
        <div>        
                <div className='flex justify-between gap-x-4'>
                <div> <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#2D2D2D]' >Ratings & Reviews</h3>                   
                  </div>
                  <div> <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#989898]' >37 Reviews</h3>                   
                  </div>
                   </div>

                   <div className='flex justify-between gap-x-4'>
                <div> <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#2D2D2D]  mt-5 mb-10' ><b>4.8/5</b> Overall Ratings</h3>                   
                  </div>
                  <div> <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#989898]  mt-5 mb-10' >64 Photos</h3>                   
                  </div>
                   </div>
                      <hr></hr>

                </div>
                
      
                {/* description */}
                <div className=' my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                
                
                <div className='flex '>
                <div class="w-24 h-auto">
                 <img src={imge1} alt="Small Image" class="w-full h-auto"/>
                  </div>
                  <div >
                  <div> <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#989898]  mt-5 ' >Amy Warren</h3>  
                                 
                  </div>
                     <div className='flex items-center'>
                     <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
                     <p>4.9/5</p>          
                   </div>
                   </div>                                   
                   </div>
                    
                   <div>
                    <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#2D2D2D]  mt-5 mb-10' >“Super good”</h3>    
                   <p>I bought the dreamy glow palette and I must say, I Love this palette, its nice & deep pigmented!
                  </p>          
                  <p> and it blends easily. the colors are so beautiful.. You can definitely go for it! 
                   </p>     
                  </div>

                  <div className='flex '>   
               <div class="w-40 h-40">
                 <img src={imge2} alt="Small Image" class="w-full h-auto"/>
                  </div>
                  <div class="w-40 h-40">
                 <img src={imge3} alt="Small Image" class="w-full h-auto"/>
                  </div>
                </div>                 
                </div>
                <hr />

                <div className=' my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>                
                <div className='flex '>
                <div class="w-24 h-auto">
                 <img src={imge1} alt="Small Image" class="w-full h-auto"/>
                  </div>
                  <div >
                  <div> <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#989898]  mt-5 ' >Amy Warren</h3>  
                                 
                  </div>
                     <div className='flex items-center'>
                     <GoStarFill className='text-base xl:text-xl text-[#F6BB35] '/>
                     <p>4.9/5</p>          
                   </div>
                   </div>                                   
                   </div>
                    
                   <div>
                    <h3 className=' sm:text-xl md:text-2xl lg:text  text-[#2D2D2D]  mt-5 mb-10' >“Super good”</h3>    
                   <p>I bought the dreamy glow palette and I must say, I Love this palette, its nice & deep pigmented!
                  </p>          
                  <p> and it blends easily. the colors are so beautiful.. You can definitely go for it! 
                   </p>     
                  </div>

                  <div className='flex '>   
               <div class="w-40 h-40">
                 <img src={imge2} alt="Small Image" class="w-full h-auto"/>
                  </div>
                  <div class="w-40 h-40">
                 <img src={imge3} alt="Small Image" class="w-full h-auto"/>
                  </div>
                </div>                 
                </div>             

                <Link to="/ProductReview">
      <button className="border w-full border-[#A21D3C] bg-white text-[#A21D3C] px-4 py-2 rounded font-bold ">
        Read More
      </button>
    </Link>




                </div>
                <div className="  p-4 rounded-lg mx-auto w-[15%] font-SulphurPoint"></div>
            </div>
    )
}
export default ProductReview