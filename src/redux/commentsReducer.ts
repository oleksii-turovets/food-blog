import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type ArticleComment = {
    name: string
    email: string
    website?: string
    comment: string
}

type ArticlesComments = {
    [id: number]: ArticleComment[]
}

export const initialState: ArticlesComments = {
    1: [
        {
            name: 'string',
    email: 'string',
    website: 'string',
    comment: 'string',
        },
    ]
}

export const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, action:PayloadAction<{id: number, newComment:ArticleComment }>) => ({
            ...state,
            [action.payload.id] : state[action.payload.id] ? [...state[action.payload.id], action.payload.newComment] : [action.payload.newComment]
        })
    }
})

export const { addComment } = commentsSlice.actions

export default commentsSlice.reducer