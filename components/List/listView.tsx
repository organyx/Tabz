import { useRef } from "react"

import Item from "~components/Item/item"
import type { ListState } from "~components/List/list-slice"
import { add } from "~components/List/list-slice"
import { useAppDispatch, useAppSelector } from "~store"

function ListView() {
  const dispatch = useAppDispatch()
  const listValue = useAppSelector((state: ListState) => state.list)
  const inputRef = useRef<HTMLInputElement>(null)

  const addItemHandler = (): void => {
    const item = inputRef.current.value
    dispatch(add({ icon: "icon", title: item, url: "url", id: 123 }))
    inputRef.current.value = ""
  }

  const addItemHandler2 = async (event): Promise<void> => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    const { id, title, url, favIconUrl } = tabs[0]
    const item = { icon: favIconUrl, title, url, id }
    console.log("🚀 ~ file: listView.tsx:28 ~ addItemHandler2 ~ item:", item)
    dispatch(add(item))
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

      <input type="text" ref={inputRef} maxLength={200} />
      <button className="h-10 w-50 text-blue-400" onClick={addItemHandler}>
        Add To Storage
      </button>
      <button className="h-10 w-50 text-blue-400" onClick={addItemHandler2}>
        Add To Storage 2
      </button>
    </div>
  )
}

export default ListView
