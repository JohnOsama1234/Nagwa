const express = require('express');
const router = express.Router();
const { listWords, getRank } = require('../controllers/listWords');

router.get('/words', listWords);
router.post('/rank', getRank);


module.exports = router;