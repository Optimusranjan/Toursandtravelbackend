//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
//const session = require('session');
//const port = process.env.PORT || 3000;

//database import from database folder to db.js
const connectdb = require('./database/database');
const path = require('path');

dotenv.config({
    path: '.env',
});

connectdb();

//import routes

const user_route = require('./routes/user_route');

const app = express();
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json()); //for postman sending code

app.use('/', express.static(path.join(__dirname, 'files')))


app.use(user_route);

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server is running on port at http://localhost:${PORT}`);
});