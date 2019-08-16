const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const levelSchema = new Schema({

    levelNumber: String,

    // this needs to be an array of objects so each level can have many assesments
    riskAssessment: [{
        type: Schema.Types.ObjectId,
        ref: "SurveyRiskAssessment"
    }]

});

const Level = mongoose.model("Level", levelSchema);

module.exports = Level;