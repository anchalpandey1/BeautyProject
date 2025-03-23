





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import filterIcon from  '../../assets/Image/filter_icon.png';

// const Filter = () => {
//     const [activeFilter, setActiveFilter] = useState(null);
//     const [dropdownOptions, setDropdownOptions] = useState({
//         Category: [
//             { label: 'Makeup', checked: false },
//             { label: 'Skincare', checked: false },
//             { label: 'Face', checked: false },
//             { label: 'Eyes', checked: false },
//             { label: 'Lips', checked: false },
//         ],
//         Sort: [
//             { label: 'Popularity', checked: false },
//             { label: 'Discounts', checked: false },
//             { label: 'Lowest Price First', checked: false },
//             { label: 'Highest Price first', checked: false },
//             { label: 'Discounts', checked: false },
//             { label: 'Highest Ratings(4 stars & above)', checked: false },
//             { label: 'Low Ratings(1 stars & above)', checked: false },
//         ],
//     Brand: [
//                         { label: 'Lakme', checked: false },
//                         { label: 'Faces Canada', checked: false },
//                         { label: 'Maybelline New York', checked: false },
//                         { label: 'Insights Cosmetics', checked: false },
//                         { label: 'Iba', checked: false },
//                         { label: 'Revolution', checked: false },
//                         { label: 'Dermacol', checked: false },
//                         { label: 'Swiss Beauty', checked: false },
//                         { label: 'PAC', checked: false },
//                         { label: 'Miss Claire', checked: false },
//                         { label: 'Sugar', checked: false },
//                         { label: 'Matt Look', checked: false },
//                         { label: 'MyGlamm', checked: false },
//                         { label: 'Kay Beauty', checked: false },
//                         { label: 'Renee Cosmetics', checked: false },
//                         { label: 'e.l.f. Cosmetics', checked: false },
//                         { label: 'Soezi', checked: false },
//                         { label: 'Blue Heaven', checked: false },
//                         { label: 'VEGA', checked: false },
//                     ],  
//                             price: [
//             { label: 'All Prices', checked: false },
//             { label: 'Under ₹499 ', checked: false },
//             { label: 'Under ₹1,000', checked: false },
//             { label: '₹1,000-₹5,000', checked: false },
//             { label: '₹5,000-₹10,000 ', checked: false },
//             { label: 'Over ₹10,000', checked: false },            
//         ],  
//         skintype: [
//             { label: 'Normal', checked: false },
//             { label: 'Combination ', checked: false },
//             { label: 'Sensitive', checked: false },
//             { label: 'Oily', checked: false },
//             { label: 'Dry ', checked: false },
//             { label: 'All', checked: false },            
//         ],   
//         preference: [
//             { label: 'Vegan', checked: false },
//             { label: 'Cruelty-free', checked: false },
//             { label: 'Paraben Free', checked: false },
//             { label: 'Vitamin E', checked: false },
//             { label: 'Waterproof', checked: false },
//             { label: 'Sulphate-free', checked: false },
//             { label: 'Herbal', checked: false },
//             { label: 'Pthalate-free', checked: false },
//             { label: 'Oil-free', checked: false },
//             { label: 'Alcohol-free', checked: false },
//             { label: 'Organic', checked: false },
//             { label: 'Formaldehyde-free', checked: false },
//             { label: 'Gluten-free', checked: false },
//             { label: 'Vitamin C', checked: false },
//             { label: 'Antioxidants', checked: false },
//             { label: 'Organic', checked: false },
//             { label: 'Fragrance-Free', checked: false },
//             { label: 'Synthetic', checked: false },
//             { label: 'Parafin-free', checked: false },
//         ],      
//         concern: [
//             { label: 'Hydration', checked: false },
//             { label: 'Oil Control', checked: false },
//             { label: 'Brightening', checked: false },
//             { label: 'Acne & Blemishes', checked: false },
//             { label: 'Sun Protection', checked: false },
//             { label: 'Dryness', checked: false },
//             { label: 'Fine lines & Wrinkles', checked: false },
//             { label: 'Dullness', checked: false },
//             { label: 'Dark Spots', checked: false },
//             { label: 'Anti aging', checked: false },
//             { label: 'Pores', checked: false },
//             { label: 'Uneven Skin tone', checked: false },
//             { label: 'Waterproof', checked: false },
//             { label: 'Pore care', checked: false },
//             { label: 'Blackheads', checked: false },
//             { label: 'Firming', checked: false },
//             { label: 'Under eye concern', checked: false },
//             { label: 'Cleansing', checked: false },
//             { label: 'Dull skin', checked: false },
//         ],      
//     });




//     const handleFilterClick = (filter) => {
//         setActiveFilter(activeFilter === filter ? null : filter);
//     };

//     const handleCheckboxChange = (filter, index) => {
//         const updatedOptions = { ...dropdownOptions };
//         updatedOptions[filter][index].checked = !updatedOptions[filter][index].checked;
//         setDropdownOptions(updatedOptions);
//     };

//     const handleApplyAll = () => {
//         const selectedOptions = {};
//         Object.keys(dropdownOptions).forEach((filter) => {
//             selectedOptions[filter] = dropdownOptions[filter].filter((option) => option.checked);
//         });
//         console.log("Selected Options:", selectedOptions);
//     };

//     const renderDropdown = (filter) => {
//         if (activeFilter === filter) {
//             return (
//                 <div className="dropdown-content">
//                     {dropdownOptions[filter].map((option, index) => (
//                         <div key={index} className="dropdown-option flex items-center justify-between">
//                             <span>{option.label}</span>
//                             <label className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     checked={option.checked}
//                                     onChange={() => handleCheckboxChange(filter, index)}
//                                     className="form-checkbox h-4 w-4 text-indigo-600 border-[#D66F11]"
//                                 />
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//             );
//         }
//         return null;
//     };

//     return (
//         <div className="flex-grow p-4">
//             <div className='bg-white p-6'>
//                 <Link to="" className='flex items-center cursor-pointer'>
//                     <img className='w-6 h-6' src={filterIcon} alt="" />
//                     <span className='text-[#D66F11] ml-3'>Filter</span>
//                 </Link>
//                 {Object.keys(dropdownOptions).map((filter, index) => (
//                     <div key={index} className="filter-box">
//                         <h3
//                             onClick={() => handleFilterClick(filter)}
//                             className={`py-5 cursor-pointer flex items-center ${activeFilter === filter ? 'text-[#A21D3C] bg-white' : null}`}
//                         >
//                             {filter}
//                             <span className="arrow-icon ml-auto">˅</span>
//                         </h3>
//                         {renderDropdown(filter)}
//                     </div>
//                 ))}
//                 <button onClick={handleApplyAll} className="bg-[#D66F11] text-white px-4 py-2 mt-4 rounded-md">Apply All</button>
//             </div>
//         </div>
//     );
// };

// export default Filter;



import React, { useState } from 'react';
import FilterOrange from '../../assets/Filter/filter_orange.png'
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
const Filter = () => {
    const [isChecked, setChecked] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);
    const [dropdownOptions, setDropdownOptions] = useState({
        category: [
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
                <div className="dropdown-content ">
                    {dropdownOptions[filter].map((option, index) => (
                        <div key={index} className="dropdown-option borders border-red-900 flex">
                            <label className='font-SulphurPoint font-normal text-[#504949] text-xl'>{option.label}</label>
                            <input
                                type="checkbox"
                                checked={option.checked}
                                onChange={() => handleCheckboxChange(filter, index)}
                                className="ml-auto mb-2 h-[28px] w-[28px] rounded-[2rem]  border border-black"
                            />
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };
    const handleApplyAll = () => {
        const checkedOptions = {};
        for (const filter in dropdownOptions) {
            const selectedOptions = dropdownOptions[filter].filter(option => option.checked);
            if (selectedOptions.length > 0) {
                checkedOptions[filter] = selectedOptions.map(option => option.label);
            }
        }
        console.log(checkedOptions);
    };
    return (
        <div className="flex-grow lp-4 p font-SulphurPoint">
            <div className='bg-[#FFFFFF] p-[1rem] rounded-[24px] borders border-blue-900 w-[15rem] lg:w-[18rem]'>
            <div className='flex items-center gap-3'>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] bg-[#D66F11]s' src={FilterOrange} alt="" />
            <span className='text-[#D66F11] font-SulphurPoint font-normal text-2xl lg:text-[28px]'>Filter</span>
            </div>
                <div className="filter-box">
                    <h3
                        onClick={() => handleFilterClick('category')}
                        className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D] ${activeFilter === 'category' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }`}
                    >
                       Category
                       <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                    </h3>
                    {renderDropdown('category')}
                </div>   
             <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('sort')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]    ${activeFilter === 'sort' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Sort    
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('sort')}
                </div>         
             <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('brand')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'brand' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Brand    
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('brand')}
                </div>                 
             <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('price')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'price' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Price   
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('price')}
                </div>   
                <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('skintype')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'skintype' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Skintype   
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('skintype')}
                </div>        
                <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('preference')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'preference' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Preference   
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('preference')}
                </div>       
                 <div className="filter-box">
                <h3
                onClick={() => handleFilterClick('concern')}
                className={`py-5 cursor-pointer flex items-center font-bold text-xl lg:text-[22px] text-[#2D2D2D]  ${activeFilter === 'concern' ? 'text-[#A21D3C] bg-[#FFFFFF]' : null }  cursor-pointer`}
                >Concerns   
                        <FaChevronDown className='ml-auto text-[#2D2D2D] text-base lg:text-lg'/>
                        </h3>
                    {renderDropdown('concern')}
                </div>       
                <button className="apply-all-button" onClick={handleApplyAll}>
                Apply All
            </button>
            </div>
            {/* <div className='bg-[white-] pt-[2rem] px-[1.2rem] grow'>
                {activeFilter === 'location' && (
                    <div className='rounded-[15px] shadow-SearchBar
                        w-full border border-[#D66F11] h-[45px]
                        flex'>
                    </div>
                )}
                
            </div> */}
        </div>
    );
};

export default Filter;
