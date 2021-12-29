import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoState {
  value: string[]
}

const initialState: TodoState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer