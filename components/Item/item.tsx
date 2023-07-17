import { VscTrash } from "react-icons/vsc"

import { type ListItem, remove } from "~components/List/list-slice"
import { useAppDispatch } from "~store"

function Item({ item, index }: { item: ListItem; index: number }) {
  const dispatch = useAppDispatch()
  const removeItemHandler = (index: number): void => {
    dispatch(remove({ index }))
  }

  return (
    <li className="flex flex-1 justify-center items-center text-sm">
      <img src={item.icon} width="15px" />
      <a href={item.url}>{item.title}</a>
      <VscTrash onClick={() => removeItemHandler(index)} />
    </li>
  )
}

export default Item
