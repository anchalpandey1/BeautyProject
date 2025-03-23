import React, { useEffect, useState } from 'react'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import img6 from '../../assets/CheckoutCart/image 3.png'
import img7 from '../../assets/CheckoutCart/Group 261.png'
import img8 from '../../assets/CheckoutCart/Group 640.png'
import img9 from '../../assets/CheckoutCart/minus.png'
import img10 from '../../assets/CheckoutCart/plus.png'
import img11 from '../../assets/CheckoutCart/carbon_delivery-parcel.png'
import img12 from '../../assets/CheckoutCart/icon-park-outline_down.png'
import img13 from '../../assets/CheckoutCart/streamline_discount-percent-coupon.png'

import Box from '@mui/material/Box';

import { useGetItemFromCartQuery } from '../../features/user/userSlice';
import { useUpdateCartItemQuantityMutation } from '../../features/user/userSlice';
import { useRemoveItemFromCartMutation } from '../../features/user/userSlice'


import Modal from '@mui/material/Modal';
import Navbar from '../../components/Navbar/Navbar'
import OrderDetails from './OrderDetails'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const CheckoutCart = () => {

    // get cart items.
    const {data: cartItems , isError , isLoading} = useGetItemFromCartQuery();

    // update cart item quantity.
    const [ updateCartItemQuantity ] = useUpdateCartItemQuantityMutation();

    // remove item from cart
    const [ removeItemFromCart ] = useRemoveItemFromCartMutation();

    // if will display weather we are increasing or descreaing
    const [quantityUpdateStatus, setQuantityUpdateStatus]  = useState();

    // it will store selected item id.
    const [selectedItemId, setSelectItemId] = useState('')

    useEffect(()=>{
        if(quantityUpdateStatus === 'increase'){
            setQuantityUpdate((preval)=>{
                return{
                    ...preval,
                    itemId : selectedItemId,
                    quantityUpdateValue : {
                        action : "+"
                    }
                    
                }
            }
            )
        }else if(quantityUpdateStatus === 'decrease'){
            setQuantityUpdate((preval)=>{
                return{
                    ...preval,
                    itemId : selectedItemId,
                    quantityUpdateValue : {
                        action : "-"
                    }
                    
                }
            })
        }

    },[quantityUpdateStatus])


    const [quantityUpdate , setQuantityUpdate] = useState({
        itemId : '',
        quantityUpdateValue : {
            action : ""
        }
    });


    useEffect(()=>{
        const updateInAPI = async()=>{
            await updateCartItemQuantity(quantityUpdate)
            setQuantityUpdate(quantityUpdate.itemId = "")
            setQuantityUpdateStatus('')
        }
        if(quantityUpdate.itemId){
            updateInAPI()
        }
    },[quantityUpdate])





    // when we increase the item quantity
    const increaseItemQuantity = async(itemId)=>{
        setSelectItemId(itemId)
        setQuantityUpdateStatus('increase')
    }


    // when we decrease the item quantity
    const decreaseItemQuantity = async(itemId)=>{
        setSelectItemId(itemId)
        setQuantityUpdateStatus('decrease')
    }


    const [isOpenn, setIsOpenn] = useState(false);
    const [num, setnum] = useState(1)
    const inc = () => {
        setnum(perCounter => perCounter + 1)
    }
    const dec = () => {
        if (num >= 2) {
            setnum(perCounter => perCounter - 1)
        }
        else {
            setnum(num)
        }
    }
    const [numb, setnumb] = useState(1)
    const incr = () => {
        setnumb(perCounte => perCounte + 1)
    }
    const dece = () => {
        if (numb >= 2) {
            setnumb(perCounte => perCounte - 1)
        }
        else {
            setnumb(numb)
        }
    }

    const toggleDropdownn = () => {
        setIsOpenn(!isOpenn);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = async(itemId) => {
        setOpen(true)
        console.log('item id is', itemId)
        await removeItemFromCart(itemId)
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] '>
                <div className=' w-full h-[84px] shadow-lg  items-center flex justify-between px-5'>
                    <div className=' flex flex-row  gap-8 lg:gap-10 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img1} alt="" />
                        <span className=' font-SulphurPoint font-[700] text-[18px] lg:text-[22px]'>
                            Shopping Cart <span className=' font-Sunflower font-[700] text-[22px] text-[#A21D3C]'>(2)</span>
                        </span>
                    </div>
                    <div className=' flex flex-row gap-2 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img2} alt="" />
                        <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                        <img className=' hidden lg:block w-[60px] h-[60px]' src={img4} alt="" />
                        <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                        <img className=' hidden lg:block w-[60px] h-[60px]' src={img5} alt="" />
                    </div>

                </div>
                
                {
                    isError && 
                    <div>error accoured</div>
                }


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
                    cartItems ?
                
                <div className='flex flex-col lg:flex-row  justify-center gap-4   mt-8    font-SulphurPoint font-[700] text-[18px]'>
                    
                    <div className='flex flex-col mt-4'>
                        <div className='  rounded-[12px] gap-1 bg-white  w-full' >
                            {
                                cartItems.items.map((item)=>{
                                    return(
                                        <div key={item.itemId} className=' borders py-5 pl-5 pr-2 '>
                                <div className='flex flex-row gap-3'>
                                    <img className=' w-[80px] h-[100px] lg:w-[200px] lg:h-[250px]' 
                                    src={img6} 
                                    // src={`https://glamgo.onrender.com`+ item.image}
                                    alt="" />
                                    <div className=' flex flex-col gap-2 lg:gap-5 w-fit'>
                                        <p className='text-[18px] font-[700] mt-2'>{item.productName}</p>
                                        <div className=' flex flex-row items-center gap-3 '>
                                            <img className=' w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]' src={img7} alt="" />
                                            <p className='text-[12px] font-[400]'>Dreamy glow - 3g</p>
                                        </div>
                                        <div className=' flex flex-row items-center gap-3  '>
                                            <img className=' w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]' src={img11} alt="" />
                                            <p className='text-[12px] font-[400]'>{item.delivery}</p>
                                        </div>
                                        <p className=' hidden lg:block'>₹{item.totalCost}/-</p>
                                    </div>
                                    <div className=' flex flex-col h-full lg:ml-8  gap-32 font-SulphurPoint lg:items-end font-[700] text-[18px]'>
                                        <img className='w-[36px] h-[36px] lg:w-[60px] lg:h-[60px] hover:cursor-pointer' onClick={()=>{handleOpen(item.itemId)}} src={img8} alt="" />
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                

                                            </Box>
                                        </Modal>
                                        <div className=' hidden lg:flex flex-row gap-3 items-center '>
                                            <img className='  w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:cursor-pointer' onClick={()=>{decreaseItemQuantity(item.itemId)}} src={img9} alt="" />
                                            {/* <p>{num}</p> */}
                                            <p>{item.quantity}</p>
                                            <img className=' w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:cursor-pointer' onClick={()=>{increaseItemQuantity(item.itemId)}} src={img10} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex lg:hidden justify-between px-2'>
                                    <div className=' flex flex-row gap-3 items-center '>
                                        <img className='  w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:cursor-pointer' onClick={()=>{decreaseItemQuantity(item.itemId)}} src={img9} alt="" />
                                        {/* <p>{num}</p> */}
                                        <p>{item.quantity}</p>
                                        <img className=' w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:cursor-pointer' onClick={()=>{increaseItemQuantity(item.itemId)}} src={img10} alt="" />
                                    </div>
                                    <p className=''>₹{item.totalCost}/-</p>
                                </div>
                            </div>
                                    )
                                })
                            }
                        </div>
                        <div className="relative inline-block my-4 text-left h-fit w-full  rounded-[12px] gap-1 bg-white ">
                            <div className=' flex flex-row justify-between w-full items-center  p-4 border'>
                                <div className=' flex flex-row  gap-5 items-center'>
                                    <img className=' w-[24px] h-[24px]  lg:w-[40px] lg:h-[40px]' src={img13} alt="" />
                                    <p className=' text-[18px] font-[700] lg:text-[24px]'>Coupons & Offers</p>
                                </div>
                                <div>
                                    <img onClick={toggleDropdownn} className='w-[24px] h-[24px]'
                                        type="button" src={img12} alt="" />
                                </div>
                            </div>

                            {isOpenn && (
                                <div className="origin-top-right absolute flex flex-col gap-5 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className=' flex w-full justify-between p-3 items-center'>
                                        <div className=' flex  w-[50%] flex-col gap-2 '>
                                            <p className='text-[#2D2D2D] text-[19px] font-[900]'>GLAMGO10</p>
                                            <p className='text-[#989898] text-[16px] font-[400]'>Flat 10% off for your first order on Glamgo</p>
                                        </div>
                                        <button className=' w-[35%] border-[#C67689] border-solid border-2 h-10  px-8 py-2 rounded-[12px] items-center justify-center text-[18px] font-[900] text-[#A21D3C]' >Apply Coupon</button>
                                    </div>
                                    <div className=' flex w-full justify-between p-3 items-center'>
                                        <div className=' flex  w-[50%] flex-col gap-2 '>
                                            <p className='text-[#2D2D2D] text-[19px] font-[900]'>GLAMGO10</p>
                                            <p className='text-[#989898] text-[16px] font-[400]'>Flat 10% off for your first order on Glamgo</p>
                                        </div>
                                        <button className=' w-[35%] border-[#C67689] border-solid border-2 h-10  px-8 py-2 rounded-[12px] items-center justify-center text-[18px] font-[900] text-[#A21D3C]' >Apply Coupon</button>
                                    </div>
                                    <div className=' flex w-full justify-between p-3 items-center'>
                                        <div className=' flex  w-[50%] flex-col gap-2 '>
                                            <p className='text-[#2D2D2D] text-[19px] font-[900]'>GLAMGO10</p>
                                            <p className='text-[#989898] text-[16px] font-[400]'>Flat 10% off for your first order on Glamgo</p>
                                        </div>
                                        <button className=' w-[35%] border-[#C67689] border-solid border-2 h-10  px-8 py-2 rounded-[12px] items-center justify-center text-[18px] font-[900] text-[#A21D3C]' >Apply Coupon</button>
                                    </div>
                                    <div className=' flex w-full justify-between p-3 items-center'>
                                        <div className=' flex  w-[50%] flex-col gap-2 '>
                                            <p className='text-[#2D2D2D] text-[19px] font-[900]'>GLAMGO10</p>
                                            <p className='text-[#989898] text-[16px] font-[400]'>Flat 10% off for your first order on Glamgo</p>
                                        </div>
                                        <button className=' w-[35%] border-[#C67689] border-solid border-2 h-10  px-8 py-2 rounded-[12px] items-center justify-center text-[18px] font-[900] text-[#A21D3C]' >Apply Coupon</button>
                                    </div>
                                    <div className=' flex w-full justify-between p-3 items-center'>
                                        <div className=' flex  w-[50%] flex-col gap-2 '>
                                            <p className='text-[#2D2D2D] text-[19px] font-[900]'>GLAMGO10</p>
                                            <p className='text-[#989898] text-[16px] font-[400]'>Flat 10% off for your first order on Glamgo</p>
                                        </div>
                                        <button className=' w-[35%] border-[#C67689] border-solid border-2 h-10  px-8 py-2 rounded-[12px] items-center justify-center text-[18px] font-[900] text-[#A21D3C]' >Apply Coupon</button>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                    {/* Order Details */}
                    <OrderDetails />
                    

                </div>:
                null
                }
            </div>


        </>
    )
}

export default CheckoutCart
