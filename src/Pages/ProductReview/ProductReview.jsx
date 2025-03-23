
import React from 'react'

import Heading from '../../components/Heading/Heading'
import Navbar from '../../components/Navbar/Navbar'
import ChooseByCategory from '../../components/ChooseByCategory/ChooseByCategory'
import BestBeautyPicks from '../../components/BestBeautyPicks/BestBeautyPicks'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import ArtistsSpotlight from '../../components/ArtistsSpotlight/ArtistsSpotlight'


import AppBox from '../../components/ArtistProductBox/AppBox'




import Footer from '../../components/Footer/Footer'
import ArtistNavbar from '../../components/ArtistNavbar/ArtistNavbar';
import ArtistProductNavbar from '../../components/ArtistNavbar/ArtistProductNavbar';
import ProductReview from '../../components/ProductReview/ProductReview';
import ProductReviewFull from '../../components/ProductReviewFull/ProductReviewFull';

const Product = () => {
    return (
        <div className='bg-[#F3EFEF]'>
        <div  className='hidden md:block'>
         <ArtistNavbar />
         </div>
         
            <ArtistProductNavbar />
            <div className='hidden md:block'>
                <Navbar/>
                <Heading fromWhere = {'/filterMobileScreenProduct'}/>
            </div>         
            <AppBox/> 
  <ProductReviewFull/>
<Footer/>

        </div>
    )


    }


           
          
export default Product

  
 
