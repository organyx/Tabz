import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from "~components/List/list-slice";

function Item({ item, index }: { item: string, index: number }) {
    const dispatch = useDispatch();
    const removeItemHandler = (index: number): void => {
        dispatch(remove({ index }));
    }

    return (
        <li>{item} <span onClick={() => removeItemHandler(index)}>Delete</span></li>
    )
}

export default Item