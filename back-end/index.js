const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
dotenv.config();

//Here will Go Connection to DB

//Calling our dependencies
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());

//Initializing our Port
let PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json('Hello World')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...better go catch it!`);
});
