require('dotenv').config();
const express = require('express');
const cors = require('cors');
const journalRoutes = require('./routes/journal');
const contactRoutes = require('./routes/contacts');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/journal', journalRoutes);
app.use('/contacts', contactRoutes);

// Only start server if not in test environment
module.exports = app;
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}