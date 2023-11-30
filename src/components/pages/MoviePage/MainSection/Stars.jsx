import React from 'react'

const Stars = ({data}) => {
  return data.map((data) => (
    <div className='stars' key={data}>
      <span>{data.toString()}</span>
    </div>
  ))
}

export default Stars