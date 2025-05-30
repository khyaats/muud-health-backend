const request = require('supertest');
const app = require('../index');
const pool = require('../db');

describe('Journal API', () => {
  it('should create a new journal entry', async () => {
    const response = await request(app).post('/journal/entry').send({
      user_id: 1,
      entry_text: 'Test journal entry',
      mood_rating: 3,
      timestamp: new Date().toISOString(),
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
  });

  it('should return journal entries for a user', async () => {
    const response = await request(app).get('/journal/user/1');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  afterAll(async () => {
    await pool.end(); // 👈 closes the DB connection pool
  });
});
