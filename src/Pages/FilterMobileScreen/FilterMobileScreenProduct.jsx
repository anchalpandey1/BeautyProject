import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// left arrow icon
import { IoArrowBack } from "react-icons/io5";
// location icon
import { IoLocationOutline } from "react-icons/io5";
import chooseDate from '../../assets/Image/choose-date.png'
const FilterMobileScreenProduct = () => {
    // store value of active filter section
    const [activeFilter, setActiveFilter] = useState('location')



    return (
        <div className='block md:hidden py-[1rem] w-full h-screen overflow-hidden sh-full'>
        {/* top bar */}
        <div className='w-[90%] h-[3rem] mx-auto flex justify-between items-center'>
            <Link to="/product">
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
                onClick={() => setActiveFilter('brand')}
                className={`py-5 ${activeFilter === 'brand' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Brand</h3>

                 <h3
                onClick={() => setActiveFilter('price')}
                className={`py-5 ${activeFilter === 'price' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Price</h3>

               <h3
                onClick={() => setActiveFilter('skintype')}
                className={`py-5 ${activeFilter === 'skintype' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Skin Type</h3>

                <h3
                onClick={() => setActiveFilter('preference')}
                className={`py-5 ${activeFilter === 'preference' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Preference</h3>
                  <h3
                onClick={() => setActiveFilter('concern')}
                className={`py-5 ${activeFilter === 'concern' ? 'text-[#A21D3C] bg-[#F3EFEF]' : null }  cursor-pointer`}
                >Concerns</h3>



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

                

                {/* brand */}
                {
                    activeFilter === 'brand' ? 
                    <div className='
                        font-SulphurPoint font-bold text-base text-[#989898]
                        '>
                            <div className="flex gap-x-3 gap-y-3 flex-wrap py-2">
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Lakme</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Faces Canada</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Maybelline New York</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Iba</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Revolution</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Dermacol</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Swiss Beauty</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>PAC</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Miss Claire</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Sugar</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Matt Look</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>MyGlamm</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Kay Beauty</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Renee Cosmetics</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>e.l.f. Cosmetics</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Soezi</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Blue Heaven</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>VEGA</p>
                            
                            
                            </div>
                        </div> 

                : null
                }

                 {/* price */}
                 {
                    activeFilter === 'price' ? 
                    <div className='
                        font-SulphurPoint font-bold text-base text-[#989898]
                        '>
                            <div className="flex gap-x-3 gap-y-3 flex-wrap py-2">
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>All Prices</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Under ₹499</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Under ₹1,000</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>₹1,000-₹5,000</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>₹5,000-₹10,000</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Over ₹10,000</p>
                            </div>
                        </div> 
                        

                : null
                }

                


                 {/* skintype */}
                 {
                    activeFilter === 'skintype' ? 
                    <div className='
                        font-SulphurPoint font-bold text-base text-[#989898]
                        '>
                            <div className="flex gap-x-3 gap-y-3 flex-wrap py-2">
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Normal</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Combination</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Sensitive</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Oily</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Dry </p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>All</p>
                            </div>
                        </div> 

                : null
                }

                 {/* preference */}
                 {
                    activeFilter === 'preference' ? 
                    <div className='
                        font-SulphurPoint font-bold text-base text-[#989898]
                        '>
                            <div className="flex gap-x-3 gap-y-3 flex-wrap py-2">
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Vegan</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Cruelty-free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Paraben Free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Vitamin E</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Waterproof</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Sulphate-free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Herbal</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Pthalate-free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Oil-free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Alcohol-free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Organic</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Formaldehyde-free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Gluten-free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Vitamin C</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Antioxidants</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Organic</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Fragrance-Free</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Synthetic</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Parafin-free</p>
                            
                            </div>
                        </div> 

                : null
                }

                 {/* concern */}
                 {
                    activeFilter === 'concern' ? 
                    <div className='
                        font-SulphurPoint font-bold text-base text-[#989898]
                        '>
                            <div className="flex gap-x-3 gap-y-3 flex-wrap py-2">
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Hydration</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Oil Control</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Brightening</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Acne & Blemishes</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Sun Protection</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Dryness</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Fine lines & Wrinkles</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Dullness</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Dark Spots</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Anti aging</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Pores</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Uneven Skin tone</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Waterproof</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Pore care</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Blackheads</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Firming</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Under eye concern</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Cleansing</p>
                                <p className='bg-[#FFFFFF] border border-[#F3F3F3] w-fit  py-2 px-3 rounded-[14px] shadow-categoryBox cursor-pointer'>Dull skin</p>
                             
                            </div>
                        </div> 

                : null
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

export default FilterMobileScreenProduct



