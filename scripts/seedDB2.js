const mongoose = require("mongoose");
const db = require("../server/models");

// This file empties the db collections and inserts the below
// Need to register users first from client side due to the bcrypt hashing

// to run this file on heroku, run the following script 'heroku run node db/seeds.js' 

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1/fire-risk-assessment-db"
);

const userSeed = [
    {
        username: "testman",
        email: "test@test.com",
        password: "Password123!"
    },
    {
        username: "blahman",
        email: "blah@blah.com",
        password: "Password123!"
    },
    {
        username: "testProfile",
        email: "test@test.com",
        password: "Testing!1"
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {

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
                    user: users[2]._id
                }
            ];

            db.SurveyRiskAssessment
                .remove({})
                .then(() => db.SurveyRiskAssessment.collection.insertMany(surveySeed))
                .then(data => {

                    db.SurveyRiskAssessment.find({}).then((surveys) => {

                        const levelSeed = [
                            {
                                levelNumber: "B2",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "B1",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "Ground",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "2",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "3",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "5",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "6",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "7",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "8",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "9",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "10",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "11",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "12",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "15",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "16",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "17",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "18",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "19",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "20",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "21",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "22/Mechanical",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "23",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "24",
                                riskAssessments: []
                            }, {
                                levelNumber: "25",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "26",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "27",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "28",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "29",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "30",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "31",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "32",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "33",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "34",
                                riskAssessments: []
                            }, {
                                levelNumber: "35",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "36",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "37",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "38",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "39",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "40",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "41",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "42",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "43",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "45",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "46",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "47",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "48",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "49",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "50",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "PH1",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "PH2",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "PH3",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "PH4",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "ROOF",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "MECH. ELEV. MACH.",
                                riskAssessments: []
                            },
                            {
                                levelNumber: "MECH. ROOF",
                                riskAssessments: []
                            }
                        ];

                        // for (let i = 21; i > 1; i--) {

                        //     levelSeed.splice(3, 0, {
                        //         levelNumber: "" + i + "",
                        //         riskAssessments: []
                        //     })

                        // };

                        // for (let i = 50; i > 22; i--) {

                        //     levelSeed.splice(24, 0, {
                        //         levelNumber: "" + i + "",
                        //         riskAssessments: []
                        //     })

                        // };

                        db.Level
                            .remove({})
                            .then(() => db.Level.collection.insertMany(levelSeed))
                            .then(data => {

                                db.Level.find({}).then((levels) => {

                                    const towerSeed = [
                                        {
                                            towerNumber: "1",
                                            levels: []
                                        }
                                    ];

                                    for (let i = 0; i < levels.length; i++) {
                                        towerSeed[0].levels.push(levels[i]._id)
                                    };

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

                            })
                            .catch(err => {
                                console.error(err);
                                process.exit(1);
                            });
                    });
                })
                .catch(err => {
                    console.error(err);
                    process.exit(1);
                });
        });
    });