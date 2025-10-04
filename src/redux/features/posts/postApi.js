import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => '/posts'
        }),
        getPostById: builder.query({

            query: (id) => `/posts/${id}`

        })
    })
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;