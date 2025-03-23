import React from 'react'



import logoutImage from '../../assets/Image/logout.png'
import userImage from '../../assets/Image/user.png'
import artistsImage from '../../assets/Image/artists.png'
import shopImage from '../../assets/Image/shop.png'
import heartImage from '../../assets/Image/heart.png'
import diamandImage from '../../assets/Image/diamand.png'


import { useSelector, useDispatch } from 'react-redux';
import { toggleSideMenuBar } from '../../features/user/valueSlice';


import { RxCross1 } from "react-icons/rx";

const MobileMenuBar = () => {
    const dispatch = useDispatch();

    const showsideMenu = useSelector((state) => state.value.ShowSideMenuBar)
    console.log(showsideMenu)

    // when click on hambuger icon
    const  sideMenuBarToggle= ()=>{
        dispatch(toggleSideMenuBar(!showsideMenu))
    }

    return (
        // use transiton effect later
        <div className={`md:hidden fixed transition h-screen ${showsideMenu ? 'left-0':'left-[-100%]'} top-0 z-30 w-[78%] bg-[#F3EFEF] pl-[1.5rem] py-[1.5rem] border border-black'>
            <div className='w-full h-fulls flex flex-col justify-between overflow-hidden transition-all duration-1000 ease-in-out
            font-SulphurPoint font-bold text-[#2D2D2D] text-2xl `} >
                <div>
                    <div className='relative'>
                        <RxCross1 
                        onClick={sideMenuBarToggle}
                        className='absolute left-0 top-1/2 -translate-y-1/2 text-2xl'/>
                        <p className='text-[#504949] text-center'>Menu</p>
                    </div>
                    <div className='py-[2.5rem]'>
                        <div className='flex gap-x-5 items-center py-[14px]'>
                            <img className='w-[30px] h-[30px]' src={userImage} alt="user_image" />
                            <p >Profile</p>
                        </div>
                        <div className='flex gap-x-5 items-center py-[14px]'>
                            <img className='w-[30px] h-[30px]' src={artistsImage} alt="user_image" />
                            <p >Makeup Artists</p>
                        </div>
                        <div className='flex gap-x-5 items-center py-[14px]'>
                            <img className='w-[30px] h-[30px]' src={shopImage} alt="shop_image" />
                            <p >Shop</p>
                        </div>
                        <div className='flex gap-x-5 items-center py-[14px]'>
                            <img className='w-[30px] h-[28px]' src={heartImage} alt="heart_image" />
                            <p >Wishlist</p>
                        </div>
                        <div className='flex gap-x-5 items-center py-[14px]'>
                            <img className='w-[30px] h-[30px]' src={diamandImage} alt="diamand_image" />
                            <p >Glamgo pro</p>
                        </div>

                    </div>
                </div>
                <div className='flex gap-x-5 items-center'>
                    <img className='h-[30px] w-[30px]' src={logoutImage} alt="logout_image" />
                    <p>Logout</p>
                </div>
            </div>
    )
}

export default MobileMenuBar
