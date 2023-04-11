import { createSlice } from "@reduxjs/toolkit"

type ArticleComment = {
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
        addComment: (state, action) => ({
            ...state,
            [action.payload.id] : state[action.payload.id] ? [...state[action.payload.id], action.payload.comment] : [action.payload.comment]
        })
    }
})

export const { addComment } = commentsSlice.actions

export default commentsSlice.reducer