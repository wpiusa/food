import React, { Component } from 'react'
import Modal from 'react-modal'
import ShoppingList from './ShoppingList'
import { capitalize } from '../utils/helpers'
import { connect } from 'react-redux'


class App extends Component {
  state = {
    
    ingredientsModalOpen: false,
  
  }
    
  //openIngredientsModal = () => this.setState(() => ({ ingredientsModalOpen: true }))
  //closeIngredientsModal = () => this.setState(() => ({ ingredientsModalOpen: false }))
  
  openIngredientsModal = () => {
    this.setState(()=>({
      ingredientsModalOpen: true
    }))
  }

  closeIngredientsModal = () => {
    this.setState(()=> ({
      ingredientsModalOpen:false
    }))
  }

  render() {
    const {ingredientsModalOpen } = this.state
    
    const { calendar } = this.props
    const mealOrder = ['breakfast', 'lunch', 'dinner']

    console.log('two',calendar);
    console.log('three',this.props)
    return (
      <div className='container'>

        <div className='nav'>
          <h1 className='header'>UdaciMeals</h1>
          <button
            className='shopping-list'
            onClick={this.openIngredientsModal}>
              Shopping List
          </button>
        </div>

        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>

        <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          
        </div>

        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={ingredientsModalOpen}
          onRequestClose={this.closeIngredientsModal}
          contentLabel='Modal'
        >
         test
        </Modal>

      </div>
    )
  }
}


function mapStateToProps ({calendar}) {
 
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      
    })),

  }
}


export default connect(
  mapStateToProps,
  
)(App)