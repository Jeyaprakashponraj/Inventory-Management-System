const express = require('express');
const { signup,signin } = require("../Controllers/authController");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.post('/register', signup);
router.post('/login', signin);

module.exports = router;
