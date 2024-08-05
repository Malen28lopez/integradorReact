import React from 'react'
import CityDetails from '../Components/City/CityDetails'
import CommentList from '../Components/Comment/CommentList'


function CityDetailsPage() {
  return (
    <div> Descripcion de la ciudad
      <CityDetails />
      <CommentList />

    </div>
  )
}

export default CityDetailsPage
