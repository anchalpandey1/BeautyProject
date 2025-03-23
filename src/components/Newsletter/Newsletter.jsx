import React from 'react'

const Newsletter = () => {
    return (
        <div className='hidden md:block w-[80%] lg:w-[70%] mx-auto py-[4rem] '>
            <h4 className='font-SulphurPoint font-normal text-2xl lg:text-3xl xl:text-4xl text-[#2D2D2D] text-center'>Subscribe to our Newsletter for Latest updates.</h4>
            
            {/* add email id */}
            <div className='border border-[#A21D3C] rounded-[8px] bg-[#F3EFEF]
            shadow-NewsletterInputBox p-[1.2rem] my-8 flex  justify-between

            '>
                <input 
                className='font-SulphurPoint font-normal text-2xl lg:text-[26px] xl:text-[28px] text-[#2D2D2D] placeholder:text-[#2D2D2D] bg-[#F3EFEF] w-[70%] outline-none'
                type="text" placeholder='Your Email-ID' />



                <div className='bg-[#A21D3C]
                py-3 px-7 rounded-[8px] font-SulphurPoint font-bold text-[#FFFFFF] text-xl lg:text-[22px] xl:text-2xl shadow-NewsletterButton
                '>Subscribe</div>

            </div>
        
        </div>
    )
}

export default Newsletter
