import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import Ticker from './ticker/Ticker';
import { getCoins } from '../../actions/prices';

function PriceTicker() {
  
  const coinList = useSelector((state) => state.coins);
  console.log(coinList)
  

  return (
    <div>
      {coinList.map((coin) => (
        <Ticker key={coin.id} coin={coin} />
      ))} 
    </div>
  );
}

export default PriceTicker;
