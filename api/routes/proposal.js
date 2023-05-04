const router = require("express").Router();
const proposalController=require('../controllers/proposalController');


router.post("/",proposalController.add);
router.get('/:uid',proposalController.user_proposals)

module.exports = router;
