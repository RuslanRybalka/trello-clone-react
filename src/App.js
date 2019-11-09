import React from 'react';
import Card from './components/Card';

import {Container, AddCardBtn} from './components';
import uuid from 'uuid';

export default class App extends React.Component {
  constructor(props){
    super(props);
     this.state = window.localStorage.getItem('board') ? JSON.parse(window.localStorage.getItem('board')) : {cards: []};
    this.addCard = this.addCard.bind(this);
  }
  addCard(cardName){
    this.setState({cards: [...this.state.cards, {id: uuid(), name: cardName, tasks: []}]})
    console.log('add card', this.state);
    window.localStorage.setItem('board', JSON.stringify(this.state));
  }
  addTask = (taskName, cardId) => {
    this.setState({cards: this.state.cards.map((card) => {
      if(card.id === cardId){
        return {id: card.id, name: card.name, tasks : [...card.tasks, {id: uuid(), name: taskName, completed: false}]}
      }else{
        return card;
      }
    })});

    setTimeout(() => window.localStorage.setItem('board', JSON.stringify(this.state)));
  }
  completeTask = (taskId, cardId) => {
    this.setState(
      {
        cards: this.state.cards.map( card => {
          if (card.id !== cardId){
            return card;
          } else{
            return {
              id: card.id,
              name: card.name,
              tasks: card.tasks.map( task => {
                if(task.id === taskId){
                  return {id: task.id, name: task.name, completed: !task.completed}
                } else{
                  return task;
                }
              })
            }            
          }
        })
      }
    )
    setTimeout(() => window.localStorage.setItem('board', JSON.stringify(this.state)));
  }
  deleteTask = (taskId, cardId) => {
    console.log('delete task', cardId, taskId);
    this.setState(
      {
        cards: this.state.cards.map( card => {
          if (card.id !== cardId){
            return card;
          } else{
            return {
              id: card.id,
              name: card.name,
              tasks: card.tasks.filter( task => {
                return task.id !== taskId    
              })
            }            
          }
        })
      }
    )
    setTimeout(() => window.localStorage.setItem('board', JSON.stringify(this.state)));
  }
  deleteCard = (cardId) => {
    this.setState(
      {
        cards: this.state.cards.filter( card => {
          return card.id!== cardId;
        })
      }
    );
    setTimeout(() => window.localStorage.setItem('board', JSON.stringify(this.state)));
  }

  onDrop = (data) => {
    console.log(data);
    this.setState({
      cards: this.state.cards.map( card => {
        if (card.id === data.fromCardId){
          return {id: card.id, name: card.name, tasks: card.tasks.filter( task => task.id !== data.task.id)}
        }else if (card.id === data.toCardId){
          return{
            id: card.id, name: card.name, tasks: [...card.tasks, data.task]
          }
        }else{
          return card;
        }
      })
    });
    setTimeout(()=> window.localStorage.setItem('board', JSON.stringify(this.state)), 50);
  }

  render(){
    return (
      <Container>
        {this.state.cards.map(card => <Card key={card.id} card={card} addTask={this.addTask} completeTask={this.completeTask} deleteTask={this.deleteTask} deleteCard={this.deleteCard} onDrop={this.onDrop}/>)}
        <AddCardBtn addCard = {this.addCard}/>
      </Container> 
    )
  }
}