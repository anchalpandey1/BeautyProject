import React, { useState } from 'react'
import img1 from '../../assets/NavbarArtist/Rectangle 609.png'
import img2 from '../../assets/NavbarArtist/Ellipse 68.png'
import img3 from '../../assets/NavbarArtist/fluent_chat-16-regular.png'
import img4 from '../../assets/NavbarArtist/basil_notification-outline.png'
import img5 from '../../assets/NavbarArtist/Icon.png'
import img6 from '../../assets/NavbarArtist/basil_notification-outline5.png'
import img7 from '../../assets/NavbarArtist/lets-icons_user-fill.png'
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import Menubar from '../Menubar/Menubar'


const NavbarArtist = () => {
  const [showMyModel, setShowMyModel] = useState(false)

  const handleOnClose = () => {
    console.log('your closed file will run here')
    setShowMyModel(false)
    document.body.style.overflow = 'auto';
  }

  const showModelBox = () => {
    setShowMyModel(true)
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <div className='   font-SulphurPoint '>
        <div className=' hidden lg:flex bg-[#A21D3C]  items-center  justify-between px-10'>
          <img className=' w-[200px] h-[78px]' src={img1} alt="" />
          <div className=' items-center flex gap-2 '>
            <div className=' flex justify-center bg-[#E5CAD0] mr-3 rounded-full items-center w-[50px] h-[50px]'>
              <BiMessageRoundedDetail className=' text-[24px] text-[#A21D3C]' />
              {/* <img className=' w-[24px] h-[24px]' src={img3} alt="" /> */}
            </div>
            <NavLink to="/Notification" >
              <div className=' flex justify-center bg-[#E5CAD0] rounded-full items-center w-[50px] h-[50px]'>
                <IoMdNotificationsOutline className=' text-[24px] text-[#A21D3C]' />
              </div>
            </NavLink>

            <p className=' text-white text-[24px] ml-2 font-[700]'>Hello Abhigyna</p>
            <NavLink
              to="/Profile"
            >
              <img className=' w-[120px] h-[120px]' src={img2} alt="" />
            </NavLink>

          </div>
        </div>
        <div className=' flex lg:hidden  bg-[#A21D3C]  items-center  justify-between px-2'>

          <RxHamburgerMenu onClick={() => { showModelBox() }} className=' text-[24px] text-[#FFFFFF]' />
          {/* <img className=' w-[24px] h-[20px]' src={img5} alt="" /> */}
          <img className=' w-[150px] h-[78px]' src={img1} alt="" />
          <div className=' flex justify-between gap-5'>
            <NavLink to="/Notification" >
              <IoMdNotificationsOutline className=' text-[24px] text-[#FFFFFF]' />
            </NavLink>
            <NavLink
              to="/Profile"
            >
              <IoPersonOutline className=' text-[24px] text-[#FFFFFF]' />
            </NavLink>
          </div>
        </div>
        <Menubar onClose={handleOnClose} visible={showMyModel} />
      </div>

    </>
  )
}

export default NavbarArtist