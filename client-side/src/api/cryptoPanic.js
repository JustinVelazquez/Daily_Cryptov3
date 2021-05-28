//  Here will Call our CryptoPanic API
//  Will Make Several Calls to C.P API
//         a) all Stories
//         b) Filter by using ui elements
//         c) Filter by currency
//         c) Filter by Media

import axios from 'axios';

const url = `https://cryptopanic.com/api/v1/posts/?${process.env.CP_AUTH_TOKEN}=50a9543a3c7f6308fac40d7afcb8697186dea39d&public=true`;

const fetchPosts = () => axios.get(url);
