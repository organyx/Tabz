import {
  VscAdd,
  VscDiffAdded,
  VscRefresh,
  VscSettingsGear,
  VscTrash
} from "react-icons/vsc"

import { add, addMany, clear } from "~components/List/list-slice"
import { useAppDispatch } from "~store"
import { openExtensionOptions } from "~utils"

function Controls() {
  const dispatch = useAppDispatch()

  const addItemHandler = async (event): Promise<void> => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    const { id, title, url, favIconUrl } = tabs[0]
    const item = { icon: favIconUrl, title, url, id }
    dispatch(add(item))
  }

  const addAllHandler = async (event): Promise<void> => {
    const tabs = await chrome.tabs.query({ currentWindow: true })
    const list = tabs.map((tab) => {
      const { id, title, url, favIconUrl } = tab
      const item = { icon: favIconUrl, title, url, id }
      return item
    })
    dispatch(addMany(list))
  }

  const tabsToBookmarksHandler = (): void => {
    console.log("tabsToBookmarksHandler")
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
            title="Add all open tabs to the list"
            onClick={addAllHandler}>
            <VscDiffAdded />
          </button>
          <button
            className="btn join-item text-xl flex-grow justify-center group hover:text-blue-500"
            title="Convert Tabs to Bookmarks"
            onClick={tabsToBookmarksHandler}>
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
