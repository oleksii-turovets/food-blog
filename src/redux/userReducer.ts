import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const userDataKeys = ['name', 'email', 'website', 'avatar'] as const
type UserDataKeys = (typeof userDataKeys)[number]

type User = {
    [key in UserDataKeys]? : string
}

const test: keyof User = 'name'

export const initialState: User = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserData: (state, action: PayloadAction<User>) => {
            Object.entries(action.payload).map((item) =>
                item[0] === 'name' ||
                    item[0] === 'email' ||
                    item[0] === 'website' ||
                    item[0] === 'avatar' ?
                        (state[item[0]] = item[1]) : void(0)
            )
        }
    }
})

export const { changeUserData } = userSlice.actions

export default userSlice.reducer