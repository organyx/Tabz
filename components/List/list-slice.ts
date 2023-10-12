import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type ListItem = {
  title: string
  url: string
  icon: string
  id: number
}
export type ListState = {
  list: ListItem[]
  bookmarkFolder: chrome.bookmarks.BookmarkTreeNode | null
}

const initialState: ListState = {
  list: [],
  bookmarkFolder: null
}

export type ListItemIndex = {
  index: number
}

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ListItem>) => {
      if (state.list.some((item) => item.id === action.payload.id)) return

      state.list.push({
        title: action.payload.title,
        url: action.payload.url,
        icon: action.payload.icon,
        id: action.payload.id
      })
    },
    addMany: (state, action: PayloadAction<ListItem[]>) => {
      action.payload.forEach((item) => {
        if (state.list.some((listItem) => listItem.id === item.id)) return

        state.list.push({
          title: item.title,
          url: item.url,
          icon: item.icon,
          id: item.id
        })
      })
    },
    remove: (state, action: PayloadAction<ListItemIndex>) => {
      state.list.splice(action.payload.index, 1)
    },
    clear: (state) => {
      state.list = initialState.list
    },
    setBookmarkFolder: (
      state,
      action: PayloadAction<chrome.bookmarks.BookmarkTreeNode>
    ) => {
      state.bookmarkFolder = action.payload
    },
    convertTabToBookmark: (state, action: PayloadAction<ListItemIndex>) => {
      const listItem = state.list[action.payload.index]

      chrome.bookmarks.create({
        parentId: state.bookmarkFolder?.id,
        title: listItem.title,
        url: listItem.url
      })

      state.list.splice(action.payload.index, 1)
    },
    convertAllTabsToBookmarks: (state) => {
      state.list.forEach((listItem) => {
        chrome.bookmarks.create({
          parentId: state.bookmarkFolder?.id,
          title: listItem.title,
          url: listItem.url
        })
      })

      state.list = initialState.list
    }
  }
})

export const {
  add,
  addMany,
  remove,
  clear,
  setBookmarkFolder,
  convertTabToBookmark,
  convertAllTabsToBookmarks
} = listSlice.actions

export default listSlice.reducer
