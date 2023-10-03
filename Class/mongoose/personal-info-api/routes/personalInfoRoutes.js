const express = require('express');
const router = express.Router();

const {
    createPersonalInfo,
} = require('../controllers/personalinfoController');

router.post('/', createPersonalInfo);
// router.get('/' , gerPersonalInfo);

module.exports = router;