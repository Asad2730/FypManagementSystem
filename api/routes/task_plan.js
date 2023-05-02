const router = require("express").Router();
const taskPlanController=require('../controllers/taskPlanController');

router.get("/",taskPlanController.taskPlan_all);
router.get("/:id",taskPlanController.taskPlan_details);
router.post("/",taskPlanController.taskPlan_add);
router.delete("/:id",taskPlanController.taskPlan_delete);
router.put("/:id",taskPlanController.taskPlan_update);

module.exports = router;
