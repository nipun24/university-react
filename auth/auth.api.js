const express = require('express');
const router = express.Router();

const authController = require('./auth.controller');

router.post('/', authController.verifyLogin);

module.exports = router;