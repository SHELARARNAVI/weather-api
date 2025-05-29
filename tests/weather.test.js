const request = require('supertest');
const app = require('../app');

describe('Weather API', () => {
  test('GET /weather?city=Melbourne returns weather info', async () => {
    const res = await request(app).get('/weather?city=Melbourne');
    expect(res.statusCode).toBe(200);
    expect(res.body.city).toBe('Melbourne');
    expect(res.body).toHaveProperty('temp');
    expect(res.body).toHaveProperty('condition');
  });

  test('GET /weather?city=Unknown returns 404', async () => {
    const res = await request(app).get('/weather?city=Unknown');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('City not found');
  });

  test('GET /health returns OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});
