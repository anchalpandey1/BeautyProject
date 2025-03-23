import React, { useEffect, useState } from 'react'

// cross icon
import { RxCross1 } from "react-icons/rx";

// edit icon
import { VscEdit } from "react-icons/vsc";


import { useAddUserAddressMutation } from '../../features/user/userSlice';
import { useUpdateUserAddressMutation } from '../../features/user/userSlice';


// import userImage from '../../assets/Image/userProfileImage.png';
import userImage from '../../assets/ProfileImage/DefaultProfileImagepng.png';
import ArtistNavbar from '../ArtistNavbar/ArtistNavbar';

const EditAddress = ({visible , onClose , editAddressId ,editMode, SelectedAddressData, setEditMode , addressType }) => {


    // when close the form 
    const closeForm = ()=>{
        // close the form
        onClose();
        // clear all data
        console.log('clear my all data......................')
        // setNewUserAddress(
        //     {
        //         fullname: "",
        //         phone: "",
        //         pinCode : "",
        //         city: "",
        //         state: "",
        //         houseno : "",
        //         completeAddress : " ",
        //         type : ""
        //     }
        // )
        // console.log(newUserAddress)
        // set edit mode false
        setEditMode(false)
    }

    // after edit the address, it will store the id and changed data.
    const [changedAddressData , setChangedAddressData] = useState({
        id: null,
        data: null
    })


    const [addNewAddress] = useAddUserAddressMutation();
    const [updateUserAddress] = useUpdateUserAddressMutation();



    
    const [first, setfirst] = useState(2)

    const [sumbitEditForm, setSubmitEditForm] = useState(false)

    // it will store user new address data
    const [newUserAddress , setNewUserAddress] = useState(
        {
            fullname: "",
            phone: "",
            pinCode : "",
            city: "",
            state: "",
            houseno : "",
            completeAddress : " ",
            type : ""
        });

        // const initialData = {
        //     fullname: "",
        //     phone: "",
        //     pinCode : "",
        //     city: "",
        //     state: "",
        //     houseno : "",
        //     completeAddress : " ",
        //     type : ""
        // }


        const initialData = {
            fullname: '',
            phone: "",
            pinCode : "",
            city: "",
            state: "",
            houseno : "",
            completeAddress : "",
            type : ""
        }

        // it will run when your form is on edit mode.
        useEffect(() => {

            // it will display your selected address into the form.
            if(SelectedAddressData){
                setNewUserAddress({ ...SelectedAddressData });



                setChangedAddressData((preval)=>{
                    return{
                        ...preval,
                        id : SelectedAddressData._id
                    }
                })
            }


            

            // const selectedAddressId =  editAddressId
            
            // if(selectedAddressId){
            //     const selecteid = selectedAddressId._id;
            //     setEditData((old)=>{
            //         return{
            //             ...old,
            //             editId : selecteid
            //         }
            //     })
            // }

            // Clean-up function (optional)
            // return () => {
            // // This code will run when the component unmounts or when editMode changes to false
            // console.log('Exiting edit mode');
            // // setEditMode(false)
            // };
        }, [editMode]);

         //  it will store is user submitting his data or not.
    const [submitEditAddress, setSubmitEditAddress] = useState(false)


    useEffect(()=>{
        if(!editMode){
            console.log('edit mode is false')
            setNewUserAddress(
                {
                    fullname: "",
                    phone: "",
                    pinCode : "",
                    city: "",
                    state: "",
                    houseno : "",
                    completeAddress : " ",
                    type : ""
                }
            )
            console.log(newUserAddress)
        }
    },[editMode])


    //  this function will update user address
    useEffect(()=>{
        if(submitEditAddress){
            updateUserAddress(changedAddressData)
            console.log(changedAddressData)

            setNewUserAddress(
                {
                    fullname: "",
                    phone: "",
                    pinCode : "",
                    city: "",
                    state: "",
                    houseno : "",
                    completeAddress : " ",
                    type : ""
                }
            )
        }
        setSubmitEditAddress(false)
    },[submitEditAddress])

        // useEffect(()=>{
        //     const first = async()=>{
        //         console.log('changskdfjsssssssss',changedAddressData)
        //         await updateUserAddress(changedAddressData)
        //     }
        //     first()
        // },[sumbitEditForm])

        // const deeeeemoo = (changedAddress)=>{
        //     setChangedAddressData((preval)=>{
        //         return{
        //             ...preval,
        //             data : changedAddress
        //         }
        //     })
        //     return changedAddressData
        // }
        


    if(editAddressId){
        console.log('you have i id and your id is', editAddressId)

        // setNewUserAddress({
        //     fullname: editAddressId.fullname,
        //     phone: "",
        //     pinCode : "",
        //     city: "",
        //     state: "",
        //     houseno : "",
        //     completeAddress : " ",
        //     type : ""
        // })
    }


    
    const handleInputChange = (e)=>{
        const { name , value} = e.target;
        // console.log('name is ', name )
        // console.log('value is', value)

        setNewUserAddress((val)=>{
            return{
                ...val,
                [name]: value
            }
        })
    }



    const [count , setcount] = useState(1)


    // When save changes
    const updateprofile = async(event)=>{
        event.preventDefault();
        // console.log(newUserAddress)

        // if edit mode is on ( updating address).
        if(editMode){


            // this is for when we updata profile what changes we did it will display that 
        // Identify and submit only the modified values


        const changedAddress = Object.keys(initialData).reduce((changes, key) => {
            if (newUserAddress[key] !== SelectedAddressData[key]) {
            changes[key] = newUserAddress[key];
            }
            return changes;

        }, {});


        setChangedAddressData((preval)=>{
                    return{
                        ...preval,
                        data : changedAddress
                    }
                })
                
                // setSubmitEditForm(true)



        console.log(changedAddress)
        console.log(changedAddressData)
        setSubmitEditAddress(true)
        // await updateUserAddress(changedAddressData)

        }
        // if edit mode is off (adding new address)
        else{
            //  it will new user address.
            await addNewAddress(newUserAddress)

        }

        // close edit box
        onClose()

        setEditMode(false)

        // clean the value
        console.log('clear my all values ................')
        setNewUserAddress(
            {
                fullname: "",
                phone: "",
                pinCode : "",
                city: "",
                state: "",
                houseno : "",
                completeAddress : " ",
                type : ""
            }
        )





        // setEditMode(false)



        



        // console.log(editData)




    
        // Your logic to submit changedAddress
        // console.log('Changed values:', changedAddress);

        // setEditData((old)=>{
        //     return{
        //         ...old,
        //         editedValue : changedAddress
        //     }
        // })




        // updateUserAddress(editData)
        // onClose();




        
        // axios.post(editProfileBaseURL, newUserAddress , {withCredentials:true}, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     })
        //     .then(response => {
        //         console.log('Update successful!');
        //         console.log('Response:', response.data);
        //     })

        //     // if process successfull completed
        //     // onClose()

        //     .catch(error => {
        //         console.error('Update failed:', error.message);
        //     });
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleOnClose = (e)=>{
        if(e.target.id === 'container') onClose();
    }

    if(!visible) return null;
    return (
        <div 
        id='container'
        // onClick={handleOnClose} 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#F3EFEF] md:bg-[#FFFFFF] w-full  h-full md:h-fit md:max-w-[700px] md:p-[2rem] rounded w-fits md:w-[70%]">

                <div className='md:hidden'>
                    <ArtistNavbar/>
                </div>
                <div className='mt-[1rem] md:mt-0 bg-[#FFFFFF] w-[90%] md:w-full p-[1.5rem] md:p-0 mx-auto'>
                        <div className='borders border-green-900 lg:text-xl xl:text-xl flex items-center justify-between mb-3 md:mb-4'>
                            <h3 className='font-SulphurPoint font-bold text-[#2D2D2D]'>Add a new address</h3>
                            <div
                            onClick={closeForm}
                            className='hidden md:block cursor-pointer'>
                                <RxCross1/>
                            </div>
                        </div>


                        {/* input fields */}
                        <form onSubmit={updateprofile}  className='flex flex-col gap-y-4'>
                            <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                <input 
                                // value={newUserAddress.name}
                                value={newUserAddress.fullname}
                                onChange={(e) => {handleInputChange(e)}}
                                name = 'fullname'
                                className='font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                type="text" 
                                placeholder='Full Name' 
                                required
                                />
                            </div>


                            <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                <input 
                                name='phone'
                                value={newUserAddress.phone}
                                // value={newUserAddress.email}
                                onChange={(e) => {handleInputChange(e)}}
                                className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                type='number' placeholder='Mobile Number' required/>
                            </div>

                            <div className='border-2 broder-black grid  grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4'>
                                <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                    <input 
                                    name = 'pinCode'
                                    value={newUserAddress.pinCode}
                                    onChange={(e) => {handleInputChange(e)}}
                                    className=' col-start-1 col-end-3 g font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                    type='number' placeholder='Pin code' required/>
                                </div>
                                <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                    <input
                                    name = 'city'
                                    value={newUserAddress.city}
                                    onChange={(e) => {handleInputChange(e)}} 
                                    className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                    type='text' placeholder='City' required/>
                                </div>
                                <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                    <input 
                                    name='state'
                                    value={newUserAddress.state}
                                    onChange={(e) => {handleInputChange(e)}}
                                    className='f font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                    type='text' placeholder='State' required/>
                                </div>

                            </div>

                            <div className='border border-[#989898] flex justify-between bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                <input 
                                name='houseno'
                                value={newUserAddress.houseno}
                                onChange={(e) => {handleInputChange(e)}}
                                className='font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] '
                                type="number"  placeholder='House/Flat No/Office No' required/>
                            </div>

                            

                            <div className='border border-[#989898] bg-[#F3EFEF] shadow-MobileNoBox rounded-xl p-2'>
                                <textarea 
                                onChange={(e) => {handleInputChange(e)}}
                                name="completeAddress" 
                                value={newUserAddress.completeAddress}
                                cols="20" className='caret-gray-900 resize  font-SulphurPoint font-normal bg-[#F3EFEF] text-sm lg:text-base text-[#989898] outline-none w-[80%] ' placeholder='Area/Road/Colony' required/>
                            </div>

                            <div className=''>
                                <h4 className='f font-SulphurPoint text-[#504949] font-bold text-lg lg:text-xl my-2'>Address Type</h4>

                                
                                <div className="f font-SulphurPoint font-bold text-[#504949] text-base md:xl flex justify-between">
                    <label className="flex items-center space-x-2">
                        <input 
                        disabled = {addressType.includes("Home")}
                        checked = {newUserAddress.type === "Home"} onChange={(e) => {handleInputChange(e)}} type="radio" name="type" value="Home" className="w-5 h-5 accent-[#D66F11]" required/>
                        <span>Home</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input 
                        disabled = {addressType.includes("Office")}
                        checked = {newUserAddress.type === "Office"} onChange={(e) => {handleInputChange(e)}} type="radio" name="type" value="Office" className="w-5 h-5 accent-[#D66F11]" required/>
                        <span>Office</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input checked = {newUserAddress.type === "Others"} onChange={(e) => {handleInputChange(e)}} type="radio" name="type" value="Others" className="w-5 h-5 accent-[#D66F11]" required/>
                        <span>Others</span>
                    </label>
      {/* Add more radio buttons as needed */}
    </div>
                            </div>


                            <button type='submit'
                            className='bg-[#A21D3C] border border-[#989898] shadow-MobileNoBox rounded-xl w-full p-[6px] lg:p-2'>
                                <p className='font-SulphurPoint font-bold text-sm lg:text-base text-[#F3EFEF]'>Save Changes</p>
                            </button>
                        </form>
                </div>
                

                
            </div>
            </div>
    )
}

export default EditAddress;

