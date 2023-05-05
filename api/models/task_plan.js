const mongoose = require("mongoose");

const taskPlanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    asgto1: {
      type: String,
      required: true,
    },
    asgto2: {
      type: String,
      required: true,
    },
    asgby: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    file: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
    },
    remarks: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TaskPlans", taskPlanSchema);
