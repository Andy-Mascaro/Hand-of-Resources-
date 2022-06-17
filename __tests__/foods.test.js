const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('foods routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/ should return a food names', async () => {
    const resp = await request(app).get('/foods');
    expect(resp.status).toEqual(200);
    expect(resp.body.length).toEqual(3);
    const cotton = resp.body.find((char) => char.id === '1');
    expect(cotton).toHaveProperty('name', 'Cotton Candy');
  });

  afterAll(() => {
    pool.end();
  });
});
