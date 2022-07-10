import { useState } from "react"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      Value:
      <span className="inline-flex items-center justify-center h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200">{data}</span>
    </div>
  )
}

export default IndexPopup
