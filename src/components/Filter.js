import React from 'react'

const Filter = ({ filter, filterCountries }) => {
    return (
        <div>
        find countries <input value={filter} onChange={filterCountries}/>
      </div>
    )
  }



export default Filter