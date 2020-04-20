var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SurveySchema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	user: { type: Schema.ObjectId, ref: "User", required: true },
}, {timestamps: true});

module.exports = mongoose.model("survey", SurveySchema, 'survey');