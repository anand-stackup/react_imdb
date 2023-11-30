import React from 'react'

const Genre = ({data}) => {
  return data.map((data) => (
    <div className='genre' key={data}>
        <span>{data}</span>
    </div>
  ))
}

export default Genre