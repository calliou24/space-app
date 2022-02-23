import React from 'react'
import Proto from './proto/proto'

//img 
import img from '../../../assets/technology/image-spaceport-landscape.jpg'


function Spaceport({data}) {
  return (
      <Proto data={data} img={img}/>
  )
}

export default Spaceport