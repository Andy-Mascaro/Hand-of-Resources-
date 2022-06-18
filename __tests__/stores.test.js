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
    const resp = await request(app).get('/stores/2');
    expect(resp.status).toEqual(200);
    const store = {
      id: '2',
      name: 'Old Navy',
      product: 'Clothes',
      member_ship: 'No',
    };
    expect(resp.body).toEqual(store);
  });

  it('POST /stores should create a new store', async () => {
    const resp = await request(app).post('/stores').send({
      name: 'Big Five',
      product: 'Sports',
      member_ship: 'None',
    });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Big Five');
    expect(resp.body.product).toEqual('Sports');
    expect(resp.body.member_ship).toEqual('None');
    expect(resp.body.id).not.toBeUndefined();
  });

  it('PUT /stores/:id should update stores', async () => {
    const resp = await request(app).put('/stores/1').send({ name: 'Wowza' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Wowza');
  });

  it('DELETE /stores/:id should delete store', async () => {
    const resp = await request(app).delete('/store/3');
    expect(resp.status).toEqual(200);
  });

  afterAll(() => {
    pool.end();
  });
});
