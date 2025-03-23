import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TeamMemberImg from '../../assets/AboutUs/TeamMemberImg.png'
import Footer from '../../components/Footer/Footer'

const AboutUs = () => {
    return (
        <div className='bg-[#F3EFEF]'>
            <Navbar/>
            <div className='h-[500px] w-full bg-AboutUsImage bg-center bg-cover py-[4rem]' >
                <h2 className='f font-SulphurPoint font-normal text-[22px] sm:text-2xl lg:text-[32px] text-[#A21D3C] text-center'>Your beauty journey starts here</h2>
            </div>
            <div className='w-[85%] mx-auto my-[1.5rem] lg:my-[2rem] xl:my-[3rem] font-SulphurPoint'>
                
                <div className='flex flex-col gap-y-[4rem] lg:gap-y-[6rem]'>
                    {/* About us content */}
                    <div>
                        <h2 className='text-bold text-[#A21D3C] text-[22px] sm:text-2xl lg:text-3xl xl:text-[34px] pb-2 lg:pb-3'>About us</h2>
                        <p className='text-normal text-[#504949] text-base sm:text-lg  xl:text-xl'>Welcome to Glamgo, where beauty meets innovation! We believe that everyone deserves to look and feel their best, and we've created a platform that connects talented makeup artists with beauty enthusiasts like you. At Glamgo, our mission is to make beauty accessible, personalized, and convenient for everyone. Whether you're a skilled makeup artist looking to showcase your talents or a user in search of the perfect beauty experience, we've got you covered.</p>
                    </div>
                    {/*  our Mission content */}
                    <div>
                        <h2 className='text-bold text-[#A21D3C] text-[22px] sm:text-2xl lg:text-3xl xl:text-[34px] pb-2 lg:pb-3'>Mission</h2>
                        <p className='text-normal text-[#504949] text-base sm:text-lg xl:text-xl'>At Glamgo, our mission is to make beauty accessible, personalized, and convenient for everyone. Whether you're a skilled makeup artist looking to showcase your talents or a user in search of the perfect beauty experience, we've got you covered. At Glamgo, our mission is to make beauty accessible, personalized, and convenient for everyone. Whether you're a skilled makeup artist looking to showcase your talents or a user in search of the perfect beauty experience, we've got you covered.</p>
                    </div>
                    {/* About us content */}
                    <div>
                        <h2 className='text-bold text-[#A21D3C] text-[22px] sm:text-2xl lg:text-3xl xl:text-[34px] pb-2 lg:pb-3'>Vision</h2>
                        <p className='text-normal text-[#504949] text-base sm:text-lg  xl:text-xl'>At Glamgo, we envision a world where beauty is a source of empowerment, self-expression, and confidence for everyone. We strive to redefine the beauty industry by leveraging technology to connect talented makeup artists with individuals seeking personalized and accessible beauty experiences. At Glamgo, our mission is to make beauty accessible, personalized, and convenient for everyone. Whether you're a skilled makeup artist looking to showcase your talents or a user in search of the perfect beauty experience, we've got you covered.</p>
                    </div>
                </div>


                {/* meet the team */}
                <div className='my-[3rem] lg:my-[4rem]'>
                    <h2 className='text-bold text-[#A21D3C] text-[22px] sm:text-2xl lg:text-3xl xl:text-[34px] pb-[1rem] lg:pb-[2rem]'>Meet the Team</h2>
                    
                    <div className='flex flex-col gap-y-[4rem] lg:gap-y-[5rem]'>
                        {/* founder */}
                        <div className='flex flex-col md:flex-row justify-center items-center gap-[2rem] md:gap-[3rem]'>
                            {/* image */}
                            <div className='shrink-0'>
                                <img src={TeamMemberImg} className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] xl:w-[180px] xl:h-[180px]' alt="" />
                            </div>
                            {/* content */}
                            <div className='font-SulphurPoint'>
                                <h2 className= 'text-[#2D2D2D] text-lg sm:text-xl lg:text-[22px] xl:text-2xl font-bold text-center md:text-start'>Rajesh Kumar</h2>
                                <h2 className='font-bold text-[#504949] text-base sm:text-lg lg:text-xl  xl:text-[22px] py-1 xl:py-2 text-center md:text-start'>Founder/CEO</h2>
                                <p className='text-normal text-[#989898] text-sm sm:text-base lg:text-lg xl:text-xl pb-1 xl:pb-2 text-center md:text-start'>4 Yrs of experience</p>
                                <p className='text-normal text-[#504949] text-sm sm:text-base lg:text-lg xl:text-xl text-center md:text-start'>CEO is not just a leader but a visionary who brought a distinctive perspective to the development of our apps. With a wealth of experience and a knack for innovation. He is the driving force behind our app's success.</p>
                            </div>
                        </div>
                        {/* Co-Founder */}
                        <div className='flex flex-col md:flex-row justify-center items-center gap-[2rem] md:gap-[3rem]'>
                            {/* image */}
                            <div className='shrink-0'>
                                <img src={TeamMemberImg} className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] xl:w-[180px] xl:h-[180px]' alt="" />
                            </div>
                            {/* content */}
                            <div className='font-SulphurPoint'>
                                <h2 className='text-[#2D2D2D] text-lg sm:text-xl lg:text-[22px] xl:text-2xl font-bold text-center md:text-start'>Alka Singh</h2>
                                <h2 className='font-bold text-[#504949] text-base sm:text-lg lg:text-xl  xl:text-[22px] py-1 xl:py-2 text-center md:text-start'>Co-Founder/CEO</h2>
                                <p className='text-normal text-[#989898] text-sm sm:text-base lg:text-lg xl:text-xl pb-1 xl:pb-2 text-center md:text-start'>4 Yrs of experience </p>
                                <p className='text-normal text-[#504949] text-sm sm:text-base lg:text-lg xl:text-xl text-center md:text-start'>CEO is not just a leader but a visionary who brought a distinctive perspective to the development of our apps. With a wealth of experience and a knack for innovation. He is the driving force behind our app's success.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* join us */}
                <div className='flex flex-col gap-y-[1rem] pb-[2rem]'>
                    <h2 className='text-bold text-[#A21D3C] text-lg sm:text-2xl lg:text-3xl xl:text-[34px]'>Join us on the Beauty Journey</h2>
                    <p className='text-normal text-[#504949] text-sm sm:text-base lg:text-lg xl:text-xl'>Glamgo is more than just a platform; it's a beauty journey waiting to be explored. Whether you're an artist, a beauty enthusiast, or simply curious about what we have to offer, we invite you to join us on this exciting adventure.</p>
                    <p className='text-normal text-[#504949] text-sm sm:text-base lg:text-lg xl:text-xl'>Thank you for choosing Glamgo — where beauty knows no bounds!</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs
