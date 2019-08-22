import axios from "axios";

export default {

    getTowers: () => axios.get("/apis/towers"),
    getLevels: () => axios.get("/apis/levels"),
    getUser: () => axios.get("apis/users/getUser"),
    saveAssessment: (levelId, data) => axios.post("/apis/surveyRiskAssessments/new/" + levelId, data),
};