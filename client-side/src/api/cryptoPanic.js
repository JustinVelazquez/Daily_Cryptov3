//  Here will Call our CryptoPanic API
//  Will Make Several Calls to C.P API
//         a) all Stories
//         b) Filter by using ui elements
//         c) Filter by currency
//         c) Filter by Media

import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';

//Get all Posts/Stories
const url = `${proxy}https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CP_AUTH_TOKEN}&public=true`;
export const fetchPosts = () => axios.get(url);

//Filters

//Get All Media
const mediaUrl = `${proxy}https://cryptopanic.com/api/v1/posts/?auth_token=50a9543a3c7f6308fac40d7afcb8697186dea39d&kind=media`;
export const fetchMedia = () => axios.get(mediaUrl);
