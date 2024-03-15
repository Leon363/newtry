import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
        value={value}
        onChange={event => onChange(event.target.value)}
    >
        <option disabled key={options.value} value=''>{defaultValue}</option>
        {options.map(option => 
            <option value={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
}

export default MySelect