const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

router.post('/entry', journalController.createEntry);
router.get('/user/:id', journalController.getEntriesByUser);

module.exports = router;
