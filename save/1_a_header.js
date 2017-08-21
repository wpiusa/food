import React, { Component } from 'react'
import Modal from 'react-modal'
import ShoppingList from './ShoppingList'
import { capitalize } from '../utils/helpers'

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


export default App