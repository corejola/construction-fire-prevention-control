import axios from "axios";

export default {

    getTowers: () => axios.get("/apis/towers"),
    getLevels: () => axios.get("/apis/levels"),
    saveAssessment: (data) => axios.post("/apis/surveyRiskAssessments", data),
};