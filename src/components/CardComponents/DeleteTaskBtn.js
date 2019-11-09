import React from 'react'

export default class DeleteTaskBtn extends React.Component {
    constructor(props){
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }
    deleteTask(taskId, cardId){
        this.props.deleteTask(this.props.taskId, this.props.cardId);
    }
    render(){
        return (
            <button className="delete-btn" onClick={this.deleteTask}>&times;</button>
        )
    }
    
}
