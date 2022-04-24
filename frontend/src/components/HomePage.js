import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
export const HomePage = () => {
  return (
    <div>
    <NavLink to={'/product'} className='homebtn'>Go to product</NavLink>
    <img className='image-container-home' src="https://www.carselonadaily.com/wp-content/uploads/2020/02/Tata-Altroz-Interior-Cars-With-The-Best-Interior-1200x900-1.jpeg" alt="" />

    </div>
  )
}
