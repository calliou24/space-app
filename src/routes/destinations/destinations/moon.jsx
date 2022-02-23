import React from 'react'
import Proto from './destinationProto/proto'

import moonPhoto from './../../../assets/destination/image-moon.png'

function Moon({data}) {
  return (
      <Proto img={moonPhoto} data={data}/>
  )
}

export default Moon