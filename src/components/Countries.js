import React from 'react'
import Country from './Country'




const Countries = ({ filter, countries, weather, apiKey }) => {

    const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()) && filter != '')
    console.log('countriesToShow', countriesToShow)
    if (countriesToShow.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }

    if ((countriesToShow.length < 10) && (countriesToShow.length > 1)) {
        return (

            countriesToShow.map((country, i) =>
                <Country key={i} countries={country} />
            )
        )
    }


    return (

        countriesToShow.map((country, i) =>
            <Country key={i} country={country} weather={weather} apiKey={apiKey} />,
        )

    )


}

export default Countries