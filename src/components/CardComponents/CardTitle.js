import React from 'react'

export default function CardTitle(props) {
    return (
        <h3 className="card__title" contentEditable="true">{props.title}</h3>
    )
}
