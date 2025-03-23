import React from 'react'
import artistImage from '../../assets/Image/artistImage.png'

const Artistdemo = () => {
    return (
        <div className='w-[85%] mx-auto border border-black py-6 relative'>
            <div className='bg-red-900 absolute left-0 right-0 h-[15rem]'>
                <div className='border-2 border-green-900 flex gap-4'>
                    <img src={artistImage} alt="" />
                    <div className='flex flex-col justify-between'>
                        <p>Hello world is </p>
                        <p>Hello world is </p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Artistdemo
