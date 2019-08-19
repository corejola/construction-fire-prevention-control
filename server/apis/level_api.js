const db = require("../models");

module.exports = {

    findAllLevels: (req, res) => {

        db.Tower.findOne({ _id: req.params.id })
            .populate("levels")
            .then((dbTower) => {

                res.json(dbTower.levels)

            })
            .catch((err) => {
                res.json(err)
            })

    }

};