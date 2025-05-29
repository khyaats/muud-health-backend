const pool = require('../db');

exports.createEntry = async (req, res) => {
  const { user_id, entry_text, mood_rating, timestamp } = req.body;
if (!user_id || !entry_text || !mood_rating || !timestamp) {
  return res.status(400).json({ success: false, error: 'Missing fields' });
}


  try {
    const result = await pool.query(
      `INSERT INTO journal_entries (user_id, entry_text, mood_rating, timestamp)
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [user_id, entry_text, mood_rating, timestamp]
      
    );
    console.log(typeof user_id, entry_text, mood_rating, timestamp);
    res.status(201).json({ success: true, entry_id: result.rows[0].id });
  } catch (err) {
    console.error('Database Insert Error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to create entry' });
    console.log(typeof mood_rating, mood_rating);

  }
};


exports.getEntriesByUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await pool.query(
      `SELECT * FROM journal_entries WHERE user_id = $1 ORDER BY timestamp DESC`,
      [userId]
    );
    console.log(typeof user_id);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
};
