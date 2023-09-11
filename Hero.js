import React from 'react'
import '../App.css';
import { Button } from './Button'
import './Hero.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/home.mp4' autoPlay loop muted />
            <h1>Far Dreams Basement</h1>
            <p>Made in the Basement</p>
            <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'>
                Select Items
            </Button>
            
            </div>
        </div>
    )
}

export default HeroSection
