import React from 'react';
//import {createStore} from 'redux';
import Card from './components/Card';
//import uuid from 'uuid';

import {Container, AddCardBtn} from './components';
import uuid from 'uuid';

// const initialState = {
//   cards: [
//     { id: 1,
//       name: 'First card',
//       tasks: [
//         {
//           id: 1,
//           name: 'This is my first task',
//           completed: false
//         },
//         {
//           id: 2,
//           name: 'Second task of my work',
//           completed: true
//         }
//       ]
//     },
//     { id: 2,
//       name: 'Second card',
//       tasks: [
//         {
//           id: 85,
//           name: 'To buy milk',
//           completed: true
//         },
//         {
//           id: 63,
//           name: 'to wash the dishes',
//           completed: false
//         }
//       ]
//     }
//   ]
// }

// function reducer(state = initialState, action){
//   switch (action.type){
//     case 'ADD_BOARD': {
//       console.log('ADD_BOARD');
//       return state;
//     }
//     default: return state;
//   }
// }
// const store = createStore(reducer);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [
        { id: 1,
          name: 'First card',
          tasks: [
            {
              id: 1,
              name: 'This is my first task',
              completed: false
            },
            {
              id: 2,
              name: 'Second task of my work',
              completed: true
            }
          ]
        },
        { id: 2,
          name: 'Second card',
          tasks: [
            {
              id: 85,
              name: 'To buy milk',
              completed: true
            },
            {
              id: 63,
              name: 'to wash the dishes',
              completed: false
            }
          ]
        }
      ]
    }
    this.addCard = this.addCard.bind(this);
  }
  addCard(){
    this.setState({cards: [...this.state.cards, {id: uuid(), name: 'New Card', tasks: []}]})
    console.log('add card', this.state);
  }
  addTask = (taskName, cardId) => {
    this.setState({cards: this.state.cards.map((card) => {
      if(card.id === cardId){
        return {id: card.id, name: card.name, tasks : [...card.tasks, {id: uuid(), name: taskName, completed: false}]}
      }else{
        return card;
      }
    })});
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
  }
  deleteCard = (cardId) => {
    this.setState(
      {
        cards: this.state.cards.filter( card => {
          return card.id!== cardId;
        })
      }
    );
  }
  render(){
    return (
      <Container>
        {this.state.cards.map(card => <Card key={card.id} card={card} addTask={this.addTask} completeTask={this.completeTask} deleteTask={this.deleteTask} deleteCard={this.deleteCard}/>)}
        <AddCardBtn addCard = {this.addCard}/>
      </Container> 
    )
  }
}

//store.subscribe(()=>console.log(store.getState()));
//store.dispatch({type: 'ADD_BOARD', playload: 'Hello'});