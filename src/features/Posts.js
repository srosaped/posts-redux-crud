import { createSlice } from "@reduxjs/toolkit";

import { PostsData } from "../Api";

export const postSlice = createSlice({

    name: "posts",
    initialState: { value: PostsData },
    reducers: {
        addPost: (state, action) => {
            state.value.push(action.payload);
        },
        deletePost: (state, action) => {
            state.value = state.value.filter((post) => post.id !== action.payload.id)
        },
        updatePost: (state, action) => {
            state.value.map((post) => {
                if (post.id === action.payload.id ) {
                    post.priority = action.payload.priority;
                    post.title = action.payload.title;
                    post.body = action.payload.body;
                }
            })
        },
    }
});

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;