const pool = require('../db');

// POST /contacts
exports.addContact = async (req, res) => {
  const { contact_name, contact_email, contact_phone, user_id } = req.body;

  if (!contact_name || !contact_email || !contact_phone || !user_id) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    await pool.query(
      `INSERT INTO contacts (user_id, contact_name, contact_email, contact_phone)
       VALUES ($1, $2, $3, $4)`,
      [user_id, contact_name, contact_email, contact_phone]
    );

    res.status(201).json({ success: true, message: 'Contact added successfully' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ success: false, error: 'Failed to add contact' });
  }
};

// GET /contacts
exports.getContacts = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM contacts ORDER BY created_at DESC`
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// GET /contacts/user/:id
exports.getContactsByUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await pool.query(
      `SELECT * FROM contacts WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch user contacts' });
  }
};
