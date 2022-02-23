import React from 'react'
import Proto from './destinationProto/proto'
import moonPhoto from './../../../assets/destination/image-europa.png'

function Europa({data}) {
  return (
    <Proto img={moonPhoto} data={data}/>
  )
}

export default Europa