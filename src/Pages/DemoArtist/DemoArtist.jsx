import React from 'react'

import { useGetUserAddressQuery } from '../../features/user/userSlice'

const DemoArtist = () => {

    const { data, isSuccess, isError, error, isLoading} = useGetUserAddressQuery(); 

    if(data){
        console.log(data)
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {
                isError && <h1 className='text-2xl text-green-900'>error accoured</h1>
            }
            {
                isLoading && <h1 className='text-2xl text-green-900'>page loading ....</h1>
            }
            {
                isSuccess && <h1 className='text-2xl text-green-900'>user address</h1>
            }
        </div>
    )
}

export default DemoArtist
