var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");

//connect to mongodb
const credentials = "./etc/secrets/credentials.pem";
mongoose.connect("mongodb+srv://lab6.gfpqmsa.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority", {
    tlsCertificateKeyFile: credentials,
});

//check connection 
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB!");
//import routes


const scoreRouter = require("./routes/api/v1/scores");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//use routes
app.use("/api/v1/scores", scoreRouter);

});

var scoreRouters = require('./routes/api/v1/scores');

var app = express();

// enable cors express
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', scoreRouters);

module.exports = app;



const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

