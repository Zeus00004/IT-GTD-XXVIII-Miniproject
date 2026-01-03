import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskViewList from './components/TaskViewList'
import { useEffect, useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
  <div className="bg-gray-200 min-h-screen">
      <h1 className='text-4xl text-center font-bold p-4'>Todo List</h1>
      <AddTaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskViewList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
