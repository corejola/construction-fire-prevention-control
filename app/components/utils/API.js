import axios from "axios";

export default {

    getTowers: () => axios.get("/apis/towers"),
    getLevels: (towerId) => axios.get("/apis/levels/" + towerId),
    getUser: () => axios.get("apis/users/getUser"),
    saveAssessment: (levelId, data) => axios.post("/apis/surveyRiskAssessments/new/" + levelId, data),
    viewRiskAssessment: () => axios.get("/apis/surveyRiskAssessments/results")
};