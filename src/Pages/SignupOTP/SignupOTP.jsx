import React, { useState , useRef, useEffect } from 'react';
import axios from 'axios';

// import Link and userNavigate from react-router-dom . so that we can navigate to the next page.
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import required images.
import logo from '../../assets/Image/Logo.png'

import { useSelector } from 'react-redux';

import signUpOTPMobileImage from '../../assets/Image/SignupOTPImage.png' 

import { useUserSignupOTPMutation } from '../../features/user/authAPISlice';
import { useArtistSignupOTPMutation } from '../../features/user/authAPISlice';


import { useLocation } from 'react-router-dom';


// import react icons 
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

const SignupOTP = () => {
    // complete user details
    const userDetails = useSelector((state) => state.user)

    const location = useLocation();


    const currentUrl = location.pathname;


    const [ artistSignupOTP ] = useArtistSignupOTPMutation();
    const [ userSignupOTP ] =  useUserSignupOTPMutation();



    const checkResponse = (response)=>{
        console.log(response.data)
        if(response.data.success === true){
            // it will add user authentication data in local stroage
            dispatch(getAuthentication(response.data.data.accountType))

            if(currentUrl === '/user/signupOTP'){
                navigate('/',{replace : true})
            }
            else if(currentUrl === '/artist/signupOTP'){
                navigate("/artistDeshboard",{replace : true})
            }
        }else{
            console.log(response.data.message);
            navigate('/login', { replace: true });
        }
    }

    // stored otp and mobile number of user.
    // const otp= userDetails.userSignup.otp;
    // const mobileNumber= userDetails.userSignup.contactNumber

    // console.log(otp, mobileNumber)

    const [otps, setOtp] = useState(['', '', '', '', '', '']);
    // const [enteredOTP , setEnteredOTP] = useState('');
    const otpBoxes = useRef([]);

    const [storedUserMobileNumber , setStoredUserMobileNumber] = useState('');

    // Function to retrieve the user's name from session storage
    useEffect(()=>{
        // Check if session storage is supported
        if (typeof sessionStorage !== 'undefined') {
            const userMobileNumber = sessionStorage.getItem('mobileNumber');
            setStoredUserMobileNumber(userMobileNumber)
            console.log('mobile number is', userMobileNumber)
            // console.log(!userMobileNumber)
            // alert(!userMobileNumber ? 'User mobile number not found in session storage.': null);
            } else {
            alert('Session storage is not supported in this browser.');
            }
    },[])
    

    const handleInputChange = (index, value) => {
    if (isNaN(value) || value.length > 1) {
        return; // Allow only single numeric input
    }

    const newOtp = [...otps];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value !== '' && index < otps.length - 1) {
        otpBoxes.current[index + 1].focus();
    }
    };

    const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && otps[index] === '') {
        otpBoxes.current[index - 1].focus();
    }
    };




    // const otp='759012';
    // const mobileNumber='1234523451'

    const veryfy = async() => {

        console.log(otps, otpBoxes)
        const enteredOTP = parseInt(otps.join(''), 10);

        try{
            const formData = {
                contactNumber: enteredMobileNumber,
                otp: enteredOTP,
            }
            console.log('current url is', currentUrl)

            if(currentUrl === '/user/signupOTP'){
                const response = await userLoginOTP(formData)
                checkResponse(response)
            }
            else if(currentUrl === '/artist/signupOTP'){
                const response = await artistLoginOTP(formData)
                checkResponse(response)
            }

        }catch(error){
            console.log(error)
        }



        // console.log('stored data in browser', storedUserMobileNumber, enteredOTP)
        // try {
        //     const signOTPdata = {
        //         contactNumber : storedUserMobileNumber,
        //         enteredOTP : enteredOTP
        //     }
        //     const response= await axios.post("https://glamgo.onrender.com/api/v1/auth/verifySignupOTP", signOTPdata)
        //     console.log(response)
        // } catch (error) {
        //     console.log(error)
        // }

    }



    return (
        // for border and background image for website.
        <div className='w-full min-h-screen bg-SignupOTPImage bg-no-repeat bg-cover bg-center
        flex md:block flex-col
        '>
        <div className='md:hidden' >
            <img className='w-full h-fit' src={signUpOTPMobileImage}  alt="signup image" />
        </div>
        <div className='grow relative md:static'>
            
            {/* content box */}
            <div className={`min-h-full md:w-fits bg-[#F3EFEF] absolute md:w-[29rem]
                    top-[-12%] left-0 w-full md:left-1/2 md:top-[55%] md:-translate-x-1/2 md:-translate-y-1/2 
                    lg:left-[10%] lg:translate-x-0 bottom-0 md:min-h-0 md:h-fit
                    rounded-t-[3.6rem] md:rounded-[24px]
                    md:animate-slide-right-to-left
        `}
                    >

                <div className='
                min-h-full pt-[4rem] md:pt-[5rem] pb-[2rem] relative md:px-[3rem] bg-[#F3EFEF] rounded-t-[3.6rem] md:rounded-[24px]
            '>
                                    <img 
                        className=' w-[210px] md:w-[260px] lg:w-[280px] rounded-[30px] absolute top-[-10%] md:top-[-10%] left-1/2 -translate-x-1/2 shadow-GlamgoLogo'
                            src={logo} alt="logoImage" />



                    
                    <div className='h-full w-[83%] md:w-[100%] mx-auto'>
                        <div className='font-SulphurPoint text-center mb-[1.3rem]'>
                            <h3 className='font-bold text-[28px] md:text-3xl lg:text-4xl text-[#2D2D2D]'>One Time Password</h3>
                            <p className='font-normal text-base lg:text-lg text-[#989898]'>Enter the OTP sent to your mobile number</p>
                        </div>


                        <div>

                            {/* here 'enter your otp' boxes */} 
                            <div className="flex justify-center gap-x-2 mt-[3rem] md:mt-[5rem] mb-[1.3rem]">
                                {otps.map((digit, index) => (
                                    <input
                                    key={index}
                                    ref={(ref) => (otpBoxes.current[index] = ref)}
                                    type="text"
                                    className='w-[35px] h-[35px] md:w-[55px] md:h-[55px] border-[1px] text-center border-[#989898] rounded-[12px] bg-[#F3EFEF]
                                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                                    text-sm md:text-xl font-Inter font-bold
                                    ' 
                                    value={digit}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    maxLength={1} // Limit to a single character
                                    />
                                ))}
                            </div>

                        
                            {/* get OTP box */}
                            <div 
                                onClick={()=> veryfy()}
                                className='bg-[#A21D3C] py-3 md:py-[14px] rounded-[12px] shadow-GetOTPBtn cursor-pointer'>
                                    
                                    <h3 className='font-Roboto font-bold text-base md:text-lg text-[#FFFFFF] text-center'>Submit</h3>
                            </div>

                            {/* resend OTP box */}
                            <div className= 'pt-3 font-SulphurPoint font-bold text-center cursor-pointer'>
                                <p className='text-base md:text-xl lg:text-2xl text-[#A21D3C]'>Resend OTP</p>
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
                            {/*<div className='flex items-center justify-center gap-6 mb-[1rem]'>
                                    <div> <FaFacebook className='text-[25px] sm:text-[30px] md:text-[40px] text-[#1877F2] cursor-pointer'/> </div>
                                    <div> <FcGoogle className='text-[25px] sm:text-[30px] md:text-[40px] cursor-pointer'/> </div>
                                    <div> <FaLinkedin className='text-[25px] sm:text-[30px] md:text-[40px] text-[#0A66C2] cursor-pointer rounded-[2rem] md:rounded-none'/> </div>
                            </div>*/}


                            {/* don't have an account sign up here */}
                            <div className=''>
                                    <h5 className='text-sm xs:text-[15px] sm:text-lg lg:text-[22px] text-center'> 
                                        <span className='font-SulphurPoint font-bold text-[#989898]'>Don’t have an account? </span> 
                                        <Link to = '/signup' className='font-Inter font-medium text-[#A21D3C]'>
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

export default SignupOTP;
