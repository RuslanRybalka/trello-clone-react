import React from 'react';
import DeleteTaskBtn from './DeleteTaskBtn';
import CompleteTaskBtn from './CompleteTaskBtn';

export default function Task(props) {
    return (
        <li className = {props.task.completed ? "tasks__item shadow completed" : "tasks__item shadow" } draggable="true">
            {props.task.name}
            <DeleteTaskBtn deleteTask={props.deleteTask} taskId={props.taskId} cardId = {props.cardId}/>
            <CompleteTaskBtn completeTask={props.completeTask} taskId={props.taskId} cardId = {props.cardId} />
        </li>
    )
}