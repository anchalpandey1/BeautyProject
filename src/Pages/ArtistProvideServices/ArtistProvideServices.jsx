import React, { useEffect, useState } from 'react'
import ArtistServicesCategory from '../../components/ArtistServicesCategory/ArtistServicesCategory'
import { HiArrowLeft } from "react-icons/hi2";
import { RiAttachment2 } from "react-icons/ri";
import { useAddArtistServicesMutation } from '../../features/user/artistAPISlice';
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// chat icon
import { IoChatbubbleOutline } from "react-icons/io5";

import { useUpdateArtistServicesMutation } from '../../features/user/artistAPISlice';
import artistService from '../../assets/Image/artistService.png'
import { useGetAllArtistServicesQuery } from '../../features/user/artistAPISlice';
import { useDeleteArtistServicesMutation } from '../../features/user/artistAPISlice';
const ArtistProvideServices = () => {
    const [artistServices, setartistServices] = useState({
        // we are giving default image
        image: 'artistServiceImage.jpg',
        serviceCost: '',
        serviceDescription: '',
        serviceName: '',
        serviceCategory: '',
    })
    const initialData = {
        image: 'artistServiceImage.jpg',
        serviceCost: '',
        serviceDescription: '',
        serviceName: '',
        serviceCategory: '',
    }
    const [show, setShow] = useState(false)
    const { data: allArtistServices, isError, isLoading } = useGetAllArtistServicesQuery()
    const [addServices] = useAddArtistServicesMutation()
    const [updatedService] = useUpdateArtistServicesMutation()
 const [deleteService] = useDeleteArtistServicesMutation()


    // get all services in first render
    useEffect(() => {
        if (allArtistServices) {
            console.log("all artist services", allArtistServices)
        }
    }, [])
    const [editMode, setEditMode] = useState(false)
    const [selectedServiceInfo, setSelectedServiceInfo] = useState(false)
    const handleinputchange = (e) => {
        const { name, value } = e.target;

        // Update the corresponding field in the state
        setartistServices((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    // it will run when your form is on edit mode.
    useEffect(() => {
        console.log(" edit pata  hi kya h , but  chl gya ")
        if (editMode) {

            console.log(" edit mode true h")
            if (selectedServiceInfo) {
                setartistServices({ ...selectedServiceInfo });
                setChangedServiceData((preval) => {
                    return {
                        ...preval,
                        id: selectedServiceInfo._id
                    }
                })

                // setChangedAddressData((preval) => {
                //     return {
                //         ...preval,
                //         id: SelectedAddressData._id
                //     }
                // })
            }
        }
        else {
            console.log('edit mode is false')
            setartistServices(
                {
                    image: 'artistServiceImage.jpg',
                    serviceCost: '',
                    serviceDescription: '',
                    serviceName: '',
                    serviceCategory: '',
                }
            )
        }
        // it will display your selected address into the form.

    }, [editMode]);

    const editService = (id) => {

        // it will open the Form model box.
        // setShowMyModel(true)
        setShow(!show)
        setEditMode(true)
        // it will get selected address details using the ID.
        const artistServiceInfoData = allArtistServices.services
        // const selectedServiceInfo = artistServiceInfoData.find(obj => obj._id === id);
        setSelectedServiceInfo(artistServiceInfoData.find(obj => obj._id === id))
        // console.log(selectedServiceInfo)
        // setSelectedAddressData(SelectedAddressInfo)

        // set editmode value true.
        // setEditMode(true)
        console.log(allArtistServices.services)
    }
    // when submit the changes.
    const submitChange = async () => {
        if (editMode) {
            console.log(" data submit krne bad edit mode true h")
            const changedService = Object.keys(initialData).reduce((changes, key) => {
                if (artistServices[key] !== selectedServiceInfo[key]) {
                    changes[key] = artistServices[key];
                }
                return changes;

            }, {});
            setChangedServiceData((preval) => {
                return {
                    ...preval,
                    data: changedService
                }
            })
            console.log("edit submit");
            console.log(changedService)
            setSubmitEditService(true)
        }
        console.log("submit ho gya")
        console.log(artistServices)
        console.log(selectedServiceInfo)

        // integrate API using redux toolkit query
        // await addServices(artistServices)
        setShow(false)
        setEditMode(false)
    }
    const [submitEditService, setSubmitEditService] = useState(false)
    //  this function will update user address
    useEffect(() => {
        if (submitEditService) {
            console.log(changedServiceData)
            updatedService(changedServiceData)
            // changedServiceData
            // updateUserAddress(changedAddressData)
            setartistServices(
                {
                    image: 'artistServiceImage.jpg',
                    serviceCost: '',
                    serviceDescription: '',
                    serviceName: '',
                    serviceCategory: '',
                }
            )
        }

        setSubmitEditService(false)
    }, [submitEditService])
    const [changedServiceData, setChangedServiceData] = useState({
        id: null,
        data: null
    })
    // useEffect(() => {
    //     if (!editMode) {
    //         console.log('edit mode is false')
    //         setartistServices(
    //             {
    //                 image: 'artistServiceImage.jpg',
    //                 serviceCost: '',
    //                 serviceDescription: '',
    //                 serviceName: '',
    //                 serviceCategory: '',
    //             }
    //         )
    //         // console.log(newUserAddress)
    //     }
    // }, [editMode])
    const goback = () => {
        setShow(!show)
        
    }
    return (
        <div className='bg-[#F3EFEF] font-SulphurPoint w-[95%]'>

            <div className='w-[95%] mx-auto md:w-full flex md:gap-x-[1.5rem] lg:gap-x-[2.5rem]'>
                <div className={` ${show ? ' hidden' : ' visible'} grow py-[2rem] md:pr-[2rem]`}>

                    {/* my services box */}
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-SulphurPoint font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]' >My Services</h3>

                            <button onClick={() => {
                                setShow(!show)
                            }} className=' md:block w-fit py-1s px-[1.5rem] lg:py-2 xl:py-2 lg:px-[3rem] xl:px-[5rem] border border-[#A21D3C] rounded-xl bg-[#FFFFFF] shadow-addServices'>
                                <p className='font-SulphurPoint font-bold text-[#A21D3C] text-lg lg:text-xl xl:text-2xl'>+ Add Service</p>

                            </button>
                        </div>
                    </div>


                    {/* artist services category */}
                    <ArtistServicesCategory />
                    {isLoading && (<div className='text-4xl  text-[#A21D3C] text-center'>
                        <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                        </div>
                    </div>)}


                    {
                        allArtistServices && (
                            <>
                                {
                                    allArtistServices.services.map((val, index) => {
                                        return (
                                            // artistservie price all that 
                                            <div key={val._id} className='p-3 flex justify-between my-[1.5rem] bg-white'>
                                                <div className=' flex gap-2'>
                                                    <img className=' w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]' src={artistService} alt="" />
                                                    <div>
                                                        <p className=' text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]'>{val.serviceName}</p>
                                                        <p className=' text-[#989898] text-[14px] lg:text-[20px] font-[400]'>{val.serviceDescription}</p>
                                                        <p className=' text-[18px] lg:text-[32px] font-[700]'>₹{val.serviceCost}</p>
                                                    </div>

                                                </div>
                                                <div className=' flex flex-col  justify-between'>
                                                    <button onClick={() => { editService(val._id) }} className='p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-white bg-[#A21D3C]'>

                                                        Edit
                                                    </button>
                                                    <button onClick={() => {deleteService(val._id)}} className=' p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-[#504949]  border border-[#504949]'>
                                                        Delete
                                                    </button>

                                                </div>
                                            </div>
                                            // <div key={val._id} className='bg-[#FFFFFF]  flex gap-x-2 md:gap-x-4 lg:gap-x-5 items-start justify-between p-1 py-2 xs:p-2 xs:py-3 md:py-3 lg:py-5' >
                                            //     < img className='w-[54px] h-[45px]s xs:w-[64px] xs:h-[62px]s sm:w-[90px]s md:w-[80px] flex-shrink-0 rounded-[8px] overflow-hidden shadow- artistServiceCategory'
                                            //         src={artistService} alt="" />
                                            //     <div className='font-DMSans font-normal grow flex md:flex-cols justify-between items-start gap-x-2 xs:gap-x-3 md:gap-y-1 '>
                                            //         <div className=''>
                                            //             <h2 className='text-[#2D2D2D] text-sm xs:text-base sm:text-lg lg:text-xl xl:text-[22px] leading-tight sm:mb-2 md:mb-0'>{val.serviceName}</h2>
                                            //             <p className='text-[10px] xs:text-xs sm:text-sm lg:text-base xl:text-lg text-[#989898] leading-tight'>{val.serviceDescription
                                            //             }</p>
                                            //         </div>
                                            //         <p className='font-SulphurPoint font-bold text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl flex items-center justify-centers text-[#2D2D2D]'>
                                            //             <FaRupeeSign className='text-xs' />
                                            //             <span>{val.serviceCost
                                            //             }</span>
                                            //         </p>
                                            //     </div>
                                            // </div>
                                        )
                                    })
                                }

                            </>
                        )
                    }



                </div>
                <div className={`${show ? 'visible' : 'hidden'} w-full mt-10 mx-auto`}>
                    <div className={` flex flex-col gap-5 w-[95%] mx-auto`}>
                        <div className=' flex items-center justify-between w-full'>
                            <div className=' flex items-center gap-8'>
                                <HiArrowLeft onClick={goback} className='text-[28px] text-[#A21D3C] cursor-pointer' />


                                <p className=' text-[16px] lg:text-[24px] font-[700]'>Add Services</p>
                            </div>

                        </div>
                        <div className='  flex flex-col gap-4  p-5 bg-white'>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Service Name <span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text"
                                    value={artistServices.serviceName}
                                    onChange={handleinputchange} name='serviceName'
                                    required
                                />

                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Service Description <span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text"
                                    value={artistServices.serviceDescription}
                                    onChange={handleinputchange} name='serviceDescription'
                                    required
                                />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Upload Image <span className=' text-[#A21D3C]'>*</span></span></p>
                                <div className=' bg-[#fbf3f3] p-3  rounded-[12px] flex  justify-between'>

                                    <input className=' bg-[#fbf3f3] ' type="text" />
                                    <RiAttachment2 className=' text-[24px] lg:text-[30px] text-[#A21D3C]' />
                                    {/* <img className=' lg:w-[30px] lg:h-[30px]  w-[24px] h-[24px]' src={img8} alt="" /> */}
                                </div>
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Add Service Cost (Rs) <span className=' text-[#A21D3C]'>*</span></span></p>
                                <div className=' bg-[#fbf3f3] p-3 rounded-[12px] flex gap-2'>
                                    <p className=' text-[16px] lg:text-[24px] font-[400] text-[#989898]'>₹</p>
                                    <input className=' bg-[#fbf3f3] ' type="text"
                                        value={artistServices.serviceCost}
                                        onChange={handleinputchange} name='serviceCost'
                                        required
                                    />

                                </div>
                            </div>

                            <div className=' font-SulphurPoint  text-[16px] lg:text-[20px] font-[400] flex flex-col w-full h-full items-center justify-center'>
                                <div className=' w-full flex justify-between'>
                                    <p>Categeory</p>
                                </div>

                                <select className=' h-10 w-full' value={artistService.serviceCategory} name='serviceCategory' onChange={handleinputchange} required>
                                    <option>Not Selected</option>
                                    <option value='Makeup'>Makeup</option>
                                    <option value='Hair'>Hair</option>
                                    <option value='Skincare'>Skincare</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className=' mt-10 flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>

                            <button id='cont' onClick={submitChange} className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[20px]  rounded-[12px]  p-2 w-full flex items-center justify-center '>
                                Add Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ArtistProvideServices
