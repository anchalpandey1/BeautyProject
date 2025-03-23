import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishlistAPISlice = createApi({
    reducerPath: "wishlistAPIs",
    baseQuery: fetchBaseQuery({ baseUrl: "https://glamgo.onrender.com/api/v1",

      credentials: 'include', // Add this line to include withCredentials:true
    }),

    // tagTypes : ["user", "userPrfile"],

    endpoints: (builder) => ({
       
        //wishlist api
        getProductWishlist : builder.query({
            query: () => "/wishlist/wishlistedProducts",
            providesTags : ["WishlistItem"]
        }),
        getArtistWishlist : builder.query({
            query: () => "/wishlist/wishlistedArtists",
            providesTags : ["WishlistItem"]
        }),
//addwishlist
        addToWishlist: builder.mutation({
            query: (id) => ({
                url: `/wishlist/addToWishlist/${id}`,
                method: "POST",
               
            }),
            invalidatesTags : ["WishlistItem"]
        }),    
//remove wishlist
        removeFromWishlsit: builder.mutation({
            query: (id) => ({
                url : `/wishlist/removeWishlistedItem/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["WishlistItem"]
        }),


    }),
});

export 
    const { 
   
    useGetProductWishlistQuery,
    useGetArtistWishlistQuery,
    useAddToWishlistMutation,
    useRemoveFromWishlsitMutation
    } = wishlistAPISlice;