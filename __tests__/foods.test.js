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
    const resp = await request(app).post('/foods').send({
      name: 'Bread',
      taste: 'Fluffy',
      healthy: 'High in carbs',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Bread');
    expect(resp.body.taste).toEqual('Fluffy');
    expect(resp.body.healthy).toEqual('High in carbs');
    expect(resp.body.id).not.toBeUndefined();
  });

  it('PUT /foods/:id should update food', async () => {
    const resp = await request(app).put('/foods/2').send({ taste: 'Yummy' });
    expect(resp.status).toEqual(200);
    expect(resp.body.taste).toEqual('Yummy');
  });

  it('DELETE /foods/:id should delete food', async () => {
    const resp = await request(app);
    expect(res.status).toEqual(200);
  });

  afterAll(() => {
    pool.end();
  });
});
