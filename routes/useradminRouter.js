const express = require('express');
const {
    createUserAdmin
} = require('../controllers/useradminController');

const router = express.Router();

router.post('/', createUserAdmin);

module.exports = router;