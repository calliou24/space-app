import React from 'react'
import Proto from './proto/proto'

//images 
import img from './../../../assets/crew/image-douglas-hurley.png'

function DouglasHurley({data}) {
  return (
      <Proto data={data} img={img}/>
  )
}

export default DouglasHurley