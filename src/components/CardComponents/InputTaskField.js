import React from 'react'

export default class InputTaskField extends React.Component{
    constructor(props){
        super(props);
        this.addTask = this.addTask.bind(this);
        this.input = React.createRef();
    }
    addTask(){
        this.props.addTask(this.input.current.value, this.props.cardId);
    }
    render(){
        return (
            <div className="input-field shadow">
                <input ref={this.input} type="text" placeholder="Type new task..."className="add-task-field"/>
                <button className="btn btn-add-task" onClick={this.addTask}>Add</button>
            </div>
        )
    }
}
