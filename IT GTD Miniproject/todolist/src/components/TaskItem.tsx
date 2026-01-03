import { useState } from "react"

const TaskItem = ({task, index, handleDelete, handleEdit}: any) => {

    const [editing, setEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.taskName);
    const [editedTaskDescription, setEditedTaskDescription] = useState(task.taskDescription);
    const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
    const [editedStatus, setEditedStatus] = useState(task.status);

    const saveEdit = () => {
        const updatedTask = {...task, taskName: editedTaskName, taskDescription: editedTaskDescription, dueDate: editedDueDate, status: editedStatus};
        setEditing(false);
        handleEdit(index, updatedTask);
    }

    return (
        <div key={index} className="bg-white shadow-md rounded p-4 mb-4 flex justify-between">
            {
                !editing && <>
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold mb-2">{task.taskName}</h2>
                    <p className="text-gray-600">{task.taskDescription}</p>
                    <p className="text-gray-600">Due Date: {task.dueDate}</p>
                    <p className="text-gray-600">Status: {task.status}</p>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => {setEditing(true)}}>Edit</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(index)}>Delete</button>
                </div>
                </>
            }
            {
                editing && <>
                <div className="flex flex-col">
                    <label htmlFor="taskName">Task Name:</label>
                    <input id="taskName" className="border rounded py-2 px-3 mb-4" type="text" placeholder="Task Name" value={editedTaskName} onChange={(e) => setEditedTaskName(e.target.value)}/>
                    <label htmlFor="taskDescription">Task Description:</label>
                    <input id="taskDescription" className="border rounded py-2 px-3 mb-4" type="text" placeholder="Task Description" value={editedTaskDescription} onChange={(e) => setEditedTaskDescription(e.target.value)}/>
                    <label htmlFor="dueDate">Due Date:</label>
                    <input id="dueDate" className="border rounded py-2 px-3 mb-4" type="date" placeholder="Task Due Date" value={editedDueDate} onChange={(e) => setEditedDueDate(e.target.value)}/>
                    <label htmlFor="status">Status:</label>
                    <select id="status" className="border rounded py-2 px-3 mb-4" value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={saveEdit}>Save</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEditing(false)}>Cancel</button>
                </div>
                </>
            }
        </div>
    )
}

export default TaskItem