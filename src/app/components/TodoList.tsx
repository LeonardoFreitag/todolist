'use client'

import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice"; 
import { useAppSelector } from "../store/store";

export function TodoList() {
    const todo = useAppSelector((state) => state.todo);
    const dispatch = useDispatch()

    
    function handleDelete(todo: any) {
        dispatch(deleteTodo (todo))
    }

    return (
        <div className='p-8 gap-3 flex-col'>
            {todo.map((todo) => (
                <div key={todo.id} className="flex gap-6 w-[450px] justify-between p-4">
                    <span>{todo.text}</span>
                    <button type="button" className='bg-red-500 text-gray-50 p-2 w-1/4 rounded-md' onClick={() => handleDelete(todo)}>Delete</button>
                </div>
            ))}
        </div>
    )
}