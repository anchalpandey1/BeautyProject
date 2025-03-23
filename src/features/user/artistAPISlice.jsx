import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const artistAPISlice = createApi({
    reducerPath: "artistAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://glamgo.onrender.com/api/v1",
        credentials: 'include', // Add this line to include withCredentials:true
    }),


    endpoints: (builder) => ({
        getArtistProfile : builder.query({
            query: () => "/artist/showProfile",
            providesTags : ["artistProfile"]
        }),
        updateArtistProfile: builder.mutation({
            query: (updatedProfile) => ({
                url : '/artist/updateProfile',
                method : "PUT",
                body: updatedProfile
            }),
            invalidatesTags : ["artistProfile"]
        }),             
        getAllArtistProducts : builder.query({
            query: () => "/artist/product/getAllProduct",
            providesTags : ["artistProducts"]
        }),
         
         getAllArtistServices : builder.query({
            query: () => "/artist/services/allServices",
            providesTags : ["artistServices"]
        }),
        addArtistServices: builder.mutation({
            query: (newServce) => ({
                url: "/artist/services/createService",
                method: "POST",
                body: newServce,
            }),
            invalidatesTags : ["artistServices"]
        }),    
        updateArtistServices: builder.mutation({
            query: (updatedService) => ({
                url : `artist/services/updateService/${updatedService.id}`,
                method : "PUT",
                body: updatedService.data
            }),
            invalidatesTags : ["artistServices"]
        }),
        deleteArtistServices: builder.mutation({
            query: (id) => ({
                url : `artist/services/deleteService/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["artistServices"]
        }),
        addArtistProducts: builder.mutation({
            query: (newProducts) => ({
                url: "/artist/product/addProduct",
                method: "POST",
                body: newProducts,
            }),
            invalidatesTags : ["artistProducts"]
        }),
               //Update api integration
       updateArtistProducts: builder.mutation({
            query: (updatedProduct) => ({
                url : `/artist/product/updateProduct/${updatedProduct.id}`,
                method : "PUT",
                body: updatedProduct.data
            }),
            invalidatesTags : ["artistProducts"]
        }),
        deleteArtistProduct: builder.mutation({
            query: (id) => ({
                url : `artist/product/deleteProduct/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["artistProducts"]
        }),
        getSingleProduct : builder.query({
            query: (id) => `artist/product/getSingleProduct/${id}`,
            providesTags : ["artistProducts"]
        }),
    }),
});

export const {  
    useGetArtistProfileQuery,
    useUpdateArtistProfileMutation,
    useGetAllArtistProductsQuery,
    useGetAllArtistServicesQuery,
    useAddArtistServicesMutation,
    useUpdateArtistServicesMutation,
    useDeleteArtistServicesMutation,
    useAddArtistProductsMutation,
    useUpdateArtistProductsMutation,
    useDeleteArtistProductMutation,
    useGetSingleProductQuery
   } = artistAPISlice;
