import React from 'react'
import web from '../images/main1.jpg';
import Common from '../Components/Common'

const About = () => {
  return (
    <div>
        <Common name="Welcome to About Page"
      imgsrc={web}
      visit="/contact"
      btname="Contact Now"
      />
    </div>
  )
}

export default About
