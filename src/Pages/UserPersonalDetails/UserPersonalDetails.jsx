import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import EditUserDetails from '../../components/EditUserDetails/EditUserDetails'

import userBannerImage from '../../assets/Image/userBannerImage.png';
import userImage from '../../assets/Image/userProfileImage.png';

import { Link } from 'react-router-dom';

//  mail
import { IoMailOutline } from "react-icons/io5";

// phone
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

// building 
import { LuBuilding2 } from "react-icons/lu";

// shopping bage
import { FiShoppingBag } from "react-icons/fi";
// left arrow icon
import { IoArrowBack } from "react-icons/io5";
// edit icon
import { VscEdit } from "react-icons/vsc";
// person icon
import { BsPerson } from "react-icons/bs";
// edit icon for destop screen
import { FiEdit } from "react-icons/fi";

import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';
import axios from 'axios';

import { useGetUserProfileQuery } from '../../features/user/userSlice';

const UserPersonalDetails = () => {
    // get user Address data form rtk query.
    const {data: userProfileInfo , error , isLoading} = useGetUserProfileQuery();

    if(userProfileInfo){
        console.log(userProfileInfo.profile.image)
    }



    const [showMyModel , setShowMyMobel] = useState(false)

    const handleOnClose = () =>{
        console.log('your closed file will run here')
        setShowMyMobel(false)
        document.body.style.overflow = 'auto';
    }

    const showModelBox = ()=>{
        setShowMyMobel(true)
        document.body.style.overflow = 'hidden';
    }



    const [showProfile , setShowProfile] = useState('userDetails')


    const headerData = [
        {page : 'My Profile', pageURL : '/userProfile'},
        {page : 'Personal Details ', pageURL : '/userPersonalInfo'}
    ]

    return (
        <div className='bg-[#F3EFEF]  min-h-screen'>
            <Heading  pageNavigation={headerData} />
            <div className='shadow-ArtistNavbar md:hidden  h-[3rem] sm:h-[4rem]'>
                <div className='w-[87%] mx-auto flex justify-between items-center text-[#2D2D2D] h-full'>
                    <Link to='/userProfile'>
                        <IoArrowBack className='text-2xl sm:text-[28px]'/>
                    </Link>
                    <h3 className='text-base text-[#504949] sm:text-lg font-SulphurPoint font-bold'>Personal Details</h3>
                    <div className='vis invisible'>
                        <FiShoppingBag className='text-2xl sm:text-[28px]'/>
                    </div>
                </div>
            </div>

            {isLoading && (<div className='text-4xl text-[#A21D3C] text-center'>
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
                </div>)
            }
            {userProfileInfo && (
            <>
            
            <div className='md:w-[80%] lg:w-[75%] md:mx-auto max-w-[950px] md:bg-[#FFFFFF] md:rounded-[24px] overflow-hidden'>
                <div className='relative h-[140px] bg-center bg-cover md:h-[180px] w-full bg-UserProfileBannerImageMobile md:bg-UserProfileBannerImageDesktop md:rounded-[24px]'>
                    
                    <div className='w-[120px] h-[120px] md:flex md:h-full absolute md:static bottom-0 translate-y-1/2 md:translate-y-0 z-20 left-1/2 -translate-x-1/2 md:-translate-x-0'>
                        <div className='relative md:pl-[1rem]s md:pl-[0.5rem] lg:pl-[1.5rem]s md:flex items-center gap-x-6'>

                        {/* for user image */}
                        {userProfileInfo.profile.image ? 
                            <img 
                                className='h-[120px] w-[120px] shrink-0 shadow-userImage rounded-[6rem]'  
                                src={`https://glamgo.onrender.com`+ userProfileInfo.profile.image}
                                alt="" />

                                :
                            <img 
                                className='h-[120px] w-[120px] shrink-0 shadow-userImage rounded-[6rem]'  
                                src={userImage}  alt="" />
                        }
                            <h1 className='font-SulphurPoint mt-3 font-bold text-[#A21D3C] md:text-[#F3EFEF] text-2xl text-center w-full whitespace-nowrap'>
                                { userProfileInfo.profile.fullname ? 
                                userProfileInfo.profile.fullname :
                                userProfileInfo.data.username ?
                                userProfileInfo.data.username :
                                'not found'
                                }
                            </h1>
                        </div>
                    </div>
                </div>

            
            <div className='font-SulphurPoint flex flex-col items-center mt-[7.5rem] md:mt-0 md:items-start md:p-4'>
                    
                    

                    <div className='flex md:min-h-[17rem] lg:min-h-[20rem] flex-col justify-between  md:p-2 lg:p-4 md:w-full'>
                            <div className='w-fit flex flex-col items-start gap-3 md:gap-5 lg:gap-8'>

                            {/* email address */}
                            <div className='flex items-center gap-x-4'>
                                <div
                                >
                                    <IoMailOutline className='text-2xl md:text-[26px] lg:text-[30px] text-[#A21D3C]'/>
                                </div>
                                <h4 className='font-normal text-lg md:text-xl lg:text-[22px] text-[#504949]'>
                                {
                                userProfileInfo.profile.email ? 
                                userProfileInfo.profile.email : 
                                'null'
                                }
                                </h4 >
                            </div>
                            {/* mobile number */}
                            <div className='flex items-center gap-x-4'>
                                <div>
                                    <HiMiniDevicePhoneMobile className='text-2xl md:text-[26px] lg:text-[30px] text-[#A21D3C]'/>
                                </div>
                                <h4 className='font-normal text-lg md:text-xl lg:text-[22px] text-[#504949]'>
                                    {
                                    userProfileInfo.data.contactNumber ?
                                    userProfileInfo.data.contactNumber:
                                    null
                                }
                                </h4>
                            </div>

                            {/* address */}
                            <div className='flex items-center gap-x-4'>
                                <div>
                                    <LuBuilding2 className='text-2xl md:text-[26px] lg:text-[30px] text-[#A21D3C]'/>
                                </div>
                                <h4 className='font-normal text-lg md:text-xl lg:text-[22px] text-[#504949]'>
                                    {
                                    userProfileInfo.profile.city ?
                                    userProfileInfo.profile.city:
                                    'null'
                                }
                                </h4>
                            </div>
                        </div>

                        

                        {/* edit profile button for desptop view only */}
                        <div 
                        onClick={()=>{showModelBox()}}
                        className='hidden w-full md:flex items-center justify-center gap-x-2 h-[3rem] lg:h-[3.5rem] bg-[#A21D3C] text-[#F3EFEF] rounded-xl border border-[#989898] shadow-editProfileButton cursor-pointer'>
                            <div>
                                <FiEdit className='text-lg lg:text-xl xl:text-[22px]'/>
                            </div>
                            <h2 className='font-SulphurPoint font-bold text-lg lg:text-xl xl:text-[22px]'>Edit Profile</h2>
                        </div>
                    </div>
                </div>
            </div>


            {/* edit profile and save changes button */}
            <div 
            onClick={()=>{setShowMyMobel(true)}}
            className='md:hidden fixed bottom-0 w-full h-[75px] bg-[#A21D3C] bg-[#b82f4f]s flex items-center justify-center'>               
                <p className='font-Roboto font-bold cursor-pointer text-lg text-[#F3EFEF] text-whites'>
                Edit Profile
                    
                </p> 
            </div>

            </>
            )
            }

            {/* my models */}
            <div className='hiddenss md:blockss'>
                <EditUserDetails 
                userprofileInfo = {userProfileInfo}
                onClose={handleOnClose} visible={showMyModel}/>
                
            </div>
        </div>




    )
}


export default UserPersonalDetails
