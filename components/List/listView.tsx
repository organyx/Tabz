import { useRef } from "react"

import Item from "~components/Item/item"
import type { ListState } from "~components/List/list-slice"
import { add, clear } from "~components/List/list-slice"
import { useAppDispatch, useAppSelector } from "~store"

function ListView() {
  const dispatch = useAppDispatch()
  const listValue = useAppSelector((state: ListState) => state.list)
  const inputRef = useRef<HTMLInputElement>(null)

  const addItemHandler = async (event): Promise<void> => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    const { id, title, url, favIconUrl } = tabs[0]
    const item = { icon: favIconUrl, title, url, id }
    console.log("🚀 ~ file: listView.tsx:28 ~ addItemHandler2 ~ item:", item)
    dispatch(add(item))
  }

  const clearAllHandler = (): void => {
    dispatch(clear())
  }

  return (
    <div className="flex flex-col p-6 w-96 h-40 max-h-56">
      {listValue.length > 0 && (
        <ul className="flex flex-col border border-solid border-cyan-400">
          {listValue.map((item, index) => (
            <Item key={index} item={item} index={index} />
          ))}
        </ul>
      )}

      <button className="h-10 w-50 text-blue-400" onClick={addItemHandler}>
        Add To Storage
      </button>
      <button className="h-10 w-50 text-blue-400" onClick={clearAllHandler}>
        Clear All
      </button>
    </div>
  )
}

export default ListView
