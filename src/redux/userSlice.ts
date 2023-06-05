// userSlice is used during authentication

import { UserType } from '../models/types/userType'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UserType = {
  isAuthenticated: false
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userAuthenticate: (state: UserType) => {
      state.isAuthenticated = true
    },
    userRemoveAuthentication: (state: UserType) => {
      state.isAuthenticated = false
    }
  }
})

export const { userAuthenticate, userRemoveAuthentication } = userSlice.actions
export default userSlice.reducer
