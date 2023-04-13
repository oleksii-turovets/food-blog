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
            name: 'Ben',
            email: 'ben@gmail.com',
            website: 'https://www.ben.com/',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam, voluptate vero amet neque obcaecati optio ipsum ab dolorum laborum dicta maxime repellat sunt totam, labore illum, inventore consequuntur illo!',
        },
        {
            name: 'Franky',
            email: 'franky@gmail.com',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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