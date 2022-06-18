const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('seasons routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/seasons:id should show one season detail', async () => {
    const resp = await request(app).get('/seasons/4');
    const wint = {
      id: '4',
      name: 'Winter',
      temp: 'Cold',
      fun: 'Skiing',
      outside: 'Ground frosts over',
    };
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual(wint);
  });

  it('/seasons should show all seasons', async () => {
    const resp = await request(app).get('/seasons');
    expect(resp.status).toEqual(200);
    expect(resp.body.length).toEqual(4);
    const spring = resp.body.find((char) => char.id === '1');
    expect(spring).toHaveProperty('name', 'Spring');
  });

  afterAll(() => {
    pool.end();
  });
});
