const router = require("express").Router();
const taskPlanController=require('../controllers/taskPlanController');

router.get("/",taskPlanController.taskPlan_all);
router.get("/:id",taskPlanController.taskPlan_details);
router.post("/",taskPlanController.taskPlan_add);
router.delete("/:id",taskPlanController.taskPlan_delete);
router.put("/:id",taskPlanController.taskPlan_update);
router.get("/singleTask/:id",taskPlanController.singleTask);
router.get("/stdTask/:id",taskPlanController.studentTask);
router.post("/update/:id",taskPlanController.changeTaskStatus);
router.get("/taskHistory/:id",taskPlanController.taskHistory);
module.exports = router;
