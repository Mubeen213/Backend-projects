const express = require('express');
const router = express.Router();
// include the controllers folder
const homeController  = require('../controllers/home_controller');
router.get('/',homeController.home);
module.exports = router;