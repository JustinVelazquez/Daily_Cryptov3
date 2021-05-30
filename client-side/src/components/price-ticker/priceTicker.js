import React from 'react';
import { useSelector } from 'react-redux';

function PriceTicker() {
  const price = useSelector((state) => state.price);
  console.log(price);
  return (
    <div>
      <h1>Price Ticker</h1>
    </div>
  );
}

export default PriceTicker;
