import React from 'react'
import { remove, type ListItem } from "~components/List/list-slice";
import { useAppDispatch } from '~store'; import { VscAdd, VscDiffAdded, VscRefresh, VscTrash, } from "react-icons/vsc";


function Item({ item, index }: { item: ListItem, index: number }) {
    const dispatch = useAppDispatch();
    const removeItemHandler = (index: number): void => {
        dispatch(remove({ index }));
    }

    return (
        <li className='flex flex-1 justify-center items-center text-lg'><span>{item.icon}</span><a href={item.url}>{item.title}</a>  <VscTrash onClick={() => removeItemHandler(index)} /></li>


    )
}

export default Item