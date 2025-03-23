
import React from 'react'

import Heading from '../../components/Heading/Heading'
import Navbar from '../../components/Navbar/Navbar'

import Footer from '../../components/Footer/Footer'
import ArtistNavbar from '../../components/ArtistNavbar/ArtistNavbar';
import ArtistDescriptionNavbar from '../../components/ArtistNavbar/ArtistDescriptionNavbar';
import AboutProductApp from '../../components/AboutProduct/AboutProductApp';

const AboutDescription = () => {
    return (
        <div className='bg-[#F3EFEF]'>
        <div  className='hidden md:block'>
         <ArtistNavbar />
         </div>
         
            <ArtistDescriptionNavbar />
               
            
  <AboutProductApp/>


        </div>
    )


    }


           
          
export default AboutDescription

  
 
