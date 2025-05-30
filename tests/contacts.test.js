const request = require('supertest');
const app = require('../index');
const pool = require('../db');

describe('Contacts API', () => {
  it('should add a new contact', async () => {
    const response = await request(app).post('/contacts/add').send({
      user_id: 1,
      contact_name: 'Jane Doe',
      contact_email: 'jane@example.com',
      contact_phone: '9876543210'
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
  });

  it('should fetch contacts for a user', async () => {
    const response = await request(app).get('/contacts/user/1');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  afterAll(async () => {
    await pool.end(); // 👈 closes the DB connection pool
  });
});
