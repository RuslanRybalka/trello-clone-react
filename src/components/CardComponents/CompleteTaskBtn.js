import React from 'react'

export default class DeleteTaskBtn extends React.Component {
    constructor(props){
        super(props);
        this.completeTask = this.completeTask.bind(this);
    }
    completeTask(){
        this.props.completeTask(this.props.taskId, this.props.cardId);
    }
    render(){
        return (
            <button className="complete-btn" onClick = {this.completeTask}>&#10004;</button>
        )
    }    
}
