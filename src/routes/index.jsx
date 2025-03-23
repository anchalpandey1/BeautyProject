
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SignupOTP from "../Pages/SignupOTP/SignupOTP";
import LoginOTP from "../Pages/LoginOTP/LoginOTP";
import LandingPage from "../Pages/LandingPage/LandingPage";
import FilterMobileScreen from "../Pages/FilterMobileScreen/FilterMobileScreen";
import FilterMobileScreenProduct from "../Pages/FilterMobileScreen/FilterMobileScreenProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ArtistOverview from "../Pages/ArtistOverview/ArtistOverview";
import ArtistPage from "../Pages/ArtistPage/ArtistPage";
import ArtistServices from "../Pages/ArtistServices/ArtistServices";
import ArtistPortfolio from "../Pages/ArtistPortfolio/ArtistPortfolio";
import Artistshop from "../Pages/Artistshop/Artistshop";
import Categories from "../components/Categories/Categories";
import ArtistPortfolioImage from "../Pages/ArtistPortfolioImage/ArtistPortfolioImage";
import Product from "../Pages/Product/Product";
import ArtistProduct from "../Pages/ArtistProduct/ArtistProduct";
import ArtistDashboard from "../Pages/ArtistDashboard/ArtistDashboard";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Pro from "../../src/Pages/ArtistPro/Pro"
import ArtistProfile from "../Pages/ArtistProfile/ArtistProfile";
import Sidebar from "../Pages/Sidebar/Sidebar";
import Notification from "../Pages/Notification/Notification";
import Layout from "../Pages/Layout/Layout";
import Help from "../Pages/Help/Help";


import CheckoutCart from "../Pages/CheckoutCart/CheckoutCart";
import Shipping from "../Pages/Shipping/Shipping";
import Payment from "../Pages/Payment/Payment";
import ChatRequest from "../Pages/ChatRequest/ChatRequest";
import Chat from "../Pages/Chat/Chat";
import Addresses from "../Pages/Addresses/Addresses";
import Faq from "../Pages/Faq/Faq";
import ContactToUs from "../Pages/ContactToUs/ContactToUs";
import WriteToUs from "../Pages/WriteToUs/WriteToUs";
import SilverPro from "../Pages/SilverPro/SilverPro";
import GoldPro from "../Pages/GoldPro/GoldPro";
import PlatinumPro from "../Pages/PlatinumPro/PlatinumPro";
import ProFaq from "../Pages/ProFaq/ProFaq";
import MyOrders from '../Pages/MyOrders/MyOrders';
import OrderDetails from "../Pages/OrderDetails/OrderDetails";
import UserWishlist from '../Pages/UserWishlist/UserWishlist'

import ProductReview from "../Pages/ProductReview/ProductReview";
import AboutDescription from '../Pages/DescriptionProductApp/AboutDescription'
import SeeAll from '../Pages/SeeAll/SeeAll'


import UserProfile from '../Pages/UserProfile/UserProfile';
import UserPersonalDetails from "../Pages/UserPersonalDetails/UserPersonalDetails";


import { useSelector } from "react-redux";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ArtistProvideServices from "../Pages/ArtistProvideServices/ArtistProvideServices";
import ReviewWrite from "../Pages/ReviewWrite/ReviewWrite";
import AllArtist from "../Pages/AllArtist/AllArtist";


const Routers = () => {
	const accountType = useSelector((state) => state.auth.accountType)
	return (
		<>
		<Routes>
			
				<Route 
					path="/"
					element = {<LandingPage/>}
				/>
				<Route 
					path="/aboutus"
					element = {<AboutUs/>}
				/>
				
				
				{/* sign up route for user and artist */}
				<Route  
					path="/artist/signup"
					element = {<SignUp/>}
				/>
				<Route  
					path="/user/signup" 
					element = {<SignUp/>}
				/>
				{/*   login route for user and artist */}
				<Route  
					path='/artist/login'
					element = {<Login/>}
				/>
				<Route  
					path='/user/login'
					element = {<Login/>}
				/>
				{/* signup otp route for user and artist */}
				<Route  
					path="/artist/signupOTP" 
					element = {<SignupOTP/>}
				/>
				<Route  
					path="/user/signupOTP" 
					element = {<SignupOTP/>}
				/>

				{/* login otp route for user and artist */}
				<Route  
					path="/artist/loginOTP" 
					element = { <LoginOTP/>}
				/>
				<Route  
					path="/user/loginOTP" 
					element = { <LoginOTP/>}
				/>


				<Route  
					path="/landingPage" 
					element = { <LandingPage/>}
				/>
				<Route  
					path="/filterMobileScreen" 
					element = {<FilterMobileScreen/>}
				/>

				<Route 
					path="/allArtist"
					element = {<AllArtist/>}
				/>



				<Route  
					path="/ProFaq" 
					element = {<ProFaq/>}
				/>
            
				<Route path="/artistPage/:id" element={<ArtistPage/>}>
					<Route index element={<ArtistOverview/>}/> 
					<Route path="/artistPage/:id/services" element={<ArtistServices/>}/>
					<Route path="/artistPage/:id/portfolio" element={<ArtistPortfolio/>}/>
					<Route path="/artistPage/:id/shop" element={<Artistshop/>}/>
				</Route>
				<Route path="/portfolio/id" element={<ArtistPortfolioImage/>}/>

				{/* artist products */}
				<Route  
					path="/filterMobileScreenProduct" 
					element = {<FilterMobileScreenProduct/>}
				/>
				<Route  
					path="/product" 
					element = {<Product/>}
				/>
				<Route 
					path='*' 
					element={<ErrorPage/>} 
				/>
				<Route  
					path="/product/:productId" 
					element = {<ArtistProduct/>}
				/> 
				<Route  
					path="/ProductReview" 
					element = {<ProductReview/>}
				/>
				<Route 
					path="/AboutDescription"
					element = {<AboutDescription/>}
				/>
				<Route  
					path="/SeeAll" 
					element = {<SeeAll/>}
				/>
				<Route  
					path="/ReviewWrite" 
					element = {<ReviewWrite/>}
				/>












			<Route  
					path="/ArtistProfile" 
					element = {<ArtistProfile/>}
				/> 

            
				<Route
					path="/CheckoutCart" 
					element = {<CheckoutCart/>}
				/>
				<Route  
					path="/Shippng" 
					element = {<Shipping/>}
				/>
				<Route  
					path="/Payment" 
					element = {<Payment/>}
				/>
				
				<Route  
					path="/Faq" 
					element = {<Faq/>}
				/>
				<Route  
					path="/ContactToUs" 
					element = {<ContactToUs/>}
				/>
				<Route  
					path="/WriteToUs" 
					element = {<WriteToUs/>}
				/>
				<Route  
					path="/SilverPro" 
					element = {<SilverPro/>}
				/>
				<Route  
					path="/GoldPro" 
					element = {<GoldPro/>}
				/>
				<Route  
					path="/PlatinumPro" 
					element = {<PlatinumPro/>}
        		/>
          		<Route  
					path="/ProductReview" 
					element = {<ProductReview/>}
				/>



				{/* routes for user */}
				<>
				{
					accountType === 'User' ?
				<>
					<Route 
					path="/userProfile"
					element = {<UserProfile/>}
				/>
				<Route 
					path="/userDetails"
					element = {<UserPersonalDetails/>}
				/>
				<Route  
					path="/Addresses" 
					element = {<Addresses/>}
				/>
				<Route  
					path="/SilverPro" 
					element = {<SilverPro/>}
				/>
				<Route  
					path="/GoldPro" 
					element = {<GoldPro/>}
				/>
				<Route  
					path="/PlatinumPro" 
					element = {<PlatinumPro/>}
        		/>
				<Route  
					path="/Chat" 
					element = {<Chat/>}
				/>
				<Route  
					path="/ChatRequest" 
					element = {<ChatRequest/>}
				/>
				<Route  
					path="/myOrders" 
					element = {<MyOrders/>}
				/>
				<Route  
					path="/orderDetails" 
					element = {<OrderDetails/>}
				/>
				<Route  
					path="/userWishlist" 
					element = {<UserWishlist/>}
				/>
				</>
				: 
				null
				}
				
				</>


			{/* routes for artist */}
			<Route path="admin" element={<Layout/>}>
				<Route path="Dashboard" element={<ArtistDashboard/>} />
				<Route path="MyServices" element={<ArtistProvideServices/>} />
				<Route path="MyProducts" element={<MyProducts/>} />
				<Route path="Portfolio" element={<Portfolio/>} />
				<Route path="Pro" element={<Pro/>} />
				<Route path="Help" element={<Help/>} />
			</Route>
			<Route
				path="/Notification"
				element={<Notification />}
			/>
			<Route 
				path="/Profile" 
				element={<ArtistProfile />} 
			/>
		</Routes>
		</>
	);
};

export default Routers;
