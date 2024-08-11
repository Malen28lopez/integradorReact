import './App.css'
import Home from './Pages/Home'
import About from './Pages/AboutPage'
import CommentsPage from './Pages/CommentsPage'
import CityDetailsPage from './Pages/CityDetailsPage'
import CityItem from './Components/Area/City/CityItem' 
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<CommentsPage />} />
          <Route path="/city" element={<CityDetailsPage />} />
          <Route path="/cities/:country" element={<CityItem />} />
        <Route path="/city-details/:city" element={<CityDetailsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App