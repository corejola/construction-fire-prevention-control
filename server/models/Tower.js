const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const towerSchema = new Schema({

    towerNumber: String,

    // this needs to be an array of objects so each tower can have many levels
    levels: [{
        type: Schema.Types.ObjectId,
        ref: "Level"
    }]

});

const Tower = mongoose.model("Tower", towerSchema);

module.exports = Tower;