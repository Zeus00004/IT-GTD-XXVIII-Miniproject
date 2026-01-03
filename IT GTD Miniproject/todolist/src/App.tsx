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

    {/* ⬇️ BUTTON AT BOTTOM */}
    <div className="text-center py-6">
      <a href="https://it-gtd-xxviii-miniproject.vercel.app/index.html">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Back to Main Page
        </button>
      </a>
    </div>
  </div>
);
}   
export default App
