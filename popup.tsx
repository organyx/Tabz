import { useState } from "react"
import { PersistGate } from '@plasmohq/redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from '~store'

import "./style.css"
import ListView from "~components/List/listView"
import Controls from "~components/Controls/controls"

function IndexPopup() {
  const [data, setData] = useState("")
  const [activeTab, setActiveTab] = useState("1")

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Controls />
        <ListView />
      </PersistGate>
    </Provider>
  )
}

export default IndexPopup
