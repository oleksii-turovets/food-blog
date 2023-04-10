import { createSlice } from "@reduxjs/toolkit"
import articlesArray from "utils/articlesArray"


type ArticlesRating = {
    [id: number]: {
        ratingValue: number
        votesNumber: number
    }
}

export const initialState: ArticlesRating = articlesArray.reduce((object, article) => ({
    ...object,
    [article.id]: {
        ratingValue: article.content?.general.rating.value,
        votesNumber: article.content?.general.rating.votesNumber,
    },
    }), {})

export const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        addUserRating: (state, action) => ({
            ...state,
            [action.payload.id]: {
                ratingValue: ((state[action.payload.id].ratingValue || 0) * state[action.payload.id].votesNumber + Math.ceil(action.payload.userValue || 0))/(state[action.payload.id].votesNumber+1) ,
                votesNumber: state[action.payload.id].votesNumber + 1
            }
        }),
        changeUserRating: (state, action) => ({
            ...state,
            [action.payload.id]: {
                ratingValue: ((state[action.payload.id].ratingValue || 0) * state[action.payload.id].votesNumber - (action.payload.prevUserValue || 0) + Math.ceil(action.payload.userValue || 0)) / (state[action.payload.id].votesNumber),
                votesNumber: state[action.payload.id].votesNumber
            }
        })
    }
})

export const {addUserRating, changeUserRating} = ratingSlice.actions

export default ratingSlice.reducer