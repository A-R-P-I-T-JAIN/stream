import React from 'react'

const Card = ({h1,p}) => {
  return (
    <div className=' py-16 px-3 max-w-96 border-b-2 border-b-gray-500 flex flex-col gap-10 justify-start min-h-96' >
      <h1 className='text-2xl' >{h1}</h1>
      <p>{p}</p>
    </div>
  )
}

export default Card
