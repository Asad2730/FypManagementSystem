const TaskPlan = require("../models/task_plan");
const User = require('../models/user');

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
      let rs = [];
      const uid = req.params.uid;
      const taskPlans = await TaskPlan.find({
        'asgby':req.params.id,
      });
      
      for (let i = 0; i < taskPlans.length; i++) {
        let id = taskPlans[i]['asgto'];
        let user = await User.findById(id);
        if (user) {
            let taskPlan = taskPlans[i];
          let data = { taskPlan, user };
          rs.push(data);
        }
      }
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
   
};

const taskPlan_add = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "profileImage") is used to retrieve the uploaded file
  let sampleFile = req.files.proposalFile;

  // Use the mv() method to place the file somewhere on your server
  await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  const taskPlan = new TaskPlan({
    name: req.body.name,
    asgto: req.body.asgto,
    asgby: req.body.asgby,
    description: req.body.description,
    file: sampleFile.name,
    status: 'pending',
    deadline: Date(req.body.deadline),
   // type: req.body.type,
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
