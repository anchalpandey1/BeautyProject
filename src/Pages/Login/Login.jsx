import React, { useEffect, useState } from 'react';

// import required images.
import logo from '../../assets/Image/Logo.png'
import loginMobileImage from '../../assets/Image/LoginMobileImage.png' 

import { useUserLoginMutation } from '../../features/user/authAPISlice';
import { useArtistLoginMutation } from '../../features/user/authAPISlice';



import { useDispatch, useSelector } from 'react-redux';
// import { addUserLoginDetails } from '../../features/user/userSlice';



// import Link and userNavigate from react-router-dom . so that we can navigate to the next page.
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import css
// import '../Login/Toggle.css'


// import react icons 
import { CiMobile3 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';

const Login = () => {

    const [userLogin , Error, isLoading] = useUserLoginMutation();
    const [artistLogin  ] = useArtistLoginMutation();

    const location = useLocation();

    const dispatch = useDispatch();

    // get this login url and change in LoginOTP url
    const currentUrl = location.pathname;
    const loginOTPUrl = currentUrl.replace("login", "loginOTP");
    const signUpUrl = currentUrl.replace("login", "signup");


    // const [showAlertMessage, setShowAlertMessage] = useState(true);
    const [showError, setShowError] = useState(false)
    const [alertMessage, setAlertMessage] = useState('');
    

    const checkResponse = (response)=>{
        console.log(response.data)
        if(response.data.success === true){
            // store mobile number in session storage.
            storeNumberInSessionStorage();
            if(currentUrl === '/user/login'){
                navigate('/user/loginOTP',{replace : true})
            }
            else if(currentUrl === '/artist/login'){
                navigate('/artist/loginOTP',{replace : true})
            }
        }
    }

     //assign useNavigate
    const navigate = useNavigate(); 

    // store user mobile number
    const [mobileNumber, setMobileNumber] = useState();


    // store toggle checked or not.
    const [isChecked, setIsChecked] = useState(true);

    // handle on toggle
    const toggleHandler = () => {
        setIsChecked(!isChecked);
    };

    // Function to store the user's number in session storage
    const storeNumberInSessionStorage = () => {
        alert('OTP successfully sent in your mobileNumber')
        // Check if session storage is supported
        if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('mobileNumber', mobileNumber);
        // alert('User name stored in session storage!');
        } else {
        alert('Session storage is not supported in this browser.');
        }
    };

    // when user click on get OTP
    const getotp = async ()=>{
        try{
            console.log('your entered mobile number is', mobileNumber)
            const loginData = {
                contactNumber : mobileNumber
            }
                console.log('current url is', currentUrl)
            if(currentUrl === '/user/login'){
                const response = await userLogin(loginData)
                checkResponse(response)
            }
            else if(currentUrl === '/artist/login'){
                const response = await artistLogin(loginData)
                checkResponse(response)
            }

        }catch(error){
            console.log(error)
        }

        // if(response.data.success === true){
        //     if(currentUrl === '/user/login'){
        //         navigate('/user/loginOTP',{replace : true})
        //     }
        //     else if(currentUrl === '/artist/login'){
        //         navigate('/artist/loginOTP',{replace : true})
        //     }
        // }


        // console.log(response.data.success)


        // try {
        //     const formdata={
        //         contactNumber : mobileNumber
        //     }
        //     const response=await axios.post('https://glamgo.onrender.com/api/v1/auth/login',formdata)
        //     console.log(response.data)
            
        //     const message = response.data.message
        //     // setAlertMessage(message);
            
        //     // const userdata = response.data;

        //     // it will store user details
        //     // dispatch(addUserLoginDetails(userdata))


        //     // it will store user details

        //     // store mobile number in session storage.
        //     storeNumberInSessionStorage();
            


        //     navigate(loginOTPUrl,{replace : true})
        //     // navigate to the signup page
        //     // navigate('/loginOTP',{replace : true})
        // } catch (error) {
        //     const commonErrorMessage = "An unexpected error occurred. Please try again later";
        //     setShowError(true)
        //     if (error.response) {
        //         // The request was made and the server responded with a status code
        //         // that falls out of the range of 2xx
        //         console.log(error.response.data);
        //         // alert(error.response.data)
                
        //         const message = error.response.data.message;
        //         setAlertMessage(message)
        //         console.log(message)
        //         console.log(error.response.status);
        //         // console.log(error.response.headers);
        //     }
        //     else {

        //         console.log('Error', error.message);
        //         setAlertMessage("An unexpected error occurred. Please try again later")
        //     }
        //     console.log(error.config);
        // }
        
    }

    const handleMobileNoChange = (e)=>{
        // print your enter number
        // console.log(e.target.value)
        setMobileNumber(e.target.value)
    }
    return (
        // for border and background image for website.
        <div className='w-full min-h-screen bg-LoginImage bg-no-repeat bg-cover bg-center
        flex md:block flex-col relative
        '>
            {/* loading thing */}
            {
                showError ? 
                <div className="w- z-40 absolute w-[90%] md:w-[50%] p-4 mb-4 left-1/2 top-4 text-center  -translate-x-1/2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <h1 className='text-sm md:text-base lg:text-xl'>{alertMessage}</h1>
                </div>
            : null
            }


        <div className='md:hidden' >
            <img className='w-full h-fit' src={loginMobileImage}  alt="" />
        </div>

        
        <div className='grow relative md:static'>
            
        


            {/* content box */}
            <div className='min-h-full bg-[#F3EFEF] absolute md:w-[29rem]
                    top-[-12%] right-0 w-full md:right-1/2 md:top-[55%] md:translate-x-1/2 md:-translate-y-1/2 
                    lg:right-[10%] lg:translate-x-0 bottom-0 md:min-h-0 md:h-fit
                    rounded-t-[3.6rem] md:rounded-[24px]
                    md:animate-slide-left-to-right
        '
                    >

                <div className='
                min-h-full pt-[4rem] md:pt-[6rem] pb-[2rem] relative md:px-[3rem] bg-[#F3EFEF] rounded-t-[3.6rem] md:rounded-[24px]
            '>
                                    <img 
                        className=' w-[210px] md:w-[260px] lg:w-[280px] rounded-[30px] absolute top-[-10%] md:top-[-10%] left-1/2 -translate-x-1/2 shadow-GlamgoLogo'
                            src={logo} alt="logoImage" />



                    
                    <div className='h-full w-[80%] md:w-[100%] mx-auto'>
                        <div className='font-SulphurPoint text-center mb-[1.3rem]'>
                            <h3 className='font-bold text-[28px] md:text-3xl lg:text-4xl text-[#2D2D2D]'>Welcome back!</h3>
                            <p className='font-normal text-base lg:text-lg text-[#989898]'>Login to your account</p>
                        </div>


                        <div>
                            {/* toggle button */}

                            {/* <div className='flex justify-between mb-[1rem]'>
                                    <h4 className='font-SulphurPoint font-bold text-xl md:text-[22px] lg:text-2xl text-[#2D2D2D]'>I am an Artist</h4>

                                    <label className={`toggle-container ${isChecked ? 'checked' : ''}`}>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={toggleHandler}
                                            className="toggle-input"
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                            </div> */}


                            {/* mobile number */}
                            <div className='mb-[1rem] border-[1px] border-[#989898] bg-[#F3EFEF] rounded-[12px] flex items-center px-2 py-2 md:py-3 gap-3 shadow-MobileNoBox'>
                                <span> <CiMobile3 className='text-2xl text-[#989898]'/> </span>
                                <input 
                                type="number" 
                                onChange={handleMobileNoChange}
                                className='font-SulphurPoint font-bold text-lg md:text-xl lg:text-[22px] text-[#989898] bg-[#F3EFEF] outline-none 
                                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                                '
                                placeholder='Mobile Number'
                                />
                            </div>

                            {/* get OTP box */}
                            <div 
                                onClick={()=> getotp()}
                                className='bg-[#A21D3C] mb-[1rem] py-3 md:py-[14px] rounded-[12px] shadow-GetOTPBtn cursor-pointer'>
                                    
                                    <h3 className='font-Roboto font-bold text-lg md:text-xl lg:text-[22px] text-[#FFFFFF] text-center'>Get  OTP</h3>
                            </div>


                            {/* or options */}
                            {/*<div className='my-[1.2rem] flex items-center justify-center'>
                                    
                                    <div className="w-full relative">
                                        <div className='absolute w-full top-[50%] border-[1px] border-[#00000040]'></div>
                                    </div>
                                    <p className='font-inter font-medium text-[13px] text-[#989898] mx-2'>or</p>
                                    <div className="w-full relative">
                                        <div className='absolute w-full top-[50%] border-[1px] border-[#00000040]'></div>
                                    </div>
                            </div>*/}

        {/* social icons */}
                            {/* <div className='flex items-center justify-center gap-6 mb-[1rem]'>
                                    <div> <FaFacebook className='text-[25px] sm:text-[30px] md:text-[40px] text-[#1877F2]'/> </div>
                                    <div> <FcGoogle className='text-[25px] sm:text-[30px] md:text-[40px]'/> </div>
                                    <div> <FaLinkedin className='text-[25px] sm:text-[30px] md:text-[40px] text-[#0A66C2] rounded-[2rem] md:rounded-none'/> </div>
                            </div>*/}


                            {/* don't have an account sign up here */}
                            <div className=''>
                                    <h5 className='text-sm xs:text-[15px] sm:text-lg lg:text-[22px] text-center'> 
                                        <span className='font-SulphurPoint font-bold text-[#989898]'>Don’t have an account? </span> 
                                        <Link to = {signUpUrl} className='font-Inter font-medium text-[#A21D3C]'>
                                            Sign Up.
                                        </Link> 
                                    </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        </div> 
    )
}

export default Login