import React from 'react'



const Weather = ({capital, weather}) => {
    console.log('eqw')
    return(
    <div>
        <h3>
            Weather in {capital}
        </h3>
        temperature: {weather.temperature} Celcius <br/>
        <img src={weather.weather_icons}/> <br/>
        wind: {weather.wind_speed} mph direction {weather.wind_dir}

    </div>
    )

}


export default Weather