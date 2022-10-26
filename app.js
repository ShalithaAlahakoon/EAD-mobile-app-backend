const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://eadmobileapp:zSdgsfQinj3WJVUZ@eadmobileapp.huxcwuv.mongodb.net/?retryWrites=true&w=majority'

const fillingController = require('./controllers/fillingController');

const app = express();

mongoose.connect(url, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))


// app.use(express.bodyParser());
app.use(express.json());
//connect routes
app.use('/', require('./routers/router.js'));

app.use('/filling',fillingController);

app.listen(3000, () => console.log('Listening on port 3000...'));