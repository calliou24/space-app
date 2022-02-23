import React from 'react'
import Proto from './proto/proto'

//img 
import img from '../../../assets/technology/image-space-capsule-landscape.jpg'

function Spacecapsule({data}) {
  return (
    <Proto data={data} img={img}/>
  )
}

export default Spacecapsule