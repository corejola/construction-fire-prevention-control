// 'use strict';

// app/models/user.js
// load the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema for our user model
const surveyRiskAssessementSchema = new Schema({

    extinguishers: {
        type: Boolean,
        default: false
    },
    smokeFireDetection: {
        type: Boolean,
        default: false
    },
    smokeFireAlarms: {
        type: Boolean,
        default: false
    },
    fireRisers: {
        type: Boolean,
        default: false
    },
    emergencyEgress: {
        type: Boolean,
        default: false

    },
    riskAssessmentResult: {
        type: String
    },
    assessmentDate: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

const SurveyRiskAssessment = mongoose.model("SurveyRiskAssessment", surveyRiskAssessementSchema);

// create the model for users and expose it to our app
module.exports = SurveyRiskAssessment;