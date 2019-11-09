import React from 'react';
import {CardTitle, InputTaskField, TasksList, DeleteCardBtn} from './CardComponents';

export default class Card extends React.Component {
    constructor(props){
        super(props);
    }
    dragOver = event => {
        event.preventDefault();
    }
    onDrop = event => {
        event.preventDefault();
        let data = JSON.parse(event.dataTransfer.getData('text'));
        if(data.fromCardId === this.props.card.id){
            console.log('same card');
            return;
        }
        else{
            data.toCardId = this.props.card.id;
            this.props.onDrop(data);
        }
        
    }
    render(){
        return (
            <div className="card shadow" onDragOver={this.dragOver} onDrop = {this.onDrop}>
                <CardTitle title={this.props.card.name}/>
                <InputTaskField addTask={this.props.addTask} cardId={this.props.card.id}/>
                <TasksList tasks={this.props.card.tasks} cardId={this.props.card.id} completeTask={this.props.completeTask} deleteTask={this.props.deleteTask}/>
                <DeleteCardBtn cardId={this.props.card.id} deleteCard={this.props.deleteCard}/>
            </div>     
        )
    }
    
}
