import React from 'react'
import Navbar from '../Navbar'
import MainCarosel from '../mainCarosel/MainCarosel'
import HomeSectionGarosel from '../HomeSectionCard/HomeSectionGarosel'

const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <MainCarosel/>
    <HomeSectionGarosel/>
    </div>
  )
}

export default HomePage