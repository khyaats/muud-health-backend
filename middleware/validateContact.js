const Joi = require('joi');

const contactSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  contact_name: Joi.string().min(1).required(),
  contact_email: Joi.string().email().required(),
  contact_phone: Joi.string().pattern(/^\d{10}$/).required(),
});

module.exports = function validateContact(req, res, next) {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, error: error.details[0].message });
  }
  next();
};
