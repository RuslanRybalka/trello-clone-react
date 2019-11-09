import React from 'react'

export default function Task(props) {
    return (
        <li className = {props.task.completed ? "tasks__item shadow completed" : "tasks__item shadow" } draggable="true">
            {props.task.name}
            <button className="delete-btn">&times;</button>
            <button className="complete-btn">&#10004;</button>
        </li>
    )
}