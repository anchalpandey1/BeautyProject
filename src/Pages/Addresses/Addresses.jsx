import React , {useState , useEffect} from 'react'

import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import img6 from '../../assets/Addresses/ion_home.png'
import img7 from '../../assets/Addresses/tabler_edit.png'
import img8 from '../../assets/Addresses/Frame 88.png'
import img9 from '../../assets/Addresses/Vector (1).png'

import { MdOutlineArrowForwardIos } from "react-icons/md";
import EditAddress from '../../components/EditAddress/EditAddress'


import { useGetUserAddressQuery } from '../../features/user/userSlice'
import { useDeleteUserAddressMutation } from '../../features/user/userSlice';
import Heading from '../../components/Heading/Heading'


const Addresses = () => {

    // state that definded is Address edit mode is on or not.
    const [editMode, setEditMode] = useState(false);

    // get user Address data form rtk query.
    const {data: userAddressInfo , error , isLoading} = useGetUserAddressQuery();

    // delete Address data using rtk query.
    const [ deleteAddress]  = useDeleteUserAddressMutation();

    // store the data of the selected address.
    const [SelectedAddressData, setSelectedAddressData] = useState(null)

    // This will store what address types the user has.
    const [addressType , setAddressType] = useState()

    // it wil collect all type from the apis
    useEffect(()=>{
        if(userAddressInfo){
            console.log(userAddressInfo.data)
            // userAddressInfo.data.forEach(element => {
            //     console.log(element.type)
            // })
            const uniqueAddressTypes = Array.from(new Set(userAddressInfo.data.map(obj => obj.type)));
            console.log(uniqueAddressTypes)
            setAddressType(uniqueAddressTypes)
            // console.log(userAddressInfo.data)
        }
    },[userAddressInfo])



    // When click on edit Address
    const editAddress = (id)=>{
        
        // it will open the Form model box.
        setShowMyModel(true)

        // it will get selected address details using the ID.
        const userInfoData = userAddressInfo.data
        const SelectedAddressInfo = userInfoData.find(obj => obj._id === id);

        setSelectedAddressData(SelectedAddressInfo)

        // set editmode value true.
        setEditMode(true)
    } 

    // address form display or not.
    const [showMyModel , setShowMyModel] = useState(false)

    // close model box
    const handleOnClose = () =>{
        setShowMyModel(false)
        document.body.style.overflow = 'auto';
    }

    // show model box
    const showModelBox = ()=>{
        setShowMyModel(true)
        document.body.style.overflow = 'hidden';
    }
    const headerData = [
        {page : 'My Profile', pageURL : '/userProfile'},
        {page : 'My Addresses', pageURL : '/Addresses'}
    ]


    if(error) {
        return <>Something went wrong</>
    }

    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint '>
                <Heading pageNavigation={headerData}/>

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
                    userAddressInfo && (
                        <>
                        <div className='flex justify-center items-center '>
                    <div className='bg-white p-5 flex flex-col gap-8 mt-10 rounded-[24px] lg:w-[1040px] lg:h-vh'>
                        {
                            userAddressInfo.data.map((val, index)=>{
                                return(
                                    <div key={val._id} className=' border shadow-lg rounded-[12px] p-5 text-[#989898]  text-[16px] lg:text[18px] font-[700]'>
                            <div className=' flex justify-between items-center'>
                                <div className=' flex  gap-2 items-center'>
                                    <img className='w-[24px] h-[24px]' 
                                    src={`${val.type === "Home"? img6: val.type === "Office"? img6 : img9 }`} 
                                    alt="" />

                                    <p className=' text-[18px] lg:text-[24px] font-[700] text-[#504949]'>{val.type}</p>
                                </div>
                                {/* edit */}
                                <img onClick={()=> {editAddress(val._id)}} className='w-[18px] h-[18px] cursor-pointer' src={img7} alt="" />
                            </div>
                            <div className=' flex justify-between items-center'>

                                <p>{val.fullname}</p>

                                {/* delete button */}
                                <img onClick={()=>{deleteAddress(val._id)}} className='w-[18px] h-[18px] cursor-pointer' src={img8} alt="" />
                            </div>
                            {val.phone ?
                            <p>{val.phone}</p>
                            : 
                            <p>-</p>
                            }

                            {val.completeAddress ?
                                <p> 
                                    <span className='pr-1'>{val.houseno},</span>
                                    <span className='pr-1'>{val.completeAddress},</span>
                                    <span className='pr-1'>{val.city},</span>
                                    <span className='pr-1'>{val.state},</span>
                                    <span className='pr-1'>{val.pinCode}</span>
                                </p>
                                : 
                                <p>-</p>
                            }
                                    </div>
                                )
                            })
                        }
                        <button 
                        onClick={()=> {setShowMyModel(true)}}
                        className=' bg-[#A21D3C] text-[18px] rounded-[12px] lg:text-[24px] font-[700] text-white p-2 w-full flex justify-center items-center' >
                            + Add new Address
                        </button>
                    </div>
                </div>
                
                    {/* my models */}
                    {/* <div className='hiddens md:blocks'>
                        <EditAddress onClose={handleOnClose} visible={showMyModel}/>
                    </div> */}
                        </>
                    )
                }

                        {/* my models */}
                    <div>
                        <EditAddress 
                        onClose={handleOnClose} 
                        visible={showMyModel} 
                        addressType = {addressType}
                        editMode = {editMode}
                        setEditMode = {setEditMode}
                        SelectedAddressData = {SelectedAddressData}
                        />
                    </div>
            </div>
        </>
    )
}

export default Addresses;
