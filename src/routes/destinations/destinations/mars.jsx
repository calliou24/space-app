import React from 'react'
import Proto from './destinationProto/proto'
import moonPhoto from './../../../assets/destination/image-mars.png'


function Mars({data}) {
  return (
    <Proto img={moonPhoto} data={data}/>
  )
}

export default Mars