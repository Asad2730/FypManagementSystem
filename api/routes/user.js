const router = require("express").Router();
const userController=require('../controllers/userController');


const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  // Create multer middleware
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024* 50 }, // set file size limit to 50MB
    fileFilter: function (req, file, cb) {
      const fileTypes = /jpeg|jpg|png|gif/; // define allowed file types
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = fileTypes.test(file.mimetype);
      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb('Error: Images Only!');
      }
    }
  });

router.get("/",userController.user_all);
router.post("/login",userController.login_user);
router.get("/:id",userController.user_details);
router.post("/",upload.array('profileImage'),userController.user_add);
router.delete("/:id",userController.user_delete);
router.put("/:id",userController.user_update);

module.exports = router;
