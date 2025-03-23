import React from 'react'
import ArtistNiche from '../../components/ArtistNiche/ArtistNiche'
import ArtistNicheServices from '../../components/ArtistNicheServices/ArtistNicheServices'

import { useSelector } from 'react-redux';

const ArtistServices = () => {
    const selectedArtistServicesCategory = useSelector((state) => state.value.selectedArtistServicesCategory)
    return (
        <div>
            <ArtistNiche/>
            {
                selectedArtistServicesCategory ? 
                <ArtistNicheServices/>
                :
                null
            }
            
            <div className='md:hidden fixed bottom-0 w-full h-[75px] bg-[#DDDDDD] bg-[#b82f4f]s flex items-center justify-center'> 
                <p className='font-Roboto font-bold cursor-pointer text-lg text-[#504949] text-whites'>Send Chat Request</p> 
            </div>
        </div>
    )
}

export default ArtistServices
