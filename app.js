const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const fillingController = require('./controllers/fillingController');

const app = express();

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))


// app.use(express.bodyParser());
app.use(express.json());
//connect routes
app.use('/', require('./routers/router.js'));

app.use('/filling',fillingController);

app.listen(3000, () => console.log('Listening on port 3000...'));