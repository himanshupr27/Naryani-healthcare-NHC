import React from 'react'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="home">
    <div className="welcome">
      <h1>Making Health <br />
      Care Better Together</h1>
      <p>Creatures multiply abundantly, each bringing forth signs of life. Living forms take shape, dividing the seasons and gathering under the great forces of nature, destined to thrive in their rightful place, united in harmony and strength.</p>
    <Link to="/contact"><button className='btn-welcome'>Contact Us</button></Link>
    
    </div>
  </div>
  )
}

export default Welcome;
