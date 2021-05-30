//  Here will Call our CryptoPanic API
//  Will Make Several Calls to C.P API
//         a) all Stories
//         b) Filter by using ui elements
//         c) Filter by currency
//         c) Filter by Media

import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = `${proxy}https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CP_AUTH_TOKEN}&public=true`;

export const fetchPosts = () => axios.get(url);
