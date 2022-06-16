const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('planes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should show plane name', async () => {
    const res = await request(app).get('/planes');
    expect(res.body.length).toEqual(200);
  });
});
