const express = require("express");
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const mongoose = require("mongoose");

require('dotenv').config();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json());
app.use(blogRoutes);
const URI =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.mnxfnkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(
    URI
).then((result)=>{
    app.listen(process.env.PORT||8000);
    console.log("connected to server");
})