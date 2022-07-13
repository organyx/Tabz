import { useState } from "react"
import { PersistGate } from '@plasmohq/redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from '~store'

import "./style.css"
import ListView from "~listView"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ListView />
      </PersistGate>
    </Provider>
  )
}

export default IndexPopup
