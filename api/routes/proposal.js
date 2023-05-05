const router = require("express").Router();
const proposalController=require('../controllers/proposalController');


router.post("/",proposalController.add);
router.get('/:uid',proposalController.user_proposals)
router.post('/downloadFile/:fileName',proposalController.downloadFile)
router.get('/getProposals/:status',proposalController.getProposals)
router.put('/',proposalController.updateProposatStatus)

module.exports = router;
