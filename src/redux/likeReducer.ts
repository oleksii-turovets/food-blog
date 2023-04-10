import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import articlesArray from "utils/articlesArray"


type ProductsLike = {
    [id: number]: {
        isLiked: boolean
        likeNumber: number
    }
}

export const initialState: ProductsLike = articlesArray.reduce((object, article) => ({
    ...object,
    [article.id]: {
        isLiked: false,
        likeNumber: article.content?.general.rating.likes,
    },
    }), {})

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<number>) => ({
            ...state,
            [action.payload]: {
                isLiked: !state[action.payload].isLiked,
                likeNumber: state[action.payload].isLiked ? (state[action.payload].likeNumber - 1) : ((state[action.payload].likeNumber || 0) + 1)
            }
        }),
    }
})

export const {toggleLike} = likeSlice.actions

export default likeSlice.reducer