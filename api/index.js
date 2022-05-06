const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port =5000;

app.listen(port,()=> {
  console.log("Server is runinng on port : ",port)
});

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URL;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

/* 
after create our models and routes we require our routes here and use them
*/
const postRoutes = require('./routes/posts');


app.use('/posts', postRoutes);


