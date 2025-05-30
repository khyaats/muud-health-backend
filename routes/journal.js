const express = require('express');
const router = express.Router();
const { createEntry, getEntriesByUser } = require('../controllers/journalController');
const validateJournalEntry = require('../middleware/validateJournalEntry');

router.post('/entry', validateJournalEntry, createEntry);
router.get('/user/:id', getEntriesByUser);

module.exports = router;