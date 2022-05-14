const express = require('express')
const router = express.Router()
const apiController = require("../controllers/apis.js");
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Users/mamnoonsiddiqui/Desktop/Projects/test/theNodeTrain/src/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

router.post('/signup', upload.single('image'), apiController.handleSingUp)
router.get('/getCounties', apiController.getCounties)
router.get('/getStatesByCountryId/:country_id', apiController.getStatesByCountryId)
// router.get('/getStatesByCountryId/:country_id?', apiController.getStatesByCountryId) for option use , use ? in last and dont use params in controller


module.exports = router
