// tasksSlice controls the list of tasks

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Task as Task } from 'models/types/userType'

const initialState: Task[] = [
  { name: 'First item', id: 'abc' },
  { name: 'Second item', id: 'abcd' },
  { name: 'Third item', id: 'abcde' }
]

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState: initialState,
  reducers: {
    addTask: (state: Task[], action) => {
      state.push(action.payload)
    },
    removeTask: (state: Task[], action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload)
    }
  }
})

export const { addTask, removeTask } = tasksSlice.actions
export default tasksSlice.reducer
