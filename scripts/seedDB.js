const mongoose = require("mongoose");
const db = require("../server/models");

// This file empties the db collections and inserts the below
// Need to register users first from client side due to the bcrypt hashing

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1/fire-risk-assessment-db"
);

// const userSeed = [
//     {
//         username: "testman",
//         email: "test@test.com",
//         password: "Password123!"
//     },
//     {
//         username: "blahman",
//         email: "blah@blah.com",
//         password: "Password123!"
//     }
// ];

// db.User
//     .remove({})
//     .then(() => db.User.collection.insertMany(userSeed))
//     .then(data => {

db.User.find({}).then((users) => {

    const surveySeed = [
        {
            extinguishers: false,
            smokeFireDetection: false,
            smokeFireAlarms: false,
            fireRisers: false,
            emergencyEgress: false,
            riskAssessmentResult: "critical",
            assessementDate: new Date(Date.now()),
            user: users[0]._id
        },
        {
            extinguishers: true,
            smokeFireDetection: true,
            smokeFireAlarms: true,
            fireRisers: true,
            emergencyEgress: true,
            riskAssessmentResult: "normal",
            assessementDate: new Date(Date.now()),
            user: users[1]._id
        }
    ];

    db.SurveyRiskAssessment
        .remove({})
        .then(() => db.SurveyRiskAssessment.collection.insertMany(surveySeed))
        .then(data => {

            db.SurveyRiskAssessment.find({}).then((surveys) => {

                const levelSeed = [
                    {
                        levelNumber: "1",
                        riskAssessments: [surveys[0]._id, surveys[1]._id]
                    },
                    {
                        levelNumber: "2",
                        riskAssessments: []
                    }
                ];

                db.Level
                    .remove({})
                    .then(() => db.Level.collection.insertMany(levelSeed))
                    .then(data => {

                        db.Level.find({}).then((levels) => {

                            const towerSeed = [
                                {
                                    towerNumber: "1",
                                    levels: [levels[0]._id, levels[1]._id]
                                }
                            ];

                            db.Tower
                                .remove({})
                                .then(() => db.Tower.collection.insertMany(towerSeed))
                                .then(data => {
                                    console.log(data.result.n + " records inserted!");
                                    process.exit(0);
                                })
                                .catch(err => {
                                    console.error(err);
                                    process.exit(1);
                                });

                        });

                        // console.log(data.result.n + " records inserted!");
                        // process.exit(0);
                    })
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    });

            });

            // console.log(data.result.n + " records inserted!");
            // process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

});

        // console.log(data.result.n + " records inserted!");
        // process.exit(0);
    // })
    // .catch(err => {
    //     console.error(err);
    //     process.exit(1);
    // });



