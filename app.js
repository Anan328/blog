const express = require("express");
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const mongoose = require("mongoose");

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

mongoose.connect(
    "mongodb+srv://anan:04password@cluster0.mnxfnkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then((result)=>{
    app.listen(8000);
    console.log("connected to server");
})