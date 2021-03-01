import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])


  const [filter, setFilter] = useState('')

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, ' countries')
  console.log('render', weather.length, ' weather state')

  
  useEffect((apiKey, capital) => {
    console.log('effect')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [])



{/*}
  const getWeather = async (apiKey, capital) => {
    axios
        .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
        .then(response => {
            setWeather(response.data)
            console.log('response', response)
        })
  }
*/}



  const filterCountries = (event) => {
    setFilter(event.target.value)
  }



  return (
    <div>
      <Filter filter={filter} filterCountries={filterCountries} />
      <Countries countries={countries} filter={filter} apiKey={apiKey} weather={weather}  />


    </div>
  )
}
export default App;
