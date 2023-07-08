import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ListItem {
  title: string
  url: string
  icon: string
}
export interface ListState {
  list: ListItem[]
}

const initialState: ListState = {
  list: []
}

export interface ListItemIndex {
  index: number
}

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ListItem>) => {
      state.list.push({
        title: action.payload.title,
        url: action.payload.url,
        icon: action.payload.icon
      })
    },
    remove: (state, action: PayloadAction<ListItemIndex>) => {
      state.list.splice(action.payload.index, 1)
    }
  }
})

export const { add, remove } = listSlice.actions

export default listSlice.reducer
