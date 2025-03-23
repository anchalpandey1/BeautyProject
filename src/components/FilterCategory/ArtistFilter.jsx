import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import filterIcon from  '../../assets/Image/filter_icon.png'

import FilterOrange from '../../assets/Filter/filter_orange.png'
// left arrow icon

// drop down icon
import { FaChevronDown } from "react-icons/fa6";
// drop up icon
import { FaChevronUp } from "react-icons/fa6";




const ArtistFilter = () => {

    const [isChecked, setChecked] = useState(false);

        // const handleCheckboxChange = () => {
        //     setChecked(!isChecked);
        // };



    const [activeFilter, setActiveFilter] = useState(null);
    const [dropdownOptions, setDropdownOptions] = useState({
        location: [
            { label: 'Makeup', checked: false },
            { label: 'Skincare', checked: false },
            { label: 'Face', checked: false },
            { label: 'Eyes', checked: false },
            { label: 'Lips', checked: false },
        ],
        sort: [
            { label: 'Popularity', checked: false },
            { label: 'Discounts', checked: false },
            { label: 'Lowest Price First', checked: false },
            { label: 'Highest Price first', checked: false },
            { label: 'Discounts', checked: false },
            { label: 'Highest Ratings(4 stars & above)', checked: false },
            { label: 'Low Ratings(1 stars & above)', checked: false },
        ], 
        brand: [
            { label: 'Lakme', checked: false },
            { label: 'Faces Canada', checked: false },
            { label: 'Maybelline New York', checked: false },
            { label: 'Insights Cosmetics', checked: false },
            { label: 'Iba', checked: false },
            { label: 'Revolution', checked: false },
            { label: 'Dermacol', checked: false },
            { label: 'Swiss Beauty', checked: false },
            { label: 'PAC', checked: false },
            { label: 'Miss Claire', checked: false },
            { label: 'Sugar', checked: false },
            { label: 'Matt Look', checked: false },
            { label: 'MyGlamm', checked: false },
            { label: 'Kay Beauty', checked: false },
            { label: 'Renee Cosmetics', checked: false },
            { label: 'e.l.f. Cosmetics', checked: false },
            { label: 'Soezi', checked: false },
            { label: 'Blue Heaven', checked: false },
            { label: 'VEGA', checked: false },
        ],  
        price: [
            { label: 'All Prices', checked: false },
            { label: 'Under ₹499 ', checked: false },
            { label: 'Under ₹1,000', checked: false },
            { label: '₹1,000-₹5,000', checked: false },
            { label: '₹5,000-₹10,000 ', checked: false },
            { label: 'Over ₹10,000', checked: false },            
        ],  
        skintype: [
            { label: 'Normal', checked: false },
            { label: 'Combination ', checked: false },
            { label: 'Sensitive', checked: false },
            { label: 'Oily', checked: false },
            { label: 'Dry ', checked: false },
            { label: 'All', checked: false },            
        ],   
        preference: [
            { label: 'Vegan', checked: false },
            { label: 'Cruelty-free', checked: false },
            { label: 'Paraben Free', checked: false },
            { label: 'Vitamin E', checked: false },
            { label: 'Waterproof', checked: false },
            { label: 'Sulphate-free', checked: false },
            { label: 'Herbal', checked: false },
            { label: 'Pthalate-free', checked: false },
            { label: 'Oil-free', checked: false },
            { label: 'Alcohol-free', checked: false },
            { label: 'Organic', checked: false },
            { label: 'Formaldehyde-free', checked: false },
            { label: 'Gluten-free', checked: false },
            { label: 'Vitamin C', checked: false },
            { label: 'Antioxidants', checked: false },
            { label: 'Organic', checked: false },
            { label: 'Fragrance-Free', checked: false },
            { label: 'Synthetic', checked: false },
            { label: 'Parafin-free', checked: false },
        ],      
        concern: [
            { label: 'Hydration', checked: false },
            { label: 'Oil Control', checked: false },
            { label: 'Brightening', checked: false },
            { label: 'Acne & Blemishes', checked: false },
            { label: 'Sun Protection', checked: false },
            { label: 'Dryness', checked: false },
            { label: 'Fine lines & Wrinkles', checked: false },
            { label: 'Dullness', checked: false },
            { label: 'Dark Spots', checked: false },
            { label: 'Anti aging', checked: false },
            { label: 'Pores', checked: false },
            { label: 'Uneven Skin tone', checked: false },
            { label: 'Waterproof', checked: false },
            { label: 'Pore care', checked: false },
            { label: 'Blackheads', checked: false },
            { label: 'Firming', checked: false },
            { label: 'Under eye concern', checked: false },
            { label: 'Cleansing', checked: false },
            { label: 'Dull skin', checked: false },
        ],      
    });

    const handleFilterClick = (filter) => {
        setActiveFilter(activeFilter === filter ? null : filter);
    };

    const handleCheckboxChange = (filter, index) => {
        const updatedOptions = { ...dropdownOptions };
        updatedOptions[filter][index].checked = !updatedOptions[filter][index].checked;
        setDropdownOptions(updatedOptions);


        console.log(isChecked)
        setChecked(!isChecked)
    };

    const renderDropdown = (filter) => {
        if (activeFilter === filter) {
            return (
                <div className="dropdown-content " >
                    {dropdownOptions[filter].map((option, index) => (
                        <div key={index} className="dropdown-option borders border-red-900 flex">
                            <label className='font-SulphurPoint font-normal text-[#504949] text-xl'>{option.label}</label>
                            <input
                                type="checkbox"
                                checked={option.checked}
                                onChange={() => handleCheckboxChange(filter, index)}
                                className="ml-auto h-[28px] w-[28px] rounded-[2rem] borders border-black"
                            />
                            {/* <div className={`w-8 h-8 rounded-full border-2 border-black ${isChecked ? 'bg-green-500' : 'bg-white'}`}>


          {isChecked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="red"
              className="w-6 h-6 mx-auto mt-1"
            >
              <path
                d="M6 10l3 3 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div> */}
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex-grow lp-4 p font-SulphurPoint">
        
            {/* Desktop filter section */}
            <div className='bg-[#FFFFFF] p-[1rem] rounded-[24px] borders border-blue-900 w-[15rem] lg:w-[18rem]'>
            {/* <Link to="" className='w-[48px] h-[48px] border border-green-900 rounded-xl flex items-center cursor-pointer'> */}
            <div className='flex items-center gap-3'>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] bg-[#D66F11]s' src={FilterOrange} alt="" />
            <span className='text-[#D66F11] font-SulphurPoint font-normal text-2xl lg:text-[28px]'>Filter</span>
            </div>
{/* </Link> */}


            
                {/* Location box */}
                <div className="filter-box">
                    <h3
                        onClick={() => handleFilterClick('location')}
                        className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D] ${activeFilter === 'location' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }`}
                    >
                        Location 
                        {/* <span className="arrow-icon ml-auto" >˅</span> */}
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                    </h3>
                    {renderDropdown('location')}
                </div>               
             {/* sort box */}
             
             <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('sort')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]    ${activeFilter === 'sort' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Sort              
                        {/* <span className="arrow-icon ml-auto" >˅</span> */}
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('sort')}
                </div>
               
                {/* Add similar entries for other filters */}
          
             {/* brand box */}          
             <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('brand')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'brand' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Brand              
                        {/* <span className="arrow-icon ml-auto" >˅</span> */}
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('brand')}
                </div>              
                {/* Add similar entries for other filters */}

                 {/* price box */}          
             <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('price')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'price' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Price              
                        {/* <span className="arrow-icon ml-auto" >˅</span> */}
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('price')}
                </div>              
                {/* Add similar entries for other filters */}
                <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('skintype')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'skintype' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Skintype             
                        {/* <span className="arrow-icon ml-auto" >˅</span> */}
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('skintype')}
                </div>              
                {/* Add similar entries for other filters */}
                <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('preference')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'preference' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Preference             
                        {/* <span className="arrow-icon ml-auto" >˅</span> */}
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('preference')}
                </div>              
                {/* Add similar entries for other filters */}
                 {/* Add similar entries for other filters */}
                 <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('concern')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'concern' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Concerns             
                        {/* <span className="arrow-icon ml-auto" >˅</span> */}
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('concern')}
                </div>              
                {/* Add similar entries for other filters */}





            </div>
            {/* Filter content */}
            <div className='bg-[white-] pt-[2rem] px-[1.2rem] grow'>
                {/* Location box */}
                {activeFilter === 'location' && (
                    <div className='rounded-[15px] shadow-SearchBar
                        w-full border border-[#D66F11] h-[45px]
                        flex'>
                        {/* Add location content here */}
                    </div>
                )}
                {/* Add similar entries for other filter content */}
            </div>
        </div>
    );
};

export default ArtistFilter;
