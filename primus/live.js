module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {
        /* options */
    });
    //check if connection, then console log
    primus.on('connection', (spark) => {
        console.log('connected');
        //if data is received, console log
        spark.on('data', (data) => {
            console.log(data);

            //send data back to all clients
            primus.write(data);
        });
    });
}