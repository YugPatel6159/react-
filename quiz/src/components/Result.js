import React from 'react'

function Result(props) {
  return (
    <div className='container'>
   <h1 text-center>Results</h1>
    <div className='container'>
        <span>Congratulations! You got{props.correctAnswer}/{props.totalQuestion}</span>
    </div>
    </div>
  )
}

export default Result