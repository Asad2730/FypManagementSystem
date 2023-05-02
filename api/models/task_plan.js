const mongoose = require("mongoose");

const taskPlanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    asgto: {
      type: Object,
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
      required: true,
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
