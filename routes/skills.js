var express = require('express');
var router = express.Router();
var skillDb = require('../models/skills')
var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;