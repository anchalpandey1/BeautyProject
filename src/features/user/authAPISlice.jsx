import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPISlice = createApi({
    reducerPath: "authAPIs",
    baseQuery: fetchBaseQuery({ baseUrl: "https://glamgo.onrender.com/api/v1",
        credentials: 'include', // Add this line to include withCredentials:true
    }),


    endpoints: (builder) => ({
        userSignup : builder.mutation({
            query: (formdata) => ({
                url: "/auth/signup",
                method: "POST",
                body: formdata
            })
        }),
        userSignupOTP : builder.mutation({
            query: (formdata) => ({
                url: "/auth/verifySignupOTP",
                method: "POST",
                body: formdata
            })
        }),
        userLogin : builder.mutation({
            query: (formdata) => ({
                url: "/auth/login",
                method: "POST",
                body: formdata
            })
        }),
        userLoginOTP : builder.mutation({
            query: (formdata) => ({
                url: "/auth/verifyLoginOtp",
                method: "POST",
                body: formdata
            })
        }),
        userLogout : builder.query({
            query: () => "auth/logout",
        }),



        artistSignup : builder.mutation({
            query: (formdata) => ({
                url: "/artist/signup",
                method: "POST",
                body: formdata
            })
        }),
        artistSignupOTP : builder.mutation({
            query: (formdata) => ({
                url: "/artist/verifySignupOtp",
                method: "POST",
                body: formdata
            })
        }),
        artistLogin : builder.mutation({
            query: (formdata) => ({
                url: "/artist/login",
                method: "POST",
                body: formdata
            })
        }),
        artistLoginOTP : builder.mutation({
            query: (formdata) => ({
                url: "/artist/verifyLoginOtp",
                method: "POST",
                body: formdata
            })
        }),
        artistLogout : builder.query({
            query: () => "/artist/logout",
            // method: 'GET'
        }),
    }),
});

export const { 
    useUserSignupMutation,
    useUserSignupOTPMutation,
    useUserLoginMutation,
    useUserLoginOTPMutation,
    useUserLogoutQuery,

    useArtistSignupMutation,
    useArtistSignupOTPMutation,
    useArtistLoginMutation,
    useArtistLoginOTPMutation,
    useArtistLogoutQuery,
    } = authAPISlice;