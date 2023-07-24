import {
  VscAdd,
  VscDiffAdded,
  VscRefresh,
  VscSettingsGear,
  VscTrash
} from "react-icons/vsc"

import { add, clear } from "~components/List/list-slice"
import { useAppDispatch } from "~store"
import { openExtensionOptions } from "~utils"

function Controls() {
  const dispatch = useAppDispatch()

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
    <div className="space-y-5">
      <div className=" border-b border-b-gray-200">
        <div className="join w-full">
          <button
            className="btn join-item text-xl flex-grow justify-center group hover:text-green-500"
            title="Add current tab to the list"
            onClick={addItemHandler}>
            <VscAdd />
          </button>
          <button
            className="btn join-item text-xl flex-grow justify-center group hover:text-green-500"
            title="Add all open tabs to the list">
            <VscDiffAdded />
          </button>
          <button
            className="btn join-item text-xl flex-grow justify-center group hover:text-blue-500"
            title="Check tabs list">
            <VscRefresh />
          </button>
          <button
            className="btn join-item text-xl flex-grow justify-center group hover:text-red-500"
            title="Clear all tabs"
            onClick={clearAllHandler}>
            <VscTrash />
          </button>
          <button
            className="btn join-item text-xl flex-grow justify-center group hover:text-fuchsia-500"
            title="Settings"
            onClick={openExtensionOptions}>
            <VscSettingsGear />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Controls
