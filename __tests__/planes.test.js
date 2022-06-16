const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('planes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should show planes detail', async () => {
    const res = await request(app).get('/planes/2');
    expect(res.body).toEqual(200);
  });
  it('should show plane model', async () => {
    const res = await request(app).get('/planes');
    expect(res.body.length).toEqual(3);
    const skyhawk = res.body.find((char) => char.id === '3');
    expect(skyhawk).toHaveProperty('model', 'Skyhawk');
  });
  afterAll(() => {
    pool.end();
  });
});
