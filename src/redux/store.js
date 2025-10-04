import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './features/posts/postApi';

const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
})

export default store;