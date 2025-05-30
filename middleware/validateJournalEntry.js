const Joi = require('joi');

const journalEntrySchema = Joi.object({
  user_id: Joi.number().integer().required(),
  entry_text: Joi.string().min(1).required(),
  mood_rating: Joi.number().integer().min(1).max(5).required(),
  timestamp: Joi.date().iso().required(),
});

module.exports = function validateJournalEntry(req, res, next) {
  const { error } = journalEntrySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, error: error.details[0].message });
  }
  next();
};