import React from 'react'

const Error = () => {
  return (
    <section className='section'>
      <div className='title'>
        <h1>search any city weather</h1>
      </div>
      <form className='form'>
        <label htmlFor='city'>City : </label>
        <input type='text' id='city' className='city' />
        <button type='submit'>Search</button>
      </form>
      <div className='error'>
        <h2>opps! cannot find this city</h2>
      </div>
    </section>
  )
}

export default Error
