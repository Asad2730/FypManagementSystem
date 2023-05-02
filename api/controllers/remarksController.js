const Remarks = require("../models/remarks");

//Get All remarks
const remark_all = async (req, res) => {
  try {
    const remarks = await Remarks.find();
    res.json(remarks);
  } catch (error) {
    res.json({ message: error });
  }
};

//Get Single remark
const remark_details = async (req, res) => {
  try {
    const remarks = await Remarks.findById(req.params.id);
    res.json(remarks);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Add remark
const remark_add = async (req, res) => {
  const remark = new Remarks({
    detail: req.body.detail,
    from: req.body.from,
  });
  try {
    const savedremark = await remark.save();
    res.send(savedremark);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Delete remark
const remark_delete = async (req, res) => {
  try {
    const removeremark = await Remarks.findByIdAndDelete(req.params.id);
    res.json(removeremark);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update remark
const remark_update = async (req, res) => {
  try {
    const remark = {
      detail: req.body.detail,
      from: req.body.from,
    };

    const updatedremark = await Remarks.findByIdAndUpdate(
      { _id: req.params.id },
      remark
    );
    res.json(updatedremark);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  remark_all,
  remark_details,
  remark_add,
  remark_delete,
  remark_update,
};
