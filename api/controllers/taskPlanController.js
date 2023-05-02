const TaskPlan = require("../models/task_plan");

const taskPlan_all = async (req, res) => {
  try {
    const taskPlan = await TaskPlan.find();
    res.json(taskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const taskPlan_details = async (req, res) => {
  try {
    const taskPlan = await TaskPlan.findById(req.params.id);
    res.json(taskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const taskPlan_add = async (req, res) => {

  const taskPlan = new TaskPlan({
    name: req.body.name,
    asgto: req.body.asgto,
    asgby: req.body.asgby,
    description: req.body.description,
    file: req.body.file,
    status: req.body.status,
    deadline: Date(req.body.deadline),
    type: req.body.type,
    marks: req.body.marks,
    remarks: req.body.remarks,
  });
  try {
    const savedtaskPlan = await taskPlan.save();
    
    res.send(savedtaskPlan);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const taskPlan_delete = async (req, res) => {
  try {
    const removetaskPlan = await TaskPlan.findByIdAndDelete(req.params.id);
    res.json(removetaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const taskPlan_update = async (req, res) => {
  try {
    const taskPlan = {
      name: req.body.name,
      asgto: req.body.asgto,
      asgby: req.body.asgby,
      description: req.body.description,
      file: req.body.file,
      status: req.body.status,
      deadline: Date(req.body.deadline),
      type: req.body.type,
      marks: req.body.marks,
      remarks: req.body.remarks,
    };
    const updatedtaskPlan = await TaskPlan.findByIdAndUpdate(
      { _id: req.params.id },
      taskPlan
    );
    res.json(updatedtaskPlan);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  taskPlan_all,
  taskPlan_details,
  taskPlan_add,
  taskPlan_delete,
  taskPlan_update,
};
