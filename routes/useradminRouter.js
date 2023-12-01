const express = require('express');
const router = express.Router();
const {
    getUserAdmins
} = require('../controllers/useradminController');

router.get('/', getUserAdmins);

module.exports = router;