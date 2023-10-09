import React from 'react'
import web from '../images/main2.jpg';
import Common from '../Components/Common'

const Home = () => {
  return (
    <div>
      <Common name="Grow Your Business with"
      imgsrc={web}
      visit="/services"
      btname="Get Started"
      />
    </div>
  )
}

export default Home
