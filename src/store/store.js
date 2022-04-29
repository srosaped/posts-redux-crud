import  { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PostsData } from "../services/api";

export const store = configureStore({
    reducer: {
        [PostsData.reducerPath]: PostsData.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(PostsData.middleware),
});

setupListeners(store.dispatch());