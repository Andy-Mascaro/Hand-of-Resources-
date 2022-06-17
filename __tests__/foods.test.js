const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('foods routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});

it('/ should return a foods', async () => {
  const resp = await request(app).get('/foods');
  expect(resp.status).toEqual(200);
});
