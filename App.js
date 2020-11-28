import React, { useRef, useState } from 'react'
import Loading from './loading'
import Weather from './Weather'
import Error from './Error'

function App() {
  const cityRef = useRef('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState({})

  const fetchWeather = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (cityRef.current.value === '') {
      setError(true)
    }

    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityRef.current.value}&appid=6cb65abf28e8ff6a6e0a8d7bb3d744ab`
      )
        .then((res) => {
          if (res.status === 404) {
            setError(true)
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setWeather(data)
          setLoading(false)
          cityRef.current.value = ''
        })
        .catch((err) => {
          setError(true)
          console.log(err)
        })
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  if (error) {
    return <Error />
  }

  if (loading) {
    return (
      <section className='section'>
        <div className='title'>
          <h1>search any city weather</h1>
        </div>
        <form className='form' onSubmit={fetchWeather}>
          <label htmlFor='city'>City : </label>
          <input type='text' id='city' className='city' ref={cityRef} />
          <button type='submit'>Search</button>
        </form>
        <Loading />
      </section>
    )
  }

  return (
    <section className='section'>
      <div className='title'>
        <h1>search any city weather</h1>
      </div>
      <form className='form' onSubmit={fetchWeather}>
        <label htmlFor='city'>City : </label>
        <input type='text' id='city' className='city' ref={cityRef} />
        <button type='submit'>Search</button>
      </form>
      <Weather weatherCity={weather} />
    </section>
  )
}

export default App
