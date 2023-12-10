const Score = require("../../../models/Score");

const index = (req, res) => {
    Score.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

const create = async(req, res) => {
    let m = new Score();
    m.score = req.body.score;
    m.user = req.body.user;
     try {
        let doc = await m.save();
        res.json({
            "status": "success",
            "score": "score sent",
            "data": {
                "score": doc
            }
        });
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "score": "Could not save score"
        });
    }

};

module.exports.create = create;
module.exports.index = index;