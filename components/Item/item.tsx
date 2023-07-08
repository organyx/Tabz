import React from 'react'
import { remove } from "~components/List/list-slice";
import { useAppDispatch } from '~store';


function Item({ item, index }: { item: string, index: number }) {
    const dispatch = useAppDispatch();
    const removeItemHandler = (index: number): void => {
        dispatch(remove({ index }));
    }

    return (
        <li>{item} <span onClick={() => removeItemHandler(index)}>Delete</span></li>
    )
}

export default Item