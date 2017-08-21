import React, { Component } from 'react'
import Modal from 'react-modal'
import ShoppingList from './ShoppingList'

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