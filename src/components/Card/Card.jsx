import React, { useState, useEffect } from 'react';
import { register } from "swiper/element/bundle";
import CardPicks from './CardPicks';
import { Link } from 'react-router-dom';

import image1 from '../../assets/Image/popularProductImg1.png';
// import image2 from '../../assets/Image/popularProductImg2.png';
// import image3 from '../../assets/Image/popularProductImg3.png';
// import image4 from '../../assets/Image/product4.png';
// import image5 from '../../assets/Image/product5.png';
// import image6 from '../../assets/Image/product6.png';
import Filter from "../../components/FilterCategory/Filter";
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading'

// import { useHistory } from 'react-router-dom';

import { useGetAllArtistProductsQuery } from '../../features/user/artistAPISlice'
import { useGetSingleProductQuery } from '../../features/user/artistAPISlice';
// import { useAddWishlistMutation } from '../../features/user/wishlistAPISlice';
import { useNavigate } from 'react-router-dom';
register();

const Card = () => {
  const navigate = useNavigate();
  // const history = useHistory();

  const SingleProduct = (productId) => {
    // history.push(`/product/${productId}`);
    console.log(`/product/${productId}`)
    navigate(`/product/${productId}`, { replace: true })
  }
  const { data: allArtistProducts, isError, isLoading } = useGetAllArtistProductsQuery()
  if (allArtistProducts) {
    console.log("get all data", allArtistProducts.products)
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [displayedItems, setDisplayedItems] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onClick1 = (product) => {

  };
  const loadMore = () => {
    setDisplayedItems(displayedItems + 3);
  };
  if (isMobile) {
    return null;
  }

  //add wishlist 
  // const [addWishlist] = useAddWishlistMutation();


  const UserLogout = async () => {
    try {
      const response = await axios.get(artist / product / getSingleProduct, { withCredentials: true });
      // Handle successful response here
      console.log('Data received:', response.data);

      // it will clear user authentication data from local stroage 
      dispatch(removeAuthentication())
    } catch (error) {
      console.log(error)
    }

  }


  // const val = [

  //   { image: image2, servicesoffer: "NYX Lip Tint- Red", price: "699", rating: "5.0" },
  //   { image: image3, servicesoffer: "M-Perfect BB cream", price: "549", rating: "5.0" },
  //   { image: image4, servicesoffer: "MAC Compact", price: "699", rating: "5.0" },
  //   { image: image5, servicesoffer: "Coconut Mist", price: "699", rating: "5.0" },
  //   { image: image6, servicesoffer: "Syagi face serum", price: "549", rating: "5.0" },
  //   { image: image3, servicesoffer: "M-Perfect BB cream", price: "699", rating: "5.0" },
  //   { image: image2, servicesoffer: "NYX Lip Tint- Red", price: "699", rating: "5.0" },
  //   { image: image1, servicesoffer: "NYX Eyeshadow", price: "549", rating: "5.0" },

  // ];

  return (
    <div className='borders border-black w-full bg-[#F3EFEF] pb-[1rem] min-h-[19rem]s lg:min-h-[21rem]s xl:min-h-[25rem]s h-full'>


      <div className="container mx-auto my-8 ">
        <div className="flex justify-center items-center py-2 xl:py-3">
          <h4 className="font-SulphurPoint font-normal text-center text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D] mb-4">
            All Products
          </h4>
        </div>

        {/* <div className="flex">
        {window.innerWidth >= 768 && (
          <div className="w-1/4 p-4">
             <Filter />
          </div>
        )} */}
        <div className='flex gap-3'>
          {/* filter screen */}
          <div className='m-2 hidden w-fit md:block ml-10'>
            <Filter />
            {/* <div className='bg-[#FFFFFF] rounded-[24px] p-2'>
                    <div className='flex gap-2 items-center'> 
                        <img className='border border-black w-[30px] h-[30px]'  src={filterIcon} alt="" />
                        <h3 className='font-SulphurPoint font-bold text-3xl text-[#D66F11]'>Filters</h3>
                    </div>

                </div> */}
          </div>

          <div className="w-3/4 ml-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {
                allArtistProducts && (
                  <>
                    {
                      allArtistProducts.products.map((val, index) => {
                        return (

                          <div
                          // onClick={()=>{SingleProduct(val._id)}}
                          // productName={val.productName}
                          >
                           <CardPicks image={image1} data={val} productName={val.productName} price={val.price} rating={val.ratings}>

                           </CardPicks>
                          
                       
                           

                          </div>



                          //  <div></div>


                        )
                      }
                      )
                    }
                  </>
                )
              }

            </div>

            {displayedItems < 6 && (
              <button
                className="mt-4 mx-auto w-[90%] bg-white-800 text-gray-600 px-4 py-2 rounded border border-gray-600 hover:bg-white hover:text-gray-600"
                onClick={loadMore}
              >
                Load More
              </button>
            )}
          </div>


        </div>
      </div>
    </div>
  );
};

export default Card;
