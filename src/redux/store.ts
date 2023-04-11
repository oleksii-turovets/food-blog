import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import ratingReducer from './ratingReducer'
import commentsReducer from './commentsReducer'
import userReducer from './userReducer'

export const store = configureStore({
    reducer: {
        articleLike: likeReducer,
        articlesRating: ratingReducer,
        articlesComments: commentsReducer,
        user: userReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch