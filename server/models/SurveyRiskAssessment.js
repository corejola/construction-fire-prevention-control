'use strict';

// app/models/user.js
// load the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema for our user model
const surveyRiskAssessementSchema = new Schema({

    extinguishers: {
        type: Boolean
    },
    smokeFireDetection: {
        type: Boolean
    },
    smokeFireAlarms: {
        type: Boolean
    },
    fireRisers: {
        type: Boolean
    },
    emergencyEgress: {
        type: Boolean
    },
    riskAssessmentResult: {
        type: String
    },
    assessmentDate: {
        type: Date,
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

const SurveyRiskAssessment = mongoose.model("SurveyRiskAssessment", surveyRiskAssessementSchema);

// create the model for users and expose it to our app
module.exports = SurveyRiskAssessment;