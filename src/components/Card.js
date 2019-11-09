import React from 'react';
import {CardTitle, InputTaskField, TasksList, DeleteCardBtn} from './CardComponents';

export default function Card(props) {
    return (
        <div className="card shadow">
            <CardTitle title={props.card.name}/>
            <InputTaskField addTask={props.addTask} cardId={props.card.id}/>
            <TasksList tasks={props.card.tasks} cardId={props.card.id} completeTask={props.completeTask} deleteTask={props.deleteTask}/>
            <DeleteCardBtn cardId={props.card.id} deleteCard={props.deleteCard}/>
        </div>     
    )
}
