const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('seasons routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/seasons should show all seasons', async () => {
    const resp = await request(app).get('/seasons');
    expect(resp.status).toEqual(200);
  });

  afterAll(() => {
    pool.end();
  });
});
