/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'LoginImage' :  'url(/src/assets/Image/LoginImage.png)',
        'SignupImage' : 'url(/src/assets/Image/SignupImage.png)',
        'SignupOTPImage' : 'url(/src/assets/Image/SignupOTPImage.png)',
        'LoginOTPImage' : 'url(/src/assets/Image/LoginOTPImage.png)',

        
        'UserProfileBannerImageMobile' : 'url(src/assets/Image/userBannerImage.png)',
        'UserProfileBannerImageDesktop' : 'url(src/assets/Image/userBannerImage2.png)',
        'AboutUsImage' : "url(src/assets/AboutUs/AboutUs.png)",

          // pro images for artist and user
        'SliverPro' :'url(/src/assets/ArtistPro/SliverPro/Rectangle 651.png)',
        'GoldPro' :'url(/src/assets/ArtistPro/GoldPro/Rectangle 652.png)',
        'PlatinumPro' :'url(/src/assets/ArtistPro/PlatinumPro/Rectangle 651.png)',
        // this is old pro image for artist and user
        // 'SliverPro' : 'url(/src/assets/SliverPro/Rectangle 651.png)',
        // 'GoldPro' : 'url(/src/assets/GoldPro/Rectangle 652.png)',
        //'PlatinumPro' : 'url(/src/assets/PlatinumPro/Rectangle 651.png)',

      },
      fontFamily: {
        Inter : 'Inter',
        Roboto : 'Roboto',
        SulphurPoint : 'Sulphur Point',
        OpenSans : 'Open Sans',
        DMSans : 'DM Sans' ,
        Sunflower : 'Sunflower'
      },
      boxShadow: {
        'GlamgoLogo': '0px 2px 10px 0px #00000040',
        'LoginPageSocialIcon': '0px 2px 4px 0px #00000026',
        'MobileNoBox' : '0px 1px 8px 0px #0000001A',
        'GetOTPBtn' : '0px 0px 14px 0px #0000001A',
        'SocialIcon' : '0px 2px 4px 0px #110E0E26',
        'CardBorder' : '0px 0px 20px 0px #00000014',
        'CardImageBorder': '0px 0px 10.399999618530273px 0px #00000040',
        'FooterBox': '0px -2px 40.70000076293945px 0px #00000040',
        'NewsletterInputBox': '0px 0px 20px 0px #00000040',
        'NewsletterButton': '0px 0px 8px 0px #484B53',
        'ReviewImageSmall': '0px 0px 8px 0px #00000026',
        'ReviewImage' : '16px 11px 10px 0px #00000040',
        'ArtistsSpotlight': '0px 0px 20px 0px #00000014',
        'welcomeBox': '0px 0px 8.399999618530273px 0px #0000000D',
        'SearchBar': '0px 0px 20px 0px #0000001A',
        'MobileSearchBar': '0px 0px 6.300000190734863px 0px #00000014',
        'wishlistIcon': '0px 0px 10px 0px #0000001A',
        'AppBottomNavbar': '0px 2px 48px 0px #0000001F',
        'categoryBox': '0px 0px 6.300000190734863px 0px #00000014',
        'homeImageSlider': '0px 0px 25px 0px #00000061',
        'ArtistBackgroundBox': '0px 0px 20px 0px #00000014',
        'ArtistDetailsCard': '0px 0px 20px 0px #00000014',
        'DiscountCard': '0px 0px 8px 0px #0000000D',
        'ArtistNavbar': '0px 2px 8px 0px #0000001A',
        'serviceNiche': '0px 0px 6.5px 0px #00000040',
        'artistServiceCategory': '-2px 2px 10px 0px #0000001A',
        'portfolioShowMore': '0px 0px 10px 0px #00000033',
        'productCard': '0px 2px 48px 0px #0000000A',
        'productCardSmall': '0px 0px 20px 0px #00000014',








      },
      screens:{
        'xs': '400px',
      },
      keyframes : {
        slideLeftToRight : {
          from: { right: '30%' }
        },
        slideRightToLeft : {
          from : { left: '30%'}
        },
        slideLeftToRightForSmallDevice : {
          from : { right : '100%'}
        }
      },
      animation: {
        'slide-left-to-right' : 'slideLeftToRight 550ms ease-out',
        'slide-right-to-left' : 'slideRightToLeft 550ms ease-out',
        'slide-left-to-right-for-small' : 'slideLeftToRightForSmallDevice 550ms ease-out'
      }
    },
  },
  plugins: [],
}

