import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const PostsData = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_BASE_URL
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`
        })
    })
})

export const  { useGetPostsQuery } = PostsData;