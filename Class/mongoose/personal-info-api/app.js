const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personalInfoRoutes = require('./routes/personalInfoRoutes.js');
const models=require("./models/PersonalInfo.js")
const app = express();
const port = process.env.PORT || 3000;
 
// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0/anuj', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 
// Middleware for parsing JSON
app.use(bodyParser.json());
 
// Routes
app.use('/personal-info', personalInfoRoutes);
 
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 
module.exports = app;