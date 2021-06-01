import axios from 'axios';



const proxy = 'https://cors-anywhere.herokuapp.com/';

const url =
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h%2C7d`;

export const fetchCoins = () => axios.get(url);
