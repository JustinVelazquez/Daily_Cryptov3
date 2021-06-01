import React from 'react'

const Ticker = ({coin}) => {
    return (
        <div className="bg-blue-500 m-1 shadow-md text-sm">
          <span>{coin.symbol} </span>
          <span>${coin.current_price}</span>
          <span>{coin.price_change_percentage_24h}%</span>
        </div>
    )
}

export default Ticker
