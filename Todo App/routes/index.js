const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

// home page
router.get('/',homeController.home);

//on submitting the create task form
router.post('/create-task',homeController.createTask);

//on submitting the delete tasks form
router.post('/delete-tasks',homeController.deleteTask);

// export routes to be availble globally
module.exports = router;