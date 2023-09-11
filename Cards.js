import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>SS 23/24 Collection</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jetaime.jpg'
              text='Jetaime Tee '
              label='SS24'
              path='/services'
            />
            <CardItem
              src='images/theEye.jpg'
              text='The Eyes Tee'
              label='SS24'
              path='/services'
            />
            <CardItem
              src='images/theEye2.PNG'
              text='The Place Tee'
              label='SS23'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/fallen.PNG'
              text='The Fallen Tee'
              label='SS23'
              path='/services'
            />
            <CardItem
              src='images/basement.PNG'
              text='The Basement Tee'
              label='SS23'
              path='/products'
            />
            <CardItem
              src='images/Mom.PNG'
              text='"Had a Great Time At Your Moms" Special edition'
              label='SS23'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Cards
