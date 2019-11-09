import React from 'react';
import {CardTitle, InputTaskField, TasksList, DeleteTaskBtn} from './CardComponents';

export default function Card(props) {
    return (
        <div className="card shadow">
            <CardTitle title={props.card.name}/>
            <InputTaskField addTask={props.addTask} cardId={props.cardId}/>
            <TasksList tasks={props.card.tasks}/>
            <DeleteTaskBtn/>
        </div>     
    )
}
