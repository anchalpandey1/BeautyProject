import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
    reducerPath: "userAPIs",
    baseQuery: fetchBaseQuery({ baseUrl: "https://glamgo.onrender.com/api/v1",

      credentials: 'include', // Add this line to include withCredentials:true
    }),

    tagTypes : ["user", "userPrfile"],

    endpoints: (builder) => ({
        getUserProfile : builder.query({
            query: () => "/auth/profile",
            providesTags : ["userPrfile"]
        }),
        updateUserProfile : builder.mutation({
            query: (updateProfile) => ({
                url: "/auth/updateProfile",
                method: "PUT",
                body: updateProfile,
            }),
            invalidatesTags : ["userPrfile"]
        }),
        getUserAddress : builder.query({
            query: () => "/auth/address",
            providesTags : ["user"]
        }),
        addUserAddress: builder.mutation({
            query: (newAddress) => ({
                url: "/auth/createaddress",
                method: "POST",
                body: newAddress,
            }),
            invalidatesTags : ["user"]
        }),
        updateUserAddress: builder.mutation({
            query: (updatedAddress) => ({
                url : `/auth/updateAddress/${updatedAddress.id}`,
                method : "PUT",
                body: updatedAddress.data
            }),
            invalidatesTags : ["user"]
        }),
        deleteUserAddress: builder.mutation({
            query: (id) => ({
                url : `/auth/deleteAddress/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["user"]
        }),


        // Get Item From Cart
        getItemFromCart : builder.query({
            query: () => "/cart/getCartItems",
            providesTags : ["CartItems"]
        }),
        
        AddItemToCart : builder.mutation({
            query: (productId) => ({
                url : `/cart/addToCart/${productId}`,
                method : "POST",
            }),
            invalidatesTags : ["CartItems"]
        }),
        updateCartItemQuantity : builder.mutation({
            query: (item) => ({
                url : `/cart/updateCartItemQuantity/${item.itemId}`,
                method: "PUT",
                body : item.quantityUpdateValue,
            }),
            invalidatesTags : ["CartItems"]
        }),
        removeItemFromCart: builder.mutation({
            query: (id) => ({
                url : `/cart/removeCartItem/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["CartItems"]
        }),

      
    }),
});

export 
    const { 
    useGetUserProfileQuery ,
    useUpdateUserProfileMutation,
    useGetUserAddressQuery , 
    useAddUserAddressMutation , 
    useUpdateUserAddressMutation , 
    useDeleteUserAddressMutation ,


    useGetItemFromCartQuery,
    useAddItemToCartMutation,
    useUpdateCartItemQuantityMutation,
    useRemoveItemFromCartMutation
   
    } = userSlice;