import React from 'react'

export default function DeleteCardBtn(props){ 
    return (
        <button className="delete-btn" onClick ={props.deleteCard.bind(props.deleteCard, props.cardId)}>&times;</button>
    )
}
