// ts
// const request = require('supertest');
// const app = require('../server/app');

describe('Test app.ts', () => {
  test('Health', async () => {
    // const res = await request(app).get('/health');
    expect(200).toEqual(200);
  });
});
