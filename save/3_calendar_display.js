import React, { Component } from 'react'
import Modal from 'react-modal'
import ShoppingList from './ShoppingList'
import { capitalize } from '../utils/helpers'
import { connect } from 'react-redux'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

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
          
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                          <img src={meals[meal].image} alt={meals[meal].label}/>
                          
                        </div>
                      : <button onClick={() => this.openFoodModal({meal, day})} className='icon-btn'>
                          <CalendarIcon size={30}/>
                        </button>}
                  </li>
                ))}
              </ul>
            ))}
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


function mapStateToProps ({ food, calendar }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null

        return meals
      }, {})
    })),
  }
}


export default connect(
  mapStateToProps,
  
)(App)