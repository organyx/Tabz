import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "~components/List/list-slice";
import type { ListState } from "~components/List/list-slice";
import { useRef } from "react";

import { openExtensionOptions } from "~utils"

function ListView() {
    const dispatch = useDispatch();
    const listValue = useSelector((state: ListState) => state.list);
    const inputRef = useRef<HTMLInputElement>(null);


    const addItemHandler = (): void => {
        const item = inputRef.current.value;
        dispatch(add({ item }));
        inputRef.current.value = "";
    }

    const removeItemHandler = (index: number): void => {
        dispatch(remove({ index }));
    }

    const itemRow = (item: string, index: number) => (
        <li>{item} <span onClick={() => removeItemHandler(index)}>Delete</span></li>
    )

    return <div className="flex flex-col p-6 w-96 h-40 max-h-56">
        <h1>
            Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
        </h1>

        {listValue.length > 0 && <ul className="flex flex-col border border-solid border-cyan-400">
            {listValue.map((item, index) => itemRow(item, index))}
        </ul>}

        <input type="text" ref={inputRef} maxLength={200} />
        <button className="h-10 w-50 text-blue-400" onClick={addItemHandler}>Add To Storage</button>
        <button className="h-8 w-40 text-sm text-red-400" onClick={openExtensionOptions}>Open settings</button>
    </div>
}

export default ListView;