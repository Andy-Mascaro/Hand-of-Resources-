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

  it('POST /seasons should add new season', async () => {
    const resp = await request(app).post('/seasons').send({
      name: 'Rainy',
      temp: 'chilly',
      fun: 'jump in puddles',
      outside: 'muddy',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Rainy');
    expect(resp.body.temp).toEqual('chilly');
    expect(resp.body.fun).toEqual('jump in puddles');
    expect(resp.body.outside).toEqual('muddy');
    expect(resp.body.id).not.toBeUndefined();
  });

  it('PUT /seasons/:id should update season', async () => {
    const resp = await request(app).put('/seasons/1').send({ fun: 'picnic' });
    // expect(resp.status).toEqual(200);
    expect(resp.body.fun).toEqual('picnic');
  });

  afterAll(() => {
    pool.end();
  });
});
