import React, { useState } from 'react'

// import css file
import '../../components/WelcomeToGlamgo/WelcomeToGlamgo.css'

// import image  
import image1 from '../../assets/Image/welcomeImg1.png'
import image2 from '../../assets/Image/welcomeImg2.png'
import image3 from '../../assets/Image/welcomeImg3.png'
import image4 from '../../assets/Image/welcomeImg4.png'


// left arrow
import { IoIosArrowForward } from "react-icons/io";
// right arrow
import { IoIosArrowBack } from "react-icons/io";



const WelcomeToGlamgo = () => {

  // this content inside the slider
  const sliderContent = [
    {heading:'Welcome to Glamgo',para: 'Elevate your beauty journey', btnText:'Get Started', image: image1},
    {heading:'Discover Trends',para: 'Explore the latest makeup and beauty trends', btnText:'Explore Trends', image: image2},
    {heading:'Artists for your special day',para: 'Artists for your special day', btnText:'Explore Artists', image: image3},
    {heading:'Hairstylist Extraordinaire',para: 'Transform your hair with the touch of our expert hairstylists', btnText:'Explore Hairstylists', image: image4},
  ]

  // current slide | next slider | previous slide
  const [currentSlide , setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [prevSlide, setPrevSlide] = useState((currentSlide - 1 + sliderContent.length) % sliderContent.length)


  const [firstImageAnimate , setFirstImageAnimate] = useState(null)
  const [secondImageAnimate, setSecondImageAnimate] = useState(null)


  // when click on move next button
  const moveNext = ()=>{
    setFirstImageAnimate('rightToLeft')
    setSecondImageAnimate('rightToLeft')
    setPrevSlide(currentSlide);
    setCurrentSlide(nextSlide);
    setNextSlide((prevIndex) => (prevIndex + 1) % sliderContent.length)
  }

  // when click on move prev button
  const movePrev = ()=>{
      setFirstImageAnimate('leftToRight')
      setSecondImageAnimate('leftToRight')
      setNextSlide(currentSlide)
      setCurrentSlide(prevSlide)
      setPrevSlide((prevIndex) => (prevIndex - 1 + sliderContent.length) % sliderContent.length);
  }

  return (
    <div className='h-fit overflow-hidden'>
            {
              sliderContent.map((val, index)=>{
                return(
                  <div key={index} 
                  className={` ${index === currentSlide ? 'display ': ' hidden transition-all duration-500'}
                  bg-gradient-to-r from-[#E9DDF5] to-[#F2BB99] md:from-[#F5F5DD] md:to-[#F2BB99]
                  md:mt-[2rem] md:mb-[4rem] lg:mt-[2.5rem] xl:mt-[3rem] w-[100%] md:w-[90%]
                  mx-auto md:rounded-[2rem]
                  flex gap-1 xs:gap-2 sm:gap-5 md:gap-0  h-[150px] xs:h-[170px] sm:h-[290px] md:h-[165px] lg:h-[200px]
                    px-1 sm:px-4 md:px-2 xl:px-4
                  `}>
                    <div className='flex items-center grow'>
                      <div className='font-SulphurPoint  md:pl-4 lg:pl-6 '>

                          <h3 className='font-bold text-base sm:text-2xl md:text-2xl lg:text-3xl text-[#A21D3C] text-animate'>{val.heading}</h3>
                          
                          <p className='font-normal text-[12px] xs:text-[14px] sm:text-[16px] lg:text-lg text-[rgb(45,45,45)] pb-[1rem] xs:pt-[8px] xs:pb-[1.3rem] sm:pt-[1rem] sm:pb-[2.5rem] md:pb-[1.6rem] md:pt-[6px] text-animate leading-[1.2rem]'>{val.para}</p>
                          <div className='w-[130px] h-[30px] sm:w-[200px] sm:h-[40px]  text-base rounded-lg bg-[#A21D3C]
                          flex justify-center items-center cursor-pointer
                          
                          '>
                              <p className='font-Roboto font-bold text-xs sm:text-sm md:text-[15px] lg:text-lg text-[#F3EFEF] text-animate'>{val.btnText}</p>
                          </div>

                        </div>
                    </div>
                    {/* image box */}
                      <div className="md:w-1/2 flex items-center  relative">
                      <div className={`${firstImageAnimate === 'rightToLeft'? 'first-image-animate-right-to-left': firstImageAnimate === 'leftToRight' ? 'first-image-animate-left-to-right': null} 
                              w-[160px] h-[120px] xs:w-[180px] xs:h-[140px] sm:w-[290px] sm:h-[260px] md:w-[290px] md:h-[210px] lg:w-[340px] lg:h-[250px] rounded-[20px] overflow-hidden static md:absolute bottom-[50%] right-[0%] lg:right-[25%]  md:translate-y-1/2`}>
                                  <img  src={val.image} className='w-full h-full shadow-homeImageSlider' alt="" />
                              </div>
                              <div className={`hidden ${secondImageAnimate === 'rightToLeft'? 'second-image-animate-right-to-left': secondImageAnimate === 'leftToRight' ? 'second-image-animate-left-to-right': null} hidden lg:block w-[240px] h-[160px] lg:w-[240px] lg:h-[180px]  overflow-hidden absolute bottom-[50%] right-[-15%] lg:right-[-8%] md:translate-x-1/2 md:translate-y-1/2`}>
                                  <img  src={sliderContent[nextSlide].image} className='w-full h-full'/>
                              </div>
                      </div>
                  </div>
                )
              })
            }


            {/* navigation buttons */}
            <div className='mt-6 mt-[4rem]s flex justify-center gap-x-[4rem]'>
                {/* previous button */}
                <div 
                onClick={()=>{movePrev()}}
                className='w-[30px] h-[30px] md:w-[45px] md:h-[45px] cursor-pointer bg-[#F8E3E3] rounded-[2rem] flex items-center justify-center'>
                    <IoIosArrowBack className='text-lg md:text-2xl text-[#A21D3C]' /> 
                </div>

                {/* next button */}
                <div 
                onClick={()=>{moveNext()}}
                className='w-[30px] h-[30px] md:w-[45px] md:h-[45px] cursor-pointer  bg-[#F8E3E3] rounded-[2rem] flex items-center justify-center'>
                    <IoIosArrowForward className='text-lg md:text-2xl text-[#A21D3C]' /> 
                </div>
            </div>


            {/* get last */}
            <div className='hidden md:block text-center pt-[4rem] pb-[2rem] '>
                <p className='f font-SulphurPoint font-light text-[#A21D3C] text-3xl'>Get Started with your beauty journey</p>
            </div>
        </div>
  )
}

export default WelcomeToGlamgo
