// Splash screen -->  run as a loader before home screen.

import React from 'react'

// import css file
import '../SplashScreen/SplashScreen.css'

// import logo
import logo from '../../assets/Image/Logo.png'

const Splash = () => {

    return (
        <div className='absolute castmOnetwo w-full h-screen md:py-6 '>
            <div className='flex justify-center items-center h-full w-[95%] xl:w-[90%] mx-auto relative'>
                <img
                className='
                absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0
                w-[120px] h-[50px] xs:w-[150px] xs:h-[63px] md:w-[140px] md:h-[60px] lg:w-[200px] lg:h-[78px]
                glamgo-log-slider-animation
                '
                src={logo}  alt="logo_image" />
            </div>
        </div>
    )
}

export default Splash;
