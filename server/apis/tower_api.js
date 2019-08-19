const db = require("../models");

module.exports = {

    findAllTowers: (req, res) => {
        db.Tower.find({})
            .populate("levels")
            .then(dbTower => res.json(dbTower))
            .catch(err => res.status(422).json(err))

    }

};