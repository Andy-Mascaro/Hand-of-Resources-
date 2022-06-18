const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('stores routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/ should return a store names', async () => {
    const resp = await request(app).get('/stores');
    expect(resp.status).toEqual(200);
    expect(resp.body.length).toEqual(3);
    const old = resp.body.find((char) => char.id === '2');
    expect(old).toHaveProperty('name', 'Old Navy');
  });

  it('/:id should return store detail', async () => {
    const resp = await request(app).get('/stores/3');
    expect(resp.status).toEqual(200);
  });

  afterAll(() => {
    pool.end();
  });
});
