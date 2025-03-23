import React, { useEffect, useState } from 'react'
import axios from 'axios';

// cross icon
import { RxCross1 } from "react-icons/rx";
// edit icon
import { VscEdit } from "react-icons/vsc";
// import updateProfile using rtk query.
import { useUpdateUserProfileMutation } from '../../features/user/userSlice';

// user dummy images
import userDefalutImage from '../../assets/ProfileImage/DefaultProfileImagepng.png';
// import userImage from '../../assets/Image/userProfileImage.png';

// import artist navbar
import ArtistNavbar from '../ArtistNavbar/ArtistNavbar';

const EditUserDetails = ({visible , onClose, userprofileInfo}) => {

    const [image, setImage] = useState(null);


    const [ updateUserProfile ] = useUpdateUserProfileMutation();

    //  data for update
    const [userEditProfileData, setUserEditProfileData] = useState({
        image : '',
        fullname : '',
        email: '',
        contactNumber : '',
        city: ''
    })

    // when user click on edit profile it will desplay user data into the form.
    useEffect(()=>{
        if(userprofileInfo){
            setUserEditProfileData({
                image : userprofileInfo.profile.image,
                fullname : userprofileInfo.profile.fullname,
                email : userprofileInfo.profile.email,
                contactNumber : userprofileInfo.data.contactNumber,
                city : userprofileInfo.profile.city
            })
        }
    },[userprofileInfo])


    // Handle onChange for input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update the corresponding field in the state
        setUserEditProfileData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };


    // handle image file change
    const handleFileChange = (event) => {
        // console.log(event.target.files[0])
        setUserEditProfileData({
            ...userEditProfileData,
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
    
    
    // when user save or upload his details.
    const handleUpload = async()=>{
    console.log('final data', userEditProfileData)

    const formDataForUpload =  new FormData();
    formDataForUpload.append('fullname', userEditProfileData.fullname);
    formDataForUpload.append('email', userEditProfileData.email);
    formDataForUpload.append('image', userEditProfileData.image);
    formDataForUpload.append('city', userEditProfileData.city)


    // show the data
    // for (const pair of formDataForUpload.entries()) {
    //     console.log(pair[0], pair[1]);
    //   }


    // send user data into the API
    await updateUserProfile(formDataForUpload)

    setImage(null)

    // after sucessfull data update close edit profile model.
    onClose();
    } 

    // when click on close(cross) button 
    const closeModal = ()=>{
        onClose();
        setImage(null)
    }


    // dummy data for testing purpose
    const dataToUpdate = {
        "fullname":  'Anjali negi',
        "email" : 'anjalinegi123@gmail.com',   // should we verify this email also
        "image": "https://via.placeholder.com/150x150",
        "city" : 'dehradun'
    };


    // here integrate the update user details API using Axios, (just for reference) (not workable)
    const updateprofilesss = ()=>{

        axios.put('https://glamgo.onrender.com/api/v1/auth/updateprofile', dataToUpdate , {withCredentials:true}, {
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then(response => {
                console.log('Update successful!');
                console.log('Response:', response.data);

                if(response.data.success === true){
                    onClose()
                }

            })
            .catch(error => {
                console.error('Update failed:', error.message);
            });
    }




    if(!visible) return null;
    return (
        <div 
        id='container'
        className="fixed z-20 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#F3EFEF] md:bg-[#FFFFFF] w-full h-full md:h-fit md:max-w-[700px] md:p-[2rem] rounded w-fits md:w-[70%]">
                <div className='md:hidden'>
                    <ArtistNavbar/>
                </div>
                <div className='hidden  text-2xl lg:text-2xl xl:text-3xl md:flex items-center justify-between'>
                    <h3 className='f font-SulphurPoint font-bold text-[#2D2D2D]'>Edit Profile</h3>
                    <div
                    onClick={closeModal}
                    className='cursor-pointer'>
                        <RxCross1/>
                    </div>
                </div>


                <div className='relative h-[9.5rem] flex items-center justify-center py-3 gap-x-5 bg-UserProfileBannerImageMobile md:bg-none'> 
                    <div className='absolute bottom-[-3.5rem] md:static'>
                        <div className="w-fit relative">
                            {
                                image ? 
                                <img src={URL.createObjectURL(image)} alt="Selected" className=" rounded-[7rem] h-[110px] w-[110px] lg:h-[120px] lg:w-[120px]" /> :
                                userEditProfileData.image ? 
                                <img src={`https://glamgo.onrender.com`+ userEditProfileData.image} alt="Selected" className=" rounded-[7rem] h-[110px] w-[110px] lg:h-[120px] lg:w-[120px]" /> :
                                
                                <img src={userDefalutImage} alt="Selected" className=" rounded-[7rem] h-[110px] w-[110px] lg:h-[120px] lg:w-[120px]" /> 
                            }
                                
                                
                            <label htmlFor="image-upload">
                            <div className='absolute right-0 bottom-0 w-[30px] h-[30px] bg-[#FFFFFF] shadow-editIcon border border-[#F5F5F5] rounded-[50%] flex justify-center items-center cursor-pointer'>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    id="image-upload"
                                    className="absolute w-0 h-0 opacity-0 overflow-hidden cursor-pointer"
                                    />
                                
                                    <VscEdit htmlFor="img" className='text-[#A21D3C]'/>
                            </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* input fields */}
                <div className='mt-[5rem] w-[90%] mx-auto md:w-full md:mt-0 flex flex-col gap-y-4'>
                    <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-3'>
                        <input 
                        name='fullname'
                        // value={formData.name}
                        value = {userEditProfileData.fullname}
                        onChange={handleInputChange}
                        className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-base lg:text-lg text-[#989898] outline-none w-[80%] '
                        type="text" placeholder='Full Name' />
                    </div>
                    <div>
                        </div>



                    <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-3'>
                        <input 
                        name='email'
                        // value={formData.email}
                        value = {userEditProfileData.email}
                        onChange={handleInputChange}
                        className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-base lg:text-lg text-[#989898] outline-none w-[80%] '
                        type="email" placeholder='Email ID' />
                    </div>

                    <div className='border border-[#989898] flex justify-between bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-3'>
                        <input 
                        className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-base lg:text-lg text-[#989898] outline-none w-[80%] '
                        type="text" value={userEditProfileData.contactNumber} readOnly/>
                        <h2 className='f font-SulphurPoint font-bold text-[#54B22C]'>Verified</h2>
                    </div>

                    <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-3'>
                        <input 
                        name='city'
                        // value={formData.city}
                        value = {userEditProfileData.city}
                        onChange={handleInputChange}
                        className='font-SulphurPoint font-normal bg-[#F3EFEF] text-base lg:text-lg text-[#989898] outline-none w-[80%] '
                        type="text" placeholder='City' />
                    </div>

                    <button 
                    onClick={handleUpload}
                    className='fixed md:static bottom-0 left-0 right-0 bg-[#A21D3C] border border-[#989898] shadow-MobileNoBox md:rounded-xl w-full p-3 md:p-2 lg:p-3'>
                        <p className='font-SulphurPoint font-bold text-lg lg:text-lg xl:text-xl text-[#F3EFEF]'>Save Changes</p>
                    </button>
                </div>
            </div>
            </div>
    )
}

export default EditUserDetails;
