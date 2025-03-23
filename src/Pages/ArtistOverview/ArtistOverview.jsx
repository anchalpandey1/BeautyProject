import React from 'react'
import AboutArtist from '../../components/AboutArtist/AboutArtist'
import Review from '../../components/Reviews/Review'
import BestBeautyPicks from '../../components/BestBeautyPicks/BestBeautyPicks'
import DiscountOnServies from '../../components/DiscountOnServices/DiscountOnServies'

const ArtistOverview = () => {
    return (
        <div>
            <AboutArtist/>
            <DiscountOnServies/>
            <div className='pb-[1rem] md:pb-0'>
                <Review/>
            </div>
            <div className='hidden md:block'>
                <BestBeautyPicks fromWhere='ArtistOverview'/>
            </div>
        </div>
    )
}

export default ArtistOverview
