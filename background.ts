import { persistor, store } from "~store"

persistor.subscribe(() => {
  console.log("State changed with: ", store?.getState())
})

export {}

console.log("Hello from background script!")
