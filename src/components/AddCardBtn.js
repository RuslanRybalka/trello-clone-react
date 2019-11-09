import React from 'react'

export default class AddCardBtn extends React.Component {
    constructor(props){
        super(props);
        this.addCard = this.addCard.bind(this);
    }
    addCard(){
        this.props.addCard();
    }
    render(){
        return (
            <button className="btn btn-add-card shadow" onClick={this.addCard}>Add new card <span className="plus-sign">+</span></button>
        )
    }
}
