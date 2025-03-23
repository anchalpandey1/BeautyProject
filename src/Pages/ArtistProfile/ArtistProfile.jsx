import React, { useEffect, useState } from 'react'
import NavbarArtist from '../../components/Navbar/NavbarArtist'
import Sidebar from '../Sidebar/Sidebar'
import img1 from '../../assets/ArtistProfile/Ellipse 69.png'
import { AiOutlineMail } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { VscEdit } from "react-icons/vsc";

import axios from 'axios';

import { useGetArtistProfileQuery, useUpdateArtistProfileMutation } from '../../features/user/artistAPISlice';

// user dummy images
import artistDefaultImage from '../../assets/ProfileImage/DefaultProfileImagepng.png';

const ArtistProfile = () => {
    const {data: artistData, isError, isLoading, refetch } = useGetArtistProfileQuery();
    const handleFetchData = () => {
        // Trigger the API call when the button is clicked
        refetch();
    };

    
    const [ updateProfile ] = useUpdateArtistProfileMutation();


    const [image, setImage] = useState(null);

    if(artistData){
        console.log('artist data is', artistData)
    }


    // it will store update value of artist profile.
    const [artistProfileData , setArtistProfileData] = useState(
        {
            
            fullname : '',
                email : '',
                contactNumber : '',
                address : '',
            // pinCode : "",
            // city: "",
            // state: "",
                description : '',
                specialization :  '',
                experience : '',
                image : null
    });

    // we will use it later
    const [initialData, setInitialData] = useState(
        {
            fullname : '',
                email : '',
                contactNumber : '',
                address : '',
            // pinCode : "",
            // city: "",
            // state: "",
                description : '',
                specialization :  '',
                experience : '',
                image : null
    }
    )

    // weather edit profile mode is on or not
    const [editProfile, setEditProfile]  = useState(false);


    // Handle onChange for input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update the corresponding field in the state
        setArtistProfileData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    // when artist click on edit details
    const SetEditDetails = ()=>{
        console.log('detials eddited')

        setArtistProfileData({
                        fullname : artistData.profile.fullname || "",
                        email : artistData.profile.email || "",
                        contactNumber : artistData.data.contactNumber || "",
                        address : artistData.profile.address || "",
                        description : artistData.profile.description || "",
                        specialization : artistData.profile.description || "",
                        experience : artistData.profile.description || "",
                        image : artistData.profile.image,
        })
    }

    // handle image file change
    const handleFileChange = (event) => {
        setArtistProfileData({
            ...artistProfileData,
            image: event.target.files[0],
        });

        setImage(event.target.files[0]);


        // const reader = new FileReader();
    // reader.onload = () => {
    //   // Update the UI to show the preview
    //   // e.g., set the src attribute of an img tag
    //   // Example: setPreview(reader.result);
    // };
    // reader.readAsDataURL(file);
    // };

    };

    const submitChanges = async()=>{
    
        console.log('submit changes')
        console.log(artistProfileData)


        // we will use it later
        // const changedProfileData = Object.keys(initialData).reduce((changes, key) => {
        //     if(artistProfileData[key] !== artistData[key]){
        //         changes[key] = artistProfileData[key];
        //     }
        //     return changes;
        // })
        // console.log('changes data is', changedProfileData)
        // const changedAddress = Object.keys(artistProfileData).reduce((changes, key) => {
        //     if (newUserAddress[key] !== SelectedAddressData[key]) {
        //     changes[key] = newUserAddress[key];
        //     }
        //     return changes;
    
        // }, {});


    const formDataForUpload =  new FormData();
    formDataForUpload.append('fullname', artistProfileData.fullname);
    formDataForUpload.append('email', artistProfileData.email);
    formDataForUpload.append('image', artistProfileData.image);
    formDataForUpload.append('city', artistProfileData.city)
    formDataForUpload.append('address', artistProfileData.address);
    formDataForUpload.append('description', artistProfileData.description);
    formDataForUpload.append('specialization', artistProfileData.specialization);
    formDataForUpload.append('experience', artistProfileData.experience);



    // show the data
    // for (const pair of formDataForUpload.entries()) {
    //     console.log(pair[0], pair[1]);
    // }


    // api integration using axios
    // apiintegrate(formDataForUpload)
    // apiintegrate(artistProfileData)
    
    // API integrate using redux toolkit query
    await updateProfile(formDataForUpload)
    // await updateProfile(artistProfileData)

        setImage(null)
        setEditProfile(false)
        setcount(count-1)
    }

    const [count, setcount] = useState(1)

    const apiintegrate = async(newdata)=>{
        await axios.put('https://glamgo.onrender.com/api/v1/artist/updateProfile', newdata , {withCredentials:true}, {
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then(response => {
                console.log('Update successful!');
                console.log('Response:', response.data);
            })

            .catch(error => {
                console.error('Update failed:', error.message);
            });
    }



    const profileEdit = ()=>{
        setcount(count+1);
        // setEditProfile(true)

        SetEditDetails();


    }

    const backToProfile = ()=>{
        setcount(count -1);
        setImage(null)
    }
    return (
        <>
            <NavbarArtist />
            <div className=' w-full  right-0 font-SulphurPoint flex '>
            <button onClick={handleFetchData} disabled={isLoading}>
        Fetch Data
      </button>
            <Sidebar />
                <div className='p-3 lg:w-[80%] w-full lg:p-8 bg-[#F3EFEF]  '>
                    {
                        count === 1 ?
                            <div className=' flex w-full  flex-col gap-5'>
                                <p className=' text-[18px] lg:text-[28px] font-[700]'>My Profile</p>

                                {
                                    isError && 
                                    <div>error accoured</div>
                                }
                                {
                                    isLoading && 
                                    <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-[#A21D3C] bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                                        </svg>
                                        Loading...
                                    </button>
                                }

                                {
                                    artistData &&
                                    <div className=''>
                                        <div className='flex gap-5 p-5 items-center rounded-[12px]  bg-gradient-to-r text-[#F3EFEF] from-[#571121] to-[#A21D3C]'>
                                            <div className='w-[124px] h-[124px] overflow-hidden rounded-full'>
                                            
                                                {
                                                    artistData.profile.image ? 
                                                    <img src={`https://glamgo.onrender.com`+ artistData.profile.image} alt="" />:
                                                    <img src={artistDefaultImage} alt="" />
                                                }
                                            </div>
                                            <div className=' flex flex-col gap-3'>
                                                {
                                                    artistData.profile.fullname ?
                                                    <p className=' text-[16px] lg:text-[24px] font-[700]'>{artistData.profile.fullname}</p>:
                                                    artistData.data.username ? 
                                                    <p className=' text-[16px] lg:text-[24px] font-[700]'>{artistData.data.username}</p>:
                                                    null
                                                }
                                                
                                                <div className=' items-center flex gap-3'>
                                                    <AiOutlineMail className=' lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]' />
                                                    {
                                                    artistData.profile.email ? 
                                                    <p className='text-[14px] lg:text-[20px] font-[700]'>{artistData.profile.email}</p>:
                                                    'null'
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' p-8 bg-white  rounded-[12px]  text-[14px] lg:text-[20px] font-[400] flex flex-col gap-4'>
                                            <div className=' items-center  flex gap-3 '>
                                                <CiMobile3 color='#A21D3C' className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]' />
                                                {artistData.profile.contactNumber ? 
                                                <p>{artistData.profile.contactNumber}</p> : 
                                                <p>null</p>
                                                }
                                                

                                            </div>
                                            <div className=' flex gap-3 '>
                                                <CiLocationOn color=' #A21D3C' className=' lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]' />
                                                {
                                                    artistData.profile.address ?
                                                    <p>{artistData.profile.address}</p>:
                                                    <p>null</p>
                                                }
                                                {/* <p>12, Starwood Heights, sector 34, New Delhi, Delhi IN - 110052 </p> */}

                                            </div>
                                        </div>
                                        <div className=' flex flex-col gap-4 bg-white  rounded-[12px] p-8'>
                                            <div className='flex flex-col gap-4 '>
                                                <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700] '>Description:</p>
                                                <p className='text-[14px] lg:text-[20px] font-[400]'>
                                                    {
                                                        artistData.profile.description ?
                                                        artistData.profile.description:
                                                        'null'
                                                    }
                                                </p>
                                                {/* <p className='text-[14px] lg:text-[20px] font-[400]'>The Abhigyna makeovers were currently the popular makeovers in India. Our company will provide services to your doorstep.</p>: */}

                                                
                                            </div>
                                            <div className=' w-full mx-auto  border border-[#DCDCDC]' >
                                            </div>
                                            <div className='flex flex-col gap-4 '>
                                                <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700] '>Specialization:</p>
                                                <p className='text-[14px] lg:text-[20px] font-[400]'>
                                                    {
                                                        artistData.profile.specialization ?
                                                        artistData.profile.specialization:
                                                        'null'
                                                    }
                                                </p>
                                                {/* <p className='  text-[14px] lg:text-[20px] font-[400]'>Bridal Makeup, High-Fashion Looks, Celebrity Styles</p> */}
                                            </div>
                                            <div className=' w-full mx-auto  border border-[#DCDCDC] ' ></div>
                                            <div className='flex flex-col gap-4 '>
                                                <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700] '>Experience:</p>
                                                {/* <p className='  text-[14px] lg:text-[20px] font-[400]'>14 years</p> */}
                                                <p className='text-[14px] lg:text-[20px] font-[400]'>
                                                    {
                                                        artistData.profile.experience ?
                                                        artistData.profile.experience:
                                                        'null'
                                                    }
                                                </p>
                                            </div>



                                        </div>
                                        <button onClick={profileEdit} className='w-full  bg-[#A21D3C] flex items-center justify-center rounded-[12px] text-white p-3 gap-3'>
                                            <FaRegEdit color='white' className=' w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]' />
                                            <p className='  text-[14px] lg:text-[20px] font-[700]'>Edit Profile</p>

                                        </button>
                                    </div>
                                }
                                

                            </div>
                            :
                            count === 2 ?
                                //after clicking
                                <div className='  lg:w-[1160px] w-full  flex flex-col gap-5'>
                                    <div className=' flex gap-3 lg:gap-5 items-center'>
                                        <GoArrowLeft onClick={backToProfile}  className=' hover:cursor-pointer lg:w-[30px] lg:h-[30px] text-[#A21D3C] text-[20px]' />
                                        <p className='text-[16px] lg:text-[26px] font-[700]'>Edit Profile</p>
                                    </div>
                                    <div className=' relative  gap-5 p-5  justify-center rounded-[12px] h-32  bg-gradient-to-r text-[#F3EFEF] from-[#571121] to-[#A21D3C]'>
                                        <div className='   left-1/2 top-[20%] -translate-x-1/2 absolute   '>
                                            <div className=' relative'>
                                            {
                                                image ? 
                                                <img src={URL.createObjectURL(image)} alt="Selected" className="w-[200px] h-[200px] " /> :
                                                artistDefaultImage.image ? 
                                                <img src={`https://glamgo.onrender.com`+ artistProfileData.image} alt="Selected" className="w-[200px] h-[200px] " /> :
                                                
                                                <img src={artistDefaultImage} alt="Selected" className="w-[200px] h-[200px]" /> 
                                            }
                                                {/* <img className='   w-[200px] h-[200px] ' src={img1} alt="" /> */}
                                                {/* <div className=' w-[60px] h-[60px] flex items-center  justify-center bg-white rounded-full absolute right-0 bottom-5 '> */}
                                                    {/* <VscEdit className='w-[30px] h-[30px] ' color='#A21D3C' /> */}
                                                {/* </div> */}
                                                <label htmlFor="image-upload">
                            <div className='w-[60px] h-[60px] flex items-center  justify-center bg-white rounded-full absolute right-0 bottom-5 '>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    id="image-upload"
                                    className="absolute w-0 h-0 opacity-0 overflow-hidden cursor-pointer"
                                    />
                                    <VscEdit htmlFor="img" className='w-[30px] h-[30px] ' color='#A21D3C'/>
                            </div>
                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' mt-20 flex flex-col p-8  gap-8 bg-white'>
                                        <input onChange={handleInputChange} value={artistProfileData.fullname} name='fullname' className=' rounded-[12px] p-3 bg-[#F3EFEF]' type="text" placeholder='Full Name' />
                                        <input onChange={handleInputChange} value={artistProfileData.email} name='email' className=' rounded-[12px] p-3 bg-[#F3EFEF]' type="text" placeholder='Email ID' />
                                        <div className=' flex rounded-[12px]  w-full items-center justify-between  bg-[#F3EFEF] p-3'>

                                            <p className='  text-[18px] font-[400]'>{artistProfileData.contactNumber}</p>
                                            {/* <input type="text" className='  text-[18px] font-[400]' value={artistProfileData.email} readOnly/> */}
                                            <p className='text-[#54B22C] text-[12px] lg:text-[18px] font-[700]'>Verified</p>
                                        </div>

                                        {/* <div className='grid  grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4'>
                                <div className=' bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                    <input 
                                    name = 'pinCode'
                                    value={artistProfileData.pinCode}
                                    onChange={handleInputChange}
                                    className=' col-start-1 col-end-3 g font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                    type='number' placeholder='Pin code' required/>
                                </div>
                                <div className='borders border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                    <input
                                    name = 'city'
                                    value={artistProfileData.city}
                                    onChange={handleInputChange}
                                    className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                    type='text' placeholder='City' required/>
                                </div>
                                <div className='bordes border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                    <input 
                                    name='state'
                                    value={artistProfileData.state}
                                    onChange={handleInputChange}
                                    className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                    type='text' placeholder='State' required/>
                                </div>

                            </div> */}

                                        <input onChange={handleInputChange} value={artistProfileData.address} name='address' className=' rounded-[12px] p-3 bg-[#F3EFEF]' type="text" placeholder='Location' />
                                        <input onChange={handleInputChange} value={artistProfileData.description} name='description' className=' rounded-[12px] p-3 bg-[#F3EFEF]' type="text" placeholder='Description' />
                                        <input onChange={handleInputChange} value={artistProfileData.specialization} name='specialization' className=' rounded-[12px] p-3 bg-[#F3EFEF]' type="text" placeholder='Specialization' />
                                        <input onChange={handleInputChange} value={artistProfileData.experience} name='experience' className=' rounded-[12px] p-3 bg-[#F3EFEF]' type="text" placeholder='Experience (in years)' />
                                    </div>
                                    <button onClick={submitChanges} className='  bg-[#A21D3C] flex items-center justify-center rounded-[12px] text-white p-3 gap-3'>

                                        <p  className='text-[14px] lg:text-[20px] font-[700]'>Save Changes</p>

                                    </button>
                                </div>
                                :
                                null
                    }
                </div>
            </div>
        </>
    )
}

export default ArtistProfile