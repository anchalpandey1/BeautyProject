
import React, { useState , useRef , useEffect  } from 'react';
import axios from 'axios';

// import Link and userNavigate from react-router-dom . so that we can navigate to the next page.
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import required images.
import logo from '../../assets/Image/Logo.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { userlogin ,  expireToken } from '../../features/user/authSlice';

import { toggleSideMenuBar } from '../../features/user/valueSlice';
import loginOTPMobileImage from '../../assets/Image/LoginOTPImage.png' 

import { useLocation } from 'react-router-dom';

// import react icons 
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { getAuthentication } from '../../features/user/authSlice';


import { useUserLoginOTPMutation } from '../../features/user/authAPISlice';
import { useArtistLoginOTPMutation } from '../../features/user/authAPISlice';


const LoginOTP = () => {
    const dispatch = useDispatch();
    const location = useLocation();


    const currentUrl = location.pathname;


    const [ artistLoginOTP ] = useArtistLoginOTPMutation();
    const [ userLoginOTP ] =  useUserLoginOTPMutation();


    // const expirationTime = useSelector((state) => state.auth.expirationTime);
    // console.log('your expiration time is',expirationTime)

    // get mobile number from session storage
    const enteredMobileNumber = sessionStorage.getItem('mobileNumber');

    // const navigateToNextPage = (accountType)=>{
    //     console.log(accountType)
    //     if (accountType === 'User'){
    //         navigate('/',{replace : true})
    //     }
    //     else if(accountType === 'Artist'){
    //         navigate("/artistDeshboard",{replace : true})
    //     }
    //     else{
    //         navigate('*',{replace : true})
    //     }
    // }

    const checkResponse = (response)=>{
        console.log(response.data)
        if(response.data.success === true){
            // it will add user authentication data in local stroage
            dispatch(getAuthentication(response.data.data.accountType))

            if(currentUrl === '/user/loginOTP'){
                navigate('/',{replace : true})
            }
            else if(currentUrl === '/artist/loginOTP'){
                navigate("/admin/Dashboard",{replace : true})
            }
        }else{
            console.log(response.data.message);
            navigate('/login', { replace: true });
        }
    }



    // /// code for token expirecation
    // useEffect(() => {
    //     const clearNameTimeout = setTimeout(() => {
    //         dispatch(expireToken());
    //     }, expirationTime - Date.now());
    
    //     return () => clearTimeout(clearNameTimeout);
    // }, [dispatch, expirationTime]);
    
    


    // store token in local storage
    const [stddata, setssData] = useState('unavailabe');

    // const addTokens = (token)=>{
    //     // dispatch(userlogin(token))
    //     dispatch(toggleSideMenuBar(true))
    // }


    // useEffect(()=>{
    //     // localStorage.setItem('token', JSON.stringify(data))
    //     localStorage.setItem('demo4', JSON.stringify(stddata))
    // },[stddata])


    // complete user details
    // const userDetails = useSelector((state) => state.user)

    // stored otp and mobile number of user.
    // const otp= userDetails.userLogin.otp;
    // console.log(otp)


    const navigate = useNavigate();
    // const mobileNumber='1234523451'
    // const otp='370865'
    const [storedUserMobileNumber , setStoredUserMobileNumber] = useState('');

    // Function to retrieve the user's name from session storage
    useEffect(()=>{
        // Check if session storage is supported
        if (typeof sessionStorage !== 'undefined') {
            const userMobileNumber = sessionStorage.getItem('mobileNumber');
            setStoredUserMobileNumber(userMobileNumber)
            console.log(userMobileNumber)
            // alert(!userMobileNumber ? 'User mobile number not found in session storage.': null);
            } else {
            alert('Session storage is not supported in this browser.');
            }
    },[])



    const [otps, setOtp] = useState(['', '', '', '', '', '']);
    const otpBoxes = useRef([]);

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
    
    const mobileNumber = sessionStorage.getItem("mobileNumber");
    const resendOTP =async ()=>{
        // setShowAlertMessage(true);
        try {
            const formdata={
                mobileNumber: mobileNumber
            }
            const response= await axios.post('https://glamgo-backend.onrender.com/api/v1/auth/login',formdata)
            console.log(response.data)
            
            const message = response.data.message
            // setAlertMessage(message);
            
            // const userdata = response.data;

            // it will store user details
            // dispatch(addUserLoginDetails(userdata))


            // it will store user details

            // store mobile number in session storage.
            // storeNumberInSessionStorage();
            


            // navigate('/loginOTP',{replace : true})
            // navigate to the signup page
            // navigate('/loginOTP',{replace : true})
        } catch (error) {
            const commonErrorMessage = "An unexpected error occurred. Please try again later";
            // setShowError(true)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                // alert(error.response.data)
                
                const message = error.response.data.message;
                // setAlertMessage(message)
                alert(message)
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

    const loginvery=async()=>{
        try{
            const enteredOTP = otps.join('');
            const formData = {
                contactNumber: enteredMobileNumber,
                otp: enteredOTP,
            }
            console.log('current url is', currentUrl)

            if(currentUrl === '/user/loginOTP'){
                const response = await userLoginOTP(formData)
                checkResponse(response)
            }
            else if(currentUrl === '/artist/loginOTP'){
                const response = await artistLoginOTP(formData)
                checkResponse(response)
            }

        }catch(error){
            console.log(error)
        }
        

        // try {
        //     const concatenatedOTP = otps.join('');
        //     const formData = {
        //         // contactNumber: 9546402716,
        //         contactNumber: enteredMobileNumber,
        //         // otp: concatenatedOTP,
        //         otp: enteredOTP,
        //     };
        //     const response = await axios.post("https://glamgo.onrender.com/api/v1/auth/verifyLoginOtp",formData,{withCredentials:true})
        //     console.log(response.data)
        
        //     if (response.data.success) {
        //         console.log(response.data.message);
        //         dispatch(getAuthentication(response.data.data.accountType))
        //         navigateToNextPage(response.data.data.accountType);
        //     } else {
        //         console.log(response.data.message);
        //         navigate('/login', { replace: true });
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

        // try {
        //     const loginOTPdata = {
        //         // mobileNumber : storedUserMobileNumber,
        //         storedUserMobileNumber,
                
        //         otp : enteredOTP
        //     }
        //     const response = await axios.post('https://glamgo.onrender.com/api/v1/auth/verifyLoginOtp',loginOTPdata)
        //     console.log(response.data.token)
        //     const userToken = response.data.token;
        //     dispatch(userlogin(userToken))
        //     alert(response.data.message)
        //     // navigate("/landingPage",{replace : true})


        // } catch (error) {
        //     if (error.response) {
        //         // The request was made and the server responded with a status code
        //         // that falls out of the range of 2xx
        //         console.log(error.response.data);
        //         alert(error.response.data.error)
        //         const message = error.response.data;
        //         console.log(error.response.status);
        //         // console.log(error.response.headers);
        //     }
        //     // else if (error.request) {
        //     //     // The request was made but no response was received
        //     //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //     //     // http.ClientRequest in node.js
        //     //     console.log(error.request);
        //     // } 
        //     else {
        //         // Something happened in setting up the request that triggered an Error
        //         console.log('Error', error.message);
        //         alert("An unexpected error occurred. Please try again later")
        //         // setAlertMessage(commonErrorMessage)
        //     }
        //     console.log(error.config);
        //     // console.log(error);

        //     // console.log(error.response.data.message)
        //     // alert(error.response.data.message)
        // }
        // navigate('/service',{replace : true})
        // navigate("/landingPage",{replace : true})
    }


    return (
        // for border and background image for website.
        <div className='w-full min-h-screen bg-LoginOTPImage bg-no-repeat bg-cover bg-center
        flex md:block flex-col
        '>
        <div className='md:hidden' >
            <img className='w-full h-fit' src={loginOTPMobileImage}  alt="signup image" />
        </div>
        <div className='grow relative md:static'>
            
            {/* content box */}
            <div className={`min-h-full md:w-fits bg-[#F3EFEF] absolute md:w-[29rem]
                    top-[-12%] right-0 w-full md:right-1/2 md:top-[55%] md:translate-x-1/2 md:-translate-y-1/2 
                    lg:right-[10%] lg:translate-x-0 bottom-0 md:min-h-0 md:h-fit
                    rounded-t-[3.6rem] md:rounded-[24px]
                    md:animate-slide-left-to-right
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
                            <p className='font-normal text-base lg:text-lg text-[#989898]'>Login to your account</p>
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
                                onClick={()=> loginvery()}
                                className='bg-[#A21D3C] py-3 md:py-[14px] rounded-[12px] shadow-GetOTPBtn'>
                                    
                                    <h3 className='font-Roboto font-bold text-base md:text-lg text-[#FFFFFF] text-center'>Submit</h3>
                            </div>

                            {/* resend OTP box */}
                            <div 
                            onClick={()=>{resendOTP()}}
                            className= 'pt-3 font-SulphurPoint font-bold text-center'>
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
                                    <div> <FaFacebook className='text-[25px] sm:text-[30px] md:text-[40px] text-[#1877F2]'/> </div>
                                    <div> <FcGoogle className='text-[25px] sm:text-[30px] md:text-[40px]'/> </div>
                                    <div> <FaLinkedin className='text-[25px] sm:text-[30px] md:text-[40px] text-[#0A66C2] rounded-[2rem] md:rounded-none'/> </div>
                            </div>*/}


                            {/* don't have an account sign up here */}
                            <div className=''>
                                    <h5 className='text-sm xs:text-[15px] sm:text-lg lg:text-[22px] text-center'> 
                                        <span className='font-SulphurPoint font-bold text-[#989898]'>Don’t have an account? </span> 
                                        <Link to = '/login' className='font-Inter font-medium text-[#A21D3C]'>
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

export default LoginOTP
