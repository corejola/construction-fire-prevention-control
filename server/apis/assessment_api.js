const db = require("../models");

module.exports = {

    postAssessement: (req, res) => {
        db.SurveyRiskAssessment.create(req.body)
            .then((dbAssessment) => {
                return db.Level
                    .findOneAndUpdate(
                        { _id: req.params.id },
                        { $push: { riskAssessments: dbAssessment._id } },
                        { new: true });
            })
            .then((dbLevel) => res.json(dbLevel))
            .catch((err) => res.json(err));
    }

};