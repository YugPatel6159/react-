import React from 'react'

function Form() {
  return (
    <div className='container'>
        <form>
        <div className='row col-md-6 d-flex form-group'>

            <label htmlFor="name">Name</label>
            <input className='form-control' type="text" name="name" id="name" />
            <label htmlFor="email">email</label>
            <input className='form-control' type="email" name="email" id="email" />
            <label htmlFor="channel">Channel</label>
            <input className='form-control' type="text" name="channel" id="channel" />
        </div>
        </form>
    </div>
  )
}

export default Form