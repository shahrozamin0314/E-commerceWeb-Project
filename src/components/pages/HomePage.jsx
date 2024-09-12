import React from 'react'
import Navbar from '../Navbar'
import MainCarosel from '../mainCarosel/MainCarosel'
import HomeSectionGarosel from '../HomeSectionCard/HomeSectionGarosel'
import { menss_kurta } from '../data/Men/men_kurta';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>

    <Navbar/>
    <MainCarosel/>

    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionGarosel data={mens_kurta} sectionName={'Mens kurta'}/>
      <HomeSectionGarosel data={mens_kurta} sectionName={"Mens Shoes"}/>
      <HomeSectionGarosel data={mens_kurta} sectionName={"Mens Shirts"}/>
      <HomeSectionGarosel data={mens_kurta} sectionName={"Women Sari"}/>
      <HomeSectionGarosel data={mens_kurta} sectionName={"Women Dress"}/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default HomePage