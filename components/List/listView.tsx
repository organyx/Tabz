import Item from "~components/Item/item"
import type { ListState } from "~components/List/list-slice"
import { useAppSelector } from "~store"

function ListView() {
  const listValue = useAppSelector((state: ListState) => state.list)

  return (
    <div className="flex flex-col p-1 h-52 max-h-56">
      {listValue.length > 0 ? (
        <ul className="flex flex-col">
          {listValue.map((item, index) => (
            <Item key={index} item={item} index={index} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">No tabs</p>
      )}
    </div>
  )
}

export default ListView
