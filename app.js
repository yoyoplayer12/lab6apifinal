const fs = require('fs');
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

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

app.use(express.json());

//use routes
app.use("/api/v1/scores", scoreRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
});
// enable cors express
const cors = require("cors");
app.use(cors());