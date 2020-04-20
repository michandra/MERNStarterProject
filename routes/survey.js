var express = require("express");
const SurveyController = require("../controllers/SurveyController");

var router = express.Router();

// router.get("/", SurveyController.surveyList);
// router.get("/:id", SurveyController.surveyDetail);
router.post("/", SurveyController.surveyStore);
// router.put("/:id", SurveyController.surveyUpdate);
// router.delete("/:id", SurveyController.surveyDelete);

module.exports = router;