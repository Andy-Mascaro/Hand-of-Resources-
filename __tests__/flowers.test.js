const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('flowers routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/ should return a flower names', async () => {
    const resp = await request(app).get('/flowers');
    expect(resp.status).toEqual(200);
    expect(resp.body.length).toEqual(3);
    const flower = resp.body.find((char) => char.id === '2');
    expect(flower).toHaveProperty('name', 'Freesia');
  });

  it('/:id should return flower detail', async () => {
    const resp = await request(app).getById();
    expect(resp.status).toEqual(200);
  });

  afterAll(() => {
    pool.end();
  });
});
