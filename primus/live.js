const Score = require("../models/Score");

module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {
        /* options */
    });
    //check if connection, then console log
    primus.on('connection', (spark) => {
        console.log('connected');
        //if data is received, console log
        spark.on('data', async (data) => {
            console.log(data);

            // Save the data to MongoDB
            const myData = new Score(data);
            try {
                await myData.save();
                console.log('Data saved to MongoDB');
            } catch (err) {
                console.log(err);
            }
            //send data back to all clients
            primus.write(data);
        });
    });
}