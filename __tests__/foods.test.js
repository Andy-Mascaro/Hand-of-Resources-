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

  it('/:id should return food detail', async () => {
    const resp = await request(app).get('/foods/3');
    expect(resp.status).toEqual(200);
    const spin = {
      id: '3',
      name: 'Spinach',
      taste: 'Earthy',
      healthy: 'High in fiber',
    };
    expect(resp.body).toEqual(spin);
  });

  it('POST /foods should create a new food', async () => {
    const resp = await request(app).post('/food').send();
    expect(resp.status).toEqual(200);
  });

  afterAll(() => {
    pool.end();
  });
});
