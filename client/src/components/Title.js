import React from 'react'
import TitleIMG from '../assets/title.png'
import './Title.css';

const Title = () => {
  return (
    <div className="title">
        <h1> Pair to Spare </h1>
        <img src={TitleIMG} alt="title" />
    </div>
  )
}

export default Title