import React from 'react'

export default class AddCardBtn extends React.Component {
    constructor(props){
        super(props);
        this.addCard = this.addCard.bind(this);
        this.cardNameInput = React.createRef();
    }
    addCard(event){
        event.preventDefault();
        let cardName = this.cardNameInput.current.value;
        if(cardName.trim() === ''){
            return false;
        }else{
            this.props.addCard(cardName);
            this.cardNameInput.current.value = '';
        }
        return false;        
    }
    render(){
        return (
            <form className="add-card-box shadow">
                <input placeholder="Enter card name" className="card-name__input shadow" ref={this.cardNameInput}/>
                <button type="submit" className="add-card-btn shadow" onClick={this.addCard}>Add new card <span className="plus-sign">+</span></button>
            </form>
        )
    }
}
