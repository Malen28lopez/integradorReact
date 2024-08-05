import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CityList from '../Components/City/CityList'


function Home() {
  return (
    <div>
      <Header />
      <main> selecciona una ciudad
      <CityList />
      </main>
      <Footer />

    </div>
  )
}

export default Home
