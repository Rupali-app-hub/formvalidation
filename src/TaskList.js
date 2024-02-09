import React, { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, description: 'Task 1', completed: true },
        { id: 2, description: 'Task 2', completed: false }
    ]);
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleToggleCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleAddTask = () => {
        if (newTaskDescription.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                description: newTaskDescription,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskDescription('');
        }
    };

    return (
        <div id="task-list">
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            id={`task-${task.id}`}
                            checked={task.completed}
                            onChange={() => handleToggleCompletion(task.id)}
                        />
                        <label
                            htmlFor={`task-${task.id}`}
                            className={task.completed ? 'task-completed' : ''}
                            style={{ color: task.completed ? 'red' : 'inherit', textDecoration: task.completed ? 'line-through' : 'none'  }}
                        >
                            {task.description}
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    placeholder="Enter new task description"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default TaskList;
