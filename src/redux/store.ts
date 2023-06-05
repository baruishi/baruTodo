// I understand that redux might be an overkill in this scenario.
// It is a common tool and quick for me to set up.

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import tasksSlice from './tasksSlice'

export const store = configureStore({
  reducer: {
    userSlice,
    taskSlice: tasksSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
