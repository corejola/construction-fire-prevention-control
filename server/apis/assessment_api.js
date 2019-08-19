const db = require("../models");

module.exports = {


    findAllAssessments: (req, res) => {

        db.Level.findOne({ _id: req.params.id })
            .populate("riskAssessments")
            .then((dbLevel) => {

                res.json(dbLevel.riskAssessments)

            })
            .catch((err) => {
                res.json(err)
            })

    },

    postAssessment: (req, res) => {
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