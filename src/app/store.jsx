import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../features/user/userSlice";
import valueSlice from "../features/user/valueSlice";
import authSlice from "../features/user/authSlice";
import { userSlice } from "../features/user/userSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { authAPISlice } from "../features/user/authAPISlice";
import { artistAPISlice } from "../features/user/artistAPISlice";
import { wishlistAPISlice } from "../features/user/wishlistAPISlice";


export const store = configureStore({
    reducer : {
        auth : authSlice,
        value : valueSlice,
        [userSlice.reducerPath] : userSlice.reducer,
        [authAPISlice.reducerPath] : authAPISlice.reducer,
        [artistAPISlice.reducerPath] : artistAPISlice.reducer,
        [wishlistAPISlice.reducerPath] : wishlistAPISlice.reducer,

    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            userSlice.middleware,
            authAPISlice.middleware,
            artistAPISlice.middleware,
            // wishlistAPISlice.middleware
            wishlistAPISlice.middleware

        ),
})


setupListeners(store.dispatch);

