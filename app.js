const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//START LISTEN TO SERVER
app.listen(3000);

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

//MIDDLEWARE
// app.use('/posts', () => {
// 	console.log('Middleware is working!')
// });
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//CREATE  ROUTES...
app.get('/',  (req, res) => {
	res.send("WE ARE ON HOME");
});

// app.get('/posts',  (req, res) => {
// 	res.send("WE ARE ON POSTS");
// });

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log("Connected to DB!!!");
});

