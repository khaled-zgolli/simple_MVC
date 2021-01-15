const express = require('express');
const userControllers=require('../controllers/userControllers');
const router = express.Router();

router.post('/sign-up',userControllers.addUser);
router.post('/sign-in',userControllers.sign_in);

module.exports = router;