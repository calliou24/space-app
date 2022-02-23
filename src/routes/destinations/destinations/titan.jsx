import React from 'react'
import Proto from './destinationProto/proto'
import moonPhoto from './../../../assets/destination/image-titan.png'

function Titan({data}) {
  return (
    <Proto img={moonPhoto} data={data}/>
  )
}

export default Titan