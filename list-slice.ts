import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ListState {
  list: string[]
}

const initialState: ListState = {
  list: []
}

export interface ListItem {
  item: string
}

export interface ListItemIndex {
  index: number
}

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ListItem>) => {
      state.list.push(action.payload.item)
    },
    remove: (state, action: PayloadAction<ListItemIndex>) => {
      state.list.splice(action.payload.index, 1)
    }
  }
})

export const { add, remove } = listSlice.actions

export default listSlice.reducer
