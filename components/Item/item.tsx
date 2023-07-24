import { VscTrash } from "react-icons/vsc"

import { type ListItem, remove } from "~components/List/list-slice"
import { useAppDispatch } from "~store"

function Item({ item, index }: { item: ListItem; index: number }) {
  const dispatch = useAppDispatch()
  const removeItemHandler = (index: number): void => {
    dispatch(remove({ index }))
  }

  return (
    <li className="btn flex flex-1 flex-nowrap justify-around items-center text-sm">
      <img src={item.icon} className="w-6 p-1" />
      <a href={item.url} target="_blank" className="w-64">
        {item.title}
      </a>
      <VscTrash
        onClick={() => removeItemHandler(index)}
        className="group w-6 hover:text-red-500 active:scale-90 transition-all"
      />
    </li>
  )
}

export default Item
