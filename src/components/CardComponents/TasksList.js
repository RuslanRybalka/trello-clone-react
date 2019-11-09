import React from 'react';
import Task  from './Task';

export default function TasksList(props) {
    return (
        <ul className="tasks__list">
            {props.tasks.map((task) => <Task key={task.id} task={task} taskId={task.id} cardId={props.cardId} completeTask={props.completeTask} deleteTask={props.deleteTask}/>)} 
        </ul>
    )
}
