//create mongoose schema for comments
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ScoreSchema = new Schema({
    score: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

//export model to use in index.js
const Score = mongoose.model("Score", ScoreSchema, "scores");
module.exports = Score;