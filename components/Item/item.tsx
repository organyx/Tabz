import { VscBookmark, VscTrash } from "react-icons/vsc"

import { type ListItem, remove } from "~components/List/list-slice"
import { useAppDispatch, useAppSelector } from "~store"

function Item({ item, index }: { item: ListItem; index: number }) {
  const dispatch = useAppDispatch()
  const bookmarkFolder = useAppSelector((state) => state.bookmarkFolder)
  const removeItemHandler = (index: number): void => {
    dispatch(remove({ index }))
  }

  const tabToBookMarkHandler = async (): Promise<void> => {
    const confirm = window.confirm(
      "Are you sure you want to convert this tab to a bookmark?"
    )
    if (confirm) {
      console.log("tabToBookMarkHandler", bookmarkFolder)
      const bookmark = {
        parentId: bookmarkFolder.id,
        title: item.title,
        url: item.url
      }

      const created = await chrome.bookmarks.create(bookmark)
      console.log(
        "🚀 ~ file: item.tsx:26 ~ tabToBookMarkHandler ~ created:",
        created
      )
    }
  }

  return (
    <li className="btn flex flex-1 flex-nowrap justify-around items-center text-sm">
      <img src={item.icon} className="w-6 p-1" />
      <a href={item.url} target="_blank" className="w-64">
        {item.title}
      </a>
      <VscBookmark
        onClick={() => tabToBookMarkHandler()}
        className="group w-6 hover:text-blue-500 active:scale-90 transition-all"
      />
      <VscTrash
        onClick={() => removeItemHandler(index)}
        className="group w-6 hover:text-red-500 active:scale-90 transition-all"
      />
    </li>
  )
}

export default Item
