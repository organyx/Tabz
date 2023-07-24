import { setBookmarkFolder } from "~components/List/list-slice"
import { persistor, store } from "~store"

persistor.subscribe(() => {
  console.log("State changed with: ", store?.getState())
})

export {}

console.log("Hello from background script!")
const bookmarkFolder = "Tabz Bookmarks"

const createBookmarkFolder = async (
  folderName: string
): Promise<chrome.bookmarks.BookmarkTreeNode> => {
  return await chrome.bookmarks.create({ title: folderName })
}

const checkIfBookmarkFolderExists = async (
  folderName: string
): Promise<boolean> => {
  return (await chrome.bookmarks.search({ title: folderName })).length > 0
}

const getTabzFolder = async (folderName: string) => {
  const folderExists = await checkIfBookmarkFolderExists(bookmarkFolder)

  let tabzFolder: chrome.bookmarks.BookmarkTreeNode

  if (!folderExists) {
    tabzFolder = await createBookmarkFolder(bookmarkFolder)
  }

  tabzFolder = (await chrome.bookmarks.search({ title: folderName }))[0]

  return tabzFolder
}

chrome.runtime.onInstalled.addListener(async () => {
  console.log("Extension installed!")

  const tabzFolder = await getTabzFolder(bookmarkFolder)

  store?.dispatch(setBookmarkFolder(tabzFolder))
})
