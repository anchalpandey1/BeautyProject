import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useSelector , useDispatch } from 'react-redux';
import axios from 'axios';
import { getAuthentication, removeAuthentication } from '../../features/user/authSlice';
// import { useHistory } from "react-router-dom";


// diamond icon
import { IoDiamondOutline } from "react-icons/io5";
// heart icon
import { FaRegHeart } from "react-icons/fa";
// person icon
import { BsPerson } from "react-icons/bs";
// serch icon
import { CiSearch } from "react-icons/ci";
// shopping bage
import { FiShoppingBag } from "react-icons/fi";
// location icon
import { IoLocationOutline } from "react-icons/io5";
// hamburgerMenu icon
import { RxHamburgerMenu } from "react-icons/rx";
// filter icon
import filterIcon from  '../../assets/Image/filter_icon.png'
// left arrow icon
import { IoArrowBack } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
// import { userlogout } from '../../features/user/authSlice';
import { Tuple } from '@reduxjs/toolkit';

const Heading = ({landingPage , pageNavigation , backbutton , AllArtist}) => {
    
    console.log(landingPage , pageNavigation , AllArtist)
    // display weather user logged in or not (it return boolen true or false)
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)

    // this state is for, show drop down icons or not
    const [showDropDown , setShowDropDown ] = useState(false)

    // let history = useHistory();
    // show login options
    const [showLoginOption , setShowLoginOption ] = useState(false);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const jsonString = localStorage.getItem('authData')
    // const authDatas = JSON.parse(jsonString);


    // console.log(localStorage.getItem('authData'))
// 

    // const userIsAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // const userstoken = useSelector((state) => state.auth.authToken);
    // const newUserToken = {token: userstoken}
    // console.log(userstoken)
    // console.log(userIsAuthenticated)

    // navigate to login page
    const redirectLogin = (value)=>{
        navigate(`/${value}/login`, {replace : true})
        // history.push(`/${value}/login`);
        console.log('click on which page', value)
        // navigate('/artist/login',{replace : true})
    }    // console.log('user token is ', userstoken , typeof(userstoken))

    // navigate to user profile
    const redirectProfile = () => {
        navigate('/userProfile', {replace : true})
    }
    // const myCookieValue = getCookie("token");
    // console.log(myCookieValue);

    // when click on hambuger icon
    // when click on logout icon
    const userLogout = ()=> {
        
    }


    const  sideMenuBarToggle= ()=>{
        dispatch(toggleSideMenuBar(!showsideMenu))
    }
    
    const handleWindowClick = ()=>{
        console.log('handle onclick will run further', showLoginOption)
        if(showLoginOption){
            setShowLoginOption(false)
        }
    }

    // Attach event listener when the component mounts
    useEffect(() => {
        window.addEventListener('click', handleWindowClick);

        // Cleanup event listener when the component unmounts
        // return () => {
        // window.removeEventListener('click', handleWindowClick);
        // };
    }, []);

    // when user click on the profile icon
    const navigateToProfile = ()=>{

        setShowLoginOption(true)

        // if(userIsAuthenticated){
        //     // console.log('user is authenticete')
        //     navigate('/userProfile', { replace: true });
        // }else{
        //     // console.log('user is not authencative')
        //     navigate('/login', { replace: true });
        // }
    }
    const logoutapiURL = 'https://glamgo.onrender.com/api/v1/auth/logout';


    const UserLogout = async()=>{
            try {
                const response = await axios.get(logoutapiURL , {withCredentials:true});
                // Handle successful response here
                console.log('Data received:', response.data);

                // it will clear user authentication data from local stroage 
                dispatch(removeAuthentication())
            } catch (error) {
                // Handle error here
                if (error.response) {
                // The request was made, but the server responded with an error status code
                console.error('Error response from server:', error.response.status, error.response.data);
                } else if (error.request) {
                // The request was made, but no response was received
                console.error('No response received from server:', error.request);
                } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
                }
            }



            // .then(response => {
            //     // Handle successful response here
            //     console.log('Data received:', response.data);
            // })
            // .catch(error => {
            //     // Handle error here
            //     if (error.response) {
            //     // The request was made, but the server responded with an error status code
            //     console.error('Error response from server:', error.response.status, error.response.data);
            //     } else if (error.request) {
            //     // The request was made, but no response was received
            //     console.error('No response received from server:', error.request);
            //     } else {
            //     // Something happened in setting up the request that triggered an Error
            //     console.error('Error setting up the request:', error.message);
            //     }
            // });
    }

    const LogoutUser = async()=>{
        // axios.get('https://glamgo-backend.onrender.com/api/v1/auth/logout')
        //     .then(response => {
        //         // Handle the response data
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         // Handle errors
        //         console.error('There was a problem with the Axios request:', error);
        //     });
        // Assuming you have the token stored in a cookie named 'token'

// Fetch request with the token included in the request automatically through cookies
        // fetch('https://glamgo-backend.onrender.com/api/v1/auth/logout', {
        //     method: 'GET',
        //     credentials: 'include', // This ensures that cookies are included in the request
        // })
        //     .then(response => {
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     return response.json();
        //     })
        //     .then(data => {
        //     // Handle the response data
        //     console.log(data);
        //     })
        //     .catch(error => {
        //     // Handle errors
        //     console.error('There was a problem with the fetch operation:', error);
        //     });
        
        // axios.get('https://glamgo-backend.onrender.com/api/v1/auth/logout', {
        //     withCredentials: true, // This ensures that cookies are included in the request
        //     })
        //         .then(response => {
        //         // Handle the response data
        //         console.log(response.data);
        //         })
        //         .catch(error => {
        //         // Handle errors
        //         console.error('There was a problem with the Axios request:', error);
        //         });
        // axios.post('https://glamgo-backend.onrender.com/api/v1/auth/logout')
        //     .then(response => {
        //         // Handle the response data
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         // Handle errors
        //         console.error('There was a problem with the Axios request:', error);
        //     });

        // try {
        //         const response = await axios.get(
        //         'https://glamgo-backend.onrender.com/api/v1/auth/logout', {
        //                 method: 'GET',
        //                 credentials: 'include', // This ensures that cookies are included in the request
        //             })
        //         // {
        //         //     header: {
        //         //     Authorization: `Bearer ${newUserToken}`,
        //         //     },
        //         // }
        //         // );
        //         console.log(response.data);
        //         console.log('we reacted out yeeehiee')
        //         return response.data;
        //     } catch (error) {
        //         console.error('Logout Error:', error);
        //         // throw error;
        //         console.log(error.response.data)
        //     }
        try {
            const response = await axios.get('https://glamgo.onrender.com/api/v1/auth/logout'
            , {
                withCredentials: true,
            }
            );
            console.log(response.data)
            return response.data;
            
        } catch (error) {
            throw error;
        }
        // try {
        //     const response = await axios.get('https://glamgo-backend.onrender.com/api/v1/auth/logout'
        //     , {
        //         // headers: {
        //         //     Authorization : `Bearer ${userstoken}`,
        //         // },
        //         // headers: {
        //             // withCredentials: true,
        //         //     Authorization: `Bearer ${userstoken}`
        //         // }
        //         // withCredentials: true,
        //     }
        //     );
        //     console.log(response.data)
        //     return response.data;
            
        // } catch (error) {
        //     throw error;
        // }
        // axios.get('https://glamgo-backend.onrender.com/api/v1/auth/logout', {
        //     params: {
        //         ID: 12345
        //         }
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
    }

    const expirationTime = useSelector((state) => state.auth.expirationTime);
    
    // /// code for token expirecation
    useEffect(() => {
        const clearNameTimeout = setTimeout(() => {
            dispatch(removeAuthentication())
        }, expirationTime - Date.now());
    
        return () => clearTimeout(clearNameTimeout);
    }, [dispatch, expirationTime]);
    
    
    return (
        <div 
        className='md:h-[94px] shadow-destopHeading md:mb-[2rem]'
        >
        {/* visible for large screen */}
        <div className='w-[95%] xl:w-[90%] h-full mx-auto hidden md:flex items-center justify-between  gap-x-[2rem]'>
            
            {/* location bar */}
            {
                backbutton ?
                <div>
                        <div 
                        onClick={() => navigate(-1)}
                        className='w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] bg-[#AD3853]s bg-[#E5CAD0] cursor-pointer
                            rounded-full flex items-center justify-center
                        '>
                            <IoArrowBack className='text-xl lg:text-[28px] text-[#F3EFEF]s text-[#A21D3C]'/>
                        </div>
                    </div>
                    : 
                    null
            }
            { landingPage ?
                <div className={`${backbutton ? 'bg-[#E5CAD0]' : 'bg-[#AD3853]'}  rounded-[34px] shadow-SearchBar
                w-[200px] lg:w-[291px] h-[50px] lg:h-[60px] 
                            flex
                        `}>
                            
                            <div className='flex items-center gap-3 px-3  text-xl lg:text-2xl'>
                            <IoLocationOutline className={`${backbutton ? 'text-[#A21D3C]' : 'text-[#F3EFEF]'} `}/>
                            <input 
                            type="text" placeholder='Location' 
                            className={`${backbutton ? 'bg-[#E5CAD0] text-[#A21D3C] placeholder-[#A21D3C]' : 'bg-[#AD3853] text-[#F3EFEF] placeholder-[#F3EFEF]'}  w-[100px] font-SulphurPoint font-normal outline-none`} />
                            </div>
                </div>
                : null
            }

            {/* search bar */}
            {
                landingPage ? 
            <div className={` ${backbutton ? 'bg-[#E5CAD0]' : 'bg-[#AD3853]'} rounded-[34px] shadow-SearchBar
            w-[350px] h-[50px] overflow-hidden lg:w-[700px] lg:h-[60px]
                        flex
                    `}>
                        
                        <div className='flex items-center gap-3 px-3 text-xl lg:text-2xl'>
                        <CiSearch className={`${backbutton ? 'text-[#A21D3C]' : 'text-[#F3EFEF]'} `}/>
                        <input 
                        type="text" placeholder='Search...' 
                        className={` ${backbutton ? 'bg-[#E5CAD0] text-[#A21D3C] placeholder-[#A21D3C]' : 'bg-[#AD3853] text-[#F3EFEF] placeholder-[#F3EFEF]'} font-SulphurPoint font-normal outline-none`}/>
                        </div>
            </div>
            : null
            }
        
            

            {
                pageNavigation ? 
                
                <div className='flex items-center gap-x-[2rem]'>
                    <div>
                        <div 
                        onClick={() => navigate(-1)}
                        className='w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] bg-[#AD3853]s bg-[#E5CAD0] cursor-pointer
                            rounded-full flex items-center justify-center
                        '>
                            <IoArrowBack className='text-xl lg:text-[28px] text-[#F3EFEF]s text-[#A21D3C]'/>
                        </div>
                    </div>
                    <div className="space-x-1 flex items-center gap-x-2 borders border-black">
                        {pageNavigation.map((item, index) => (
                            <div key={index} className='inline-blocks'>
                            <Link to={item.pageURL} className='f borders border-green-900 font-SulphurPoint font-bold text-lg md:text-xl lg:text-[22px]'>{item.page}</Link>
                            {index < pageNavigation.length - 1 && <span className='borders border-red-800 font-bold  text-[#2D2D2D] text-xl pl-2'>&gt;</span>}
                            </div>
                        ))}
                    </div> 
                </div>
                
                :
                <div></div>
            }
            
            <div className='flex  items-center gap-x-4'>
                {/* heart icon  */}
                <div 
                // logout funcnlity 
                className='w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] bg-[#FFFFFF1F]s bg-[#E5CAD0]  cursor-pointer
                rounded-full flex items-center justify-center'
                >
                <FaRegHeart className='text-xl lg:text-[28px] text-[#F3EFEF]s text-[#A21D3C]'/>
                </div>

                {/* verticle line */}
                <div className="h-[25px] lg:h-[30px] border-l-2 border-[#F3EFEF]s border-[#A21D3C]"></div>

                {/* shopping bag */}
                <div 
                onClick={()=>(UserLogout())}
                className='w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] bg-[#FFFFFF1F]s bg-[#E5CAD0] cursor-pointer
                rounded-full flex items-center justify-center'
                >
                <FiShoppingBag className='text-xl lg:text-[28px] text-[#F3EFEF]s text-[#A21D3C]'/>
                </div>

                {/* verticle line */}
                <div className="h-[25px] lg:h-[30px] border-l-2 border-[#F3EFEF]s border-[#A21D3C] "></div>


                {/* login icon */}
                <div>

                <div 
                onMouseEnter={()=>{setShowDropDown(true)}}
                onMouseLeave={()=> {setShowDropDown(false)}}
                className='relatives'>
                    <div
                        className='w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] bg-[#FFFFFF1F]s bg-[#E5CAD0] cursor-pointer
                        rounded-full flex items-center justify-center
                        '>
                        <BsPerson className='text-xl lg:text-[28px] text-[#F3EFEF]s text-[#A21D3C]'/>
                    </div>
                    
                    <div className={`relative  w-full ${showDropDown ? 'visible': 'hidden'}`}>
                        {
                            isLoggedIn ?
                            <div className='absolute right-0 z-20 xl:right-auto xl:left-1/2 xl:-translate-x-1/2 top-0 font-Inter text-base lg:text-lg xl:text-xl rounded-lg overflow-hidden'>
                            
                            <div onClick={() => {redirectProfile()}} className='whitespace-nowrap py-1 lg:py-2 cursor-pointer text-[#F3EFEF] px-4 bg-[#FFFFFF1F] hover:text-[#040101b6] hover:bg-[#e7bebe]'>View Profile</div>
                    
                            
                            <div onClick={() => {UserLogout()}  } className='whitespace-nowrap py-1 lg:py-2 cursor-pointer text-[#F3EFEF] px-4 bg-[#FFFFFF1F] hover:text-[#040101b6] hover:bg-[#e7bebe]'>Logout</div>
                            
                        </div>

                            :
                            <div className='absolute right-0 z-20 xl:right-auto xl:left-1/2 xl:-translate-x-1/2 top-0 font-Inter text-base lg:text-lg xl:text-xl rounded-lg overflow-hidden'>
                            
                            <div onClick={() => {redirectLogin('artist')}} className='whitespace-nowrap py-1 lg:py-2 cursor-pointer text-[#F3EFEF] px-4 bg-[#FFFFFF1F] hover:text-[#040101b6] hover:bg-[#e7bebe]'>Join as an artist</div>
                    
                            
                            <div onClick={() => {redirectLogin('user')}} className='whitespace-nowrap py-1 lg:py-2 cursor-pointer text-[#F3EFEF] px-4 bg-[#FFFFFF1F] hover:text-[#040101b6] hover:bg-[#e7bebe]'>Join as a user</div>
                            
                        </div>
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
        

        {/* visible for small screen */}
        {/* at this time i disable this page {hidden }screen size */}
        <div className="bg-[#F3F3F3] w-[90%] mx-auto h-full md:hidden py-2">
            {/* text here */}
            <div className='font-SulphurPoint mt-[0.5rem]'>
                <p className='font-bold text-2xl text-[#000000]'>Hello</p>
                <p className='font-normal text-base text-[#989898]' >Welcome to Glamgo!</p>

                {/* search bar */}
                <div className='my-[1rem]  bg-[#F3F3F3]
                    w-[100%] overflow-hidden flex justify-between items-center'
                    >
                        
                    <div className='shadow-SearchBar flex items-center gap-2 w-[80%] px-2 text-xl h-[48px] rounded-xl bg-[#FFFFFF]'>
                        <CiSearch className='text-[#291f1f]'/>
                        <input 
                        type="text" placeholder='Search...' 
                        className='placeholder-[#989898] text-base w-[80%] text-[#989898] font-SulphurPoint font-normal outline-none bg-[#FFFFFF]' />
                    </div>

                    {/* icon */}
                    
                        <Link to="/filterMobileScreen" className='w-[48px] h-[48px] bg-[#A21D3C] rounded-xl flex justify-center items-center cursor-pointer'>
                        {/* < RxHamburgerMenu className='text-[#FFFFFF] text-2xl'/> */}
                        <img className='w-[24px] h-[24px]' src={filterIcon} alt="" />
                    </Link>
                    
            </div>
            </div>
        </div>
        </div>
    )
}

export default Heading
