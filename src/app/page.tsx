import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'

export default function Home() {
  return (
    <div className='flex gap-8 w-full justify-between'>
      <div>
        <AddTodo />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  )
  
}
