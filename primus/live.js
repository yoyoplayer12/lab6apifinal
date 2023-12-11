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
                const updatedData = await Score.findOneAndUpdate(
                    { user: data.user }, // find a document with the same username
                    data, // update it with the new data
                    { new: true, upsert: true } // options: return updated doc and create if it doesn't exist
                )
                console.log('Data updated in MongoDB');
            } catch (err) {
                console.log(err);
            }
            //send data back to all clients
            primus.write(data);
        });
    });
}