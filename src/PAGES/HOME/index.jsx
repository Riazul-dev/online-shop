import React from 'react'
import HeroSection from './HeroSection'
import CardSection from './CardSection'
import FeaturedSection from './FeaturedSection'
import EditionSection from './EditionSection'

const Home = () => {
  return (
    <div className=''>
        <HeroSection />
        <CardSection />
        <FeaturedSection />
        <EditionSection />
    </div>
  )
}

export default Home