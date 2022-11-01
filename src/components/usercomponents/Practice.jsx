import React from 'react'
import Questionset from './Questionset'
const Practice = () => {

  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='font-mono text-2xl'>Practice Questions</h1>
        <p className='font-mono'>You need to solve the current question before moving on to next question</p>
        <div className='container mx-auto'>
          <Questionset />
        </div>
      </div>
    </>
  )
}

export default Practice
