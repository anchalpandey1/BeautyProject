import React from 'react'
import NavbarArtist from '../../components/Navbar/NavbarArtist'
import Sidebar from '../Sidebar/Sidebar'

const Notification = () => {
    return (
        <>
            <NavbarArtist />
            <div className='   font-SulphurPoint flex '>

                <Sidebar />
                <div className=' p-2 lg:p-8 bg-[#F3EFEF] w-full lg:w-[80%] '>
                    <p className=' text-[28px] font-[700]'>Notifications</p>
                    <div className=' flex flex-col gap-3 mt-5'>
                        <div className=' rounded-[12px] bg-white p-5 '>
                            <div className=' flex justify-between'>
                                <p className=' text-[#A21D3C] text-[24px] font-[700]'>New chat request</p>
                                <p className=' tetx-[#C38E67] text-[16px] font-[400] '>30s ago</p>
                            </div>
                            <p className=' mt-2 text-[#504949] text-[20px] font-[400]'>A new chat request from Amy</p>
                        </div>
                        <div className=' rounded-[12px] bg-white p-5 '>
                            <div className=' flex justify-between'>
                                <p className=' text-[#A21D3C] text-[24px] font-[700]'>New chat request</p>
                                <p className=' tetx-[#C38E67] text-[16px] font-[400] '>30s ago</p>
                            </div>
                            <p className=' mt-2 text-[#504949] text-[20px] font-[400]'>A new chat request from Amy</p>
                        </div>

                        <div className=' rounded-[12px] bg-white p-5 '>
                            <div className=' flex justify-between'>
                                <p className=' text-[#A21D3C] text-[24px] font-[700]'>New chat request</p>
                                <p className=' tetx-[#C38E67] text-[16px] font-[400] '>30s ago</p>
                            </div>
                            <p className=' mt-2 text-[#504949] text-[20px] font-[400]'>A new chat request from Amy</p>
                        </div>


                    </div>
                    <p className=' text-[#504949] text-[24px] font-[700] mt-5 ml-5'>Recent</p>
                    <div className=' flex flex-col gap-3 mt-5'>
                        <div className=' rounded-[12px] bg-[#E5E0E0] p-5 '>
                            <div className=' flex justify-between'>
                                <p className=' text-[#504949] text-[24px] font-[700]'>New chat request</p>
                                <p className=' text-[#989898] text-[16px] font-[400] '>30s ago</p>
                            </div>
                            <p className=' mt-2 text-[#504949] text-[20px] font-[400]'>A new chat request from Amy</p>
                        </div>
                        <div className=' rounded-[12px] bg-[#E5E0E0] p-5 '>
                            <div className=' flex justify-between'>
                                <p className=' text-[#504949] text-[24px] font-[700]'>New chat request</p>
                                <p className=' text-[#989898] text-[16px] font-[400] '>30s ago</p>
                            </div>
                            <p className=' mt-2 text-[#504949] text-[20px] font-[400]'>A new chat request from Amy</p>
                        </div>

                        <div className=' rounded-[12px] bg-[#E5E0E0] p-5 '>
                            <div className=' flex justify-between'>
                                <p className=' text-[#504949] text-[24px] font-[700]'>New chat request</p>
                                <p className=' text-[#989898] text-[16px] font-[400] '>30s ago</p>
                            </div>
                            <p className=' mt-2 text-[#504949] text-[20px] font-[400]'>A new chat request from Amy</p>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Notification