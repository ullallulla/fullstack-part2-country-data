import React from 'react'
import Language from './Language'
import Weather from './Weather'


const Country = ({ country, countries, weather, apiKey }) => {




    if (countries) {
        return (
            <div>
                {countries.name}
            </div >
        )
    }



    const languages = country.languages
    const capital = country.capital
    console.log('weather data',weather)


    
    



    return (
        <div>
            <h1>{country.name}</h1>
                capital {country.capital} <br />
                population {country.population} <br />

            <h3>languages</h3>
            <ul>
                {languages.map((language, i) =>
                    <Language key={i} language={language} />
                )}
            </ul>

            <img src={country.flag} width="100" height="100" />

            <Weather weather={weather} capital={capital} />

        </div>
    )


}




export default Country