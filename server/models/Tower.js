const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const towerSchema = new Schema({

    towerNumber: String,

    // this needs to be an array of objects so each level can have many assesments
    levels: [{
        type: Schema.Types.ObjectId,
        ref: "Level"
    }]

});

const Tower = mongoose.model("Tower", towerSchema);

module.exports = Tower;