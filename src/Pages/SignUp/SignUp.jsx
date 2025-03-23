import React, { useState } from 'react';

// import Link and userNavigate from react-router-dom . so that we can navigate to the next page.
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// import required images.
import logo from '../../assets/Image/Logo.png'
import signUpMobileImage from '../../assets/Image/SignupImage.png' 

import { useArtistSignupMutation } from '../../features/user/authAPISlice';
import { useUserSignupMutation } from '../../features/user/authAPISlice';

// import { useDispatch, useSelector } from 'react-redux';
// import { addUserSignupDetails } from '../../features/user/userSlice';


// import react icons 
import { CiMobile3 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';

const SignUp = () => {
    const location = useLocation();

    const [ userSignup ] =  useUserSignupMutation();
    const [ artistSignup ] = useArtistSignupMutation();


    const currentUrl = location.pathname;
    const singUpOTPUrl = currentUrl.replace("signup", "signupOTP");
    const loginUrl = currentUrl.replace("signup", "login");
    console.log(location)
    const [showError, setShowError] = useState(false)
    const [alertMessage, setAlertMessage] = useState('');

    // const dispatch = useDispatch();
    const navigate = useNavigate();


    const checkResponse = (response)=>{
        console.log(response.data)
        if(response.data.success === true){
            // store mobile number in session storage.
            storeNumberInSessionStorage();
            if(currentUrl === '/user/signup'){
                navigate('/user/signupOTP',{replace : true})
            }
            else if(currentUrl === '/artist/signup'){
                navigate('/artist/signupOTP',{replace : true})
            }
        }
    }


    // assign useNavigate
    // const navigate = useNavigate();
    // const navigate = useNavigate(); 

    // store user name.
    const [userName, setUserName] = useState('')
    // store user mobile number
    const [mobileNumber, setMobileNumber] = useState()

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


    // const userData = JSON.parse(localStorage.getItem('token'));
    const userArray = ["user",25]
    const userData = localStorage.setItem('user', JSON.stringify(userArray));
    console.log(userData);
    console.log('hello workd')

    // when user click on get OTP
    const getotp = async () => {
        try {
            const formData = {
                username : userName,
                contactNumber : mobileNumber
            }
            console.log('your entered mobile number is', mobileNumber)
            console.log('current url is', currentUrl)
            if(currentUrl === '/user/signup'){
                const response = await userSignup(formData)
                checkResponse(response)
            }
            else if(currentUrl === '/artist/signup'){
                const response = await artistSignup(formData)
                checkResponse(response)
            }
            // const response = await axios.post("https://glamgo.onrender.com/api/v1/auth/signup", formData)
            // console.log(response.data)
            // storeNumberInSessionStorage();

            // navigate(singUpOTPUrl, { replace: true })
        } catch (error) {
            const commonErrorMessage = "An unexpected error occurred. Please try again later";
            setShowError(true)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                // alert(error.response.data)
                
                const message = error.response.data.message;
                setAlertMessage(message)
                console.log(message)
                console.log(error.response.status);
                // console.log(error.response.headers);
            }
            // else if (error.request) {
            //     // The request was made but no response was received
            //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //     // http.ClientRequest in node.js
            //     console.log(error.request);
            // } 
            else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                // alert("An unexpected error occurred. Please try again later")
                setAlertMessage("An unexpected error occurred. Please try again later")
                // setAlertMessage(commonErrorMessage)
            }
            console.log(error.config);
            // console.log(error);

            // console.log(error.response.data.message)
            // alert(error.response.data.message)
        }
    }

    // when user type name.
    const handleUserNameChange = (e) => {
        // print user name
        // console.log(e.target.value)
        setUserName(e.target.value)
    }

    // when user type mobile number.
    const handleMobileNoChange = (e) => {
        // print your enter number
        // console.log(e.target.value)
        setMobileNumber(e.target.value)
    }
    return (
                // for border and background image for website.
                <div className='w-full min-h-screen bg-SignupImage bg-no-repeat bg-cover bg-center
                flex md:block flex-col relative
                '>
                    {
                        showError ? 
                        <div className="w- z-40 absolute w-[90%] md:w-[50%] p-4 mb-4 left-1/2 top-4 text-center  -translate-x-1/2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <h1 className='text-sm md:text-base lg:text-xl'>{alertMessage}</h1>
                        </div>
                    : null
                    }
                <div className='md:hidden' >
                    <img className='w-full h-fit' src={signUpMobileImage}  alt="signup image" />
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
        
        
        
                            
                            <div className='h-full w-[80%] md:w-[100%] mx-auto'>
                                <div className='font-SulphurPoint text-center mb-[1.3rem]'>
                                    <h3 className='font-bold text-[28px] md:text-3xl lg:text-4xl text-[#2D2D2D]'>Sign Up</h3>
                                    <p className='font-normal text-base lg:text-lg text-[#989898]'>Create a new account</p>
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
        
                                    {/* user name */}
                                    <div className='mb-[1rem] border-[1px] border-[#989898] bg-[#F3EFEF] rounded-[12px] flex items-center px-2 py-2 md:py-3 gap-3 shadow-MobileNoBox'>
        
                                        {/* user icon */}
                                        <span> 
                                            <CiUser className='text-2xl text-[#989898]'/> 
                                        </span>
                                        {/* enter user name input section */}
                                        <input 
                                        type="text" 
                                        value={userName}
                                        onChange={handleUserNameChange}
                                        className='font-SulphurPoint font-bold text-lg md:text-xl lg:text-[22px] text-[#989898] bg-[#F3EFEF] outline-none
                                        '
                                        placeholder='Username'
                                        />
        
                                    </div>
        
        
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
                                    {/* <div className='my-[1.2rem] flex items-center justify-center'>
                                            
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
                                                <span className='font-SulphurPoint font-bold text-[#989898]'>Already have an account? </span> 
                                                <Link to = {loginUrl} className='font-Inter font-medium text-[#A21D3C]'>
                                                    Sign in..
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

export default SignUp

