import React from 'react'
import { VscAdd, VscDiffAdded, VscRefresh, VscTrash, VscSettingsGear } from "react-icons/vsc";
import { openExtensionOptions } from "~utils"
function Controls() {
    return (
        <div className="space-y-5">
            <div className=" border-b border-b-gray-200">
                <div className="join w-full">
                    <button className='btn join-item text-xl flex-grow justify-center' title='Add current tab to the list'><VscAdd /></button>
                    <button className='btn join-item text-xl flex-grow justify-center' title='Add all open tabs to the list'><VscDiffAdded /></button>
                    <button className='btn join-item text-xl flex-grow justify-center' title='Check tabs list'><VscRefresh /></button>
                    <button className='btn join-item text-xl flex-grow justify-center' title='Clear all tabs'><VscTrash /></button>
                    <button className='btn join-item text-xl flex-grow justify-center' title='Settings' onClick={openExtensionOptions}><VscSettingsGear /></button>
                </div>
            </div>
        </div>
    )
}

export default Controls