const router = require("express").Router();
const userController=require('../controllers/userController');

router.get("/",userController.user_all);
router.get("/:id",userController.user_details);
router.post("/",userController.user_add);
router.delete("/:id",userController.user_delete);
router.put("/:id",userController.user_update);

module.exports = router;
