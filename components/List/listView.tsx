import { add } from "~components/List/list-slice";
import type { ListState } from "~components/List/list-slice";
import { useRef } from "react";
import Item from "~components/Item/item";
import { useAppDispatch, useAppSelector } from "~store";


function ListView() {
    const dispatch = useAppDispatch()
    const listValue = useAppSelector((state: ListState) => state.list);
    const inputRef = useRef<HTMLInputElement>(null);


    const addItemHandler = (): void => {
        const item = inputRef.current.value;
        dispatch(add({ icon: "icon", title: item, url: "url" }));
        inputRef.current.value = "";
    }

    return <div className="flex flex-col p-6 w-96 h-40 max-h-56">
        <h1>
            Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
        </h1>

        {listValue.length > 0 && <ul className="flex flex-col border border-solid border-cyan-400">
            {listValue.map((item, index) => <Item key={index} item={item.title} index={index} />)}
        </ul>}

        <input type="text" ref={inputRef} maxLength={200} />
        <button className="h-10 w-50 text-blue-400" onClick={addItemHandler}>Add To Storage</button>
    </div>
}

export default ListView;