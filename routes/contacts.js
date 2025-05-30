const express = require('express');
const router = express.Router();
const {
  addContact,
  getContacts,
  getContactsByUser
} = require('../controllers/contactsController');

const validateContact = require('../middleware/validateContact');

// New route per spec
router.post('/add', addContact);

// Existing routes
router.post('/', addContact);
router.get('/', getContacts);
router.get('/user/:id', getContactsByUser);

module.exports = router;