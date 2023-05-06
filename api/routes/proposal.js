const router = require("express").Router();
const proposalController=require('../controllers/proposalController');


router.post("/",proposalController.add);
router.get('/:uid',proposalController.user_proposals)
router.post('/downloadFile/:fileName',proposalController.downloadFile)
router.get('/getProposals/:status',proposalController.getProposals)
router.put('/',proposalController.updateProposatStatus)
router.put('/addEvaluator',proposalController.addEvalouator)
router.get('/admin',proposalController.adminHome)

module.exports = router;
