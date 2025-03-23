import React from 'react'

import discountImage from '../../assets/Image/discountImg.png'

const DiscountOnServies = () => {
    return (

        <div className='w-full bg-[#F3EFEF] py-[1rem] md:py-[2rem] h-fit'>
            
            <div className='w-[85%] xs:w-[85%] md:w-[85%] lg:w-[85%] max-w-[390px]s mx-auto flex justify-center xs:justify-between md:max-w-[1000px]
            gap-1 sm:gap-x-6 md:gap-x-10

            bg-[#FFFFFF]s w-[85%]s md:w-[95%s]s rounded-xls
            p-4s md:p-6s 
            '>

                <div className='bg-[#FFFFFF] border border-[#DCDCFF] px-2 xs:px-4 py-3 md:py-4 shadow-DiscountCard xs:w-full
                flex flex-col items-center justify-center rounded-lg
                md:bg-gradient-to-r from-[#E5CAD0] to-[#FAF4D4]

                '
                >
                    <div className='flex gap-2 items-center font-DMSans'>
                        <img className='w-5 h-5' src={discountImage} alt="" />
                        <p className='font-bold text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-[#1C1C28] whitespace-nowrap'>20% off</p>
                    </div>
                    <p className='font-normal text-[10px] xs:text-xs sm:text-sm lg:text-base text-[#1C1C28] whitespace-nowrap'>use code FREE50</p>
                </div>

                <div 
                className='bg-[#FFFFFF] border border-[#DCDCFF] px-2 xs:px-4 py-3 md:py-4 shadow-DiscountCard xs:w-full
                flex flex-col items-center justify-center rounded-lg
                md:bg-gradient-to-r from-[#E5CAD0] to-[#FAF4D4]
                '
                >
                    <div className='flex gap-2 items-center font-DMSans'>
                        <img className='w-5 h-5' src={discountImage} alt="" />
                        <p className='font-bold text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-[#1C1C28] whitespace-nowrap'>15% off on Debit Card</p>
                    </div>
                    <p className='font-normal text-[10px] xs:text-xs sm:text-sm lg:text-base text-[#1C1C28] whitespace-nowrap'>No coupon required</p>
                </div>
            </div>
        </div>

    )
}

export default DiscountOnServies
