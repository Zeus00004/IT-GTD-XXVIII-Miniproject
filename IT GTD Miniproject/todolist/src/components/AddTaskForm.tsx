import { useState } from "react"

const AddTaskForm = ({tasks, setTasks}: any) => {
    
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [status, setStatus] = useState("Not Started")

    const addTask = () => {
        const newTask = {taskName, taskDescription, dueDate, status}
        setTasks([...tasks, newTask])
        setTaskName("")
        setTaskDescription("")
        setDueDate("")
        setStatus("Not Started")
    }


    return (
        <div className="flex justify-center">
            <div className="bg-white shadow-md rounded p-8 pt-4 flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">Add New Task</h2>
                <input className="border rounded py-2 px-3 mb-4" type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                <textarea className="border rounded py-2 px-3 mb-4" placeholder="Task Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
                <div className="flex items-center mb-4 gap-4">
                    <label htmlFor="dueDate">Due Date:</label>
                    <input id="dueDate" className="border rounded py-2 px-3" type="date" placeholder="Task Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
                </div>
                <div className="flex items-center mb-4 gap-6">
                    <div className="flex gap-1">
                        <input type="radio" name="completed" id="notStarted" value="Not Started" checked={status === "Not Started"} onChange={(e) => setStatus(e.target.value)}/>
                        <label htmlFor="notStarted">Not Started</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="radio" name="completed" id="inProgress" value="In Progress" checked={status === "In Progress"} onChange={(e) => setStatus(e.target.value)}/>
                        <label htmlFor="inProgress">In Progress</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="radio" name="completed" id="completed" value="Completed" checked={status === "Completed"} onChange={(e) => setStatus(e.target.value)}/>
                        <label htmlFor="completed">Completed</label>
                    </div>
                </div>
                <button onClick={addTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Task</button>
            </div>
        </div>
    )
}

export default AddTaskForm