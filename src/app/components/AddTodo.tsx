'use client'

import { FormEvent, useState } from "react"

import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "@/app/store/todoSlice";
import { TodoModel } from "@/models/TodoModel";

export function AddTodo() {
    const [newTodoText, setNewTodoText] = useState('')
    const dispatch = useDispatch()
    

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault()
    const newTodo: TodoModel = {
        id: Math.random(),
        text: newTodoText,
        completed: false
        }

    dispatch(addTodo(newTodo));

    setNewTodoText('')

  }

  return (
    <form className='p-8 gap-3 flex' onSubmit={handleNewTodo}>
      <input className="w-[450px] border bg-blue-50 p-2" type="text" placeholder='Digite a nova tarefa...' onChange={e => setNewTodoText(e.target.value)} value={newTodoText}/>
      <button type="submit" className='w-48 bg-green-200' >Adicionar</button>
    </form>
  )
}