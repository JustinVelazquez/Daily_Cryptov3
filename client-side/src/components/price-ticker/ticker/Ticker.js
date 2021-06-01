import React from 'react'

const Ticker = ({coin}) => {
    return (
        <div>
          <span>{coin.symbol}</span>
        </div>
    )
}

export default Ticker
