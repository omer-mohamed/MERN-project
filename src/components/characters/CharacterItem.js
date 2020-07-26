import React from 'react'

const CharacterItem = ({ item }) => {
  let data = JSON.parse(item);
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <ul>
            <li>
              <strong></strong> {data.charityName}
            </li>
          </ul>
        </div>
        <div className='card-back'>
          <h1>{data.charityName}</h1>
          <ul>
          <li>
              <strong>EIN: </strong> {data.ein}
            </li>
            <li>
              <strong></strong> {data.mailingAddress.city}
            </li>
            <li>
              <strong></strong> {data.mailingAddress.stateOrProvince}
            </li>
            <li>
              <strong></strong> {data.mailingAddress.postalCode}
            </li>
            <li>
            <a href={data.charityNavigatorURL}>Website</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
