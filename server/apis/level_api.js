const db = require("../models");

module.exports = {

    findAllLevels: (req, res) => {

        db.Tower.findOne({ _id: req.params.id })
            .populate("levels")
            .then((dblevel) => {

                res.json(dblevel)

            })
            .catch((err) => {
                res.json(err)
            })

    }

};