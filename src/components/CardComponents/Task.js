import React from 'react';
import DeleteTaskBtn from './DeleteTaskBtn';
import CompleteTaskBtn from './CompleteTaskBtn';

export default class Task extends React.Component {

    dragStart = (event) => {
        let data = JSON.stringify({fromCardId: this.props.cardId, task: {id: this.props.taskId, name: this.props.task.name, completed: this.props.task.completed}});
        event.dataTransfer.setData('text', data);
        console.log(event.dataTransfer.getData('text'));
    }
    render(){
        return (
            <li className = {this.props.task.completed ? "tasks__item shadow completed" : "tasks__item shadow" } draggable="true" onDragStart={this.dragStart}>
                {this.props.task.name}
                <DeleteTaskBtn deleteTask={this.props.deleteTask} taskId={this.props.taskId} cardId = {this.props.cardId}/>
                <CompleteTaskBtn completeTask={this.props.completeTask} taskId={this.props.taskId} cardId = {this.props.cardId} />
            </li>
        )
    }    
}