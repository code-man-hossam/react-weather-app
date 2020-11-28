import React, { useEffect, useState } from 'react'
import { IoIosThunderstorm, IoIosRainy } from 'react-icons/io'
import { FiCloudDrizzle, FiCloudSnow } from 'react-icons/fi'
import { WiDayFog, WiDayCloudyGusts } from 'react-icons/wi'
import { RiSunCloudyLine } from 'react-icons/ri'

const Weather = ({ weatherCity }) => {
  const [weatherIcon, setWeatherIcon] = useState(null)
  const {
    name,
    main: { temp },
    sys: { country },
    weather,
    wind: { speed, deg },
  } = weatherCity
  const { id, description } = weather[0]

  useEffect(() => {
    if (id === 200 || id <= 232) {
      setWeatherIcon(<IoIosThunderstorm />)
    }
    if (id >= 300 || id <= 321) {
      setWeatherIcon(<FiCloudDrizzle />)
    }
    if (id >= 500 || id <= 531) {
      setWeatherIcon(<IoIosRainy />)
    }
    if (id >= 600 || id <= 522) {
      setWeatherIcon(<FiCloudSnow />)
    }
    if (id >= 701 || id <= 781) {
      setWeatherIcon(<WiDayFog />)
    }
    if (id === 800) {
      setWeatherIcon(<RiSunCloudyLine />)
    }
    if (id <= 801 || id >= 804) {
      setWeatherIcon(<WiDayCloudyGusts />)
    }
  }, [weatherCity, id])

  return (
    <>
      <div className='weather'>
        <div className='header'>
          <div className='country'>
            <h3>
              {name}
              <span>{country}</span>
            </h3>
          </div>
          <div className='temp'>
            <h3>
              tempreture: <span>{temp}&#176;C</span>
            </h3>
          </div>
        </div>
        <div className='state'>
          <h2>{description}</h2>
          <div className='icon'>{weatherIcon}</div>
        </div>
        <div className='wind'>
          <h1>wind : </h1>
          <h4>degree: {deg}&#176;</h4>
          <h4>speed: {speed}m/s S</h4>
        </div>
      </div>
    </>
  )
}

export default Weather
