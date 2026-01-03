import { useState } from 'react';
import TaskItem from './TaskItem'

const TaskViewList = ({tasks, setTasks}: any) => {

    const [showNotStarted, setShowNotStarted] = useState(true);
    const [showInProgress, setShowInProgress] = useState(true);
    const [showCompleted, setShowCompleted] = useState(true);

    const handleDelete = (index: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?")
        if (!confirmDelete) return
        const updatedTasks = tasks.filter((_: any, i: number) => i !== index);
        setTasks(updatedTasks);
    };

    const handleEdit = (index: number, updatedTask: any) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    };

    return (
        <div className='mt-5'>
            <div className="flex flex-col items-center">
                <h3 className="text-2xl">Filter Tasks</h3>
                <div className='flex gap-4'>
                    <div className='flex gap-1'>
                        <input type="checkbox" name="completed" id="notStartedFilter" value="Not Started" checked={showNotStarted} onChange={(e) => setShowNotStarted(e.target.checked)}/>
                        <label htmlFor="notStartedFilter">Not Started</label>
                    </div>
                    <div className='flex gap-1'>
                        <input type="checkbox" name="completed" id="inProgressFilter" value="In Progress" checked={showInProgress} onChange={(e) => setShowInProgress(e.target.checked)}/>
                        <label htmlFor="inProgressFilter">In Progress</label>
                    </div>
                    <div className='flex gap-1'>
                        <input type="checkbox" name="completed" id="completedFilter" value="Completed" checked={showCompleted} onChange={(e) => setShowCompleted(e.target.checked)}/>
                        <label htmlFor="completedFilter">Completed</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-5">
                {tasks.map((task: any, index: number) => ({...task, originalIndex:index}))
                .filter((task: any) => (
                    showNotStarted && task.status === "Not Started" || 
                    showInProgress && task.status === "In Progress" || 
                    showCompleted && task.status === "Completed"
                )).map((task: any) => (
                    <TaskItem key={task.originalIndex} task={task} index={task.originalIndex} handleDelete={handleDelete} handleEdit={handleEdit} />
                ))}
            </div>
        </div>
    )
}

export default TaskViewList