import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/ping';

export const fetchPing = () => axios.get(url);
