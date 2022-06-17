const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('planes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/planes:id should show planes detail', async () => {
    const res = await request(app).get('/planes/2');
    const beluga = {
      id: '2',
      model: 'Beluga',
      engine_count: 2,
      maker: 'Airbus',
    };
    expect(res.body).toEqual(beluga);
  });

  it('/planes should show plane model', async () => {
    const res = await request(app).get('/planes');
    expect(res.body.length).toEqual(3);
    const skyhawk = res.body.find((char) => char.id === '3');
    expect(skyhawk).toHaveProperty('model', 'Skyhawk');
  });

  it('POST /planes should create a new plane', async () => {
    const res = await request(app).post('/planes').send({
      model: 'Jumbo',
      engine_count: 4,
      maker: 'Boeing',
    });

    expect(res.body.model).toEqual('Jumbo');
    expect(res.body.engine_count).toEqual(4);
    expect(res.body.maker).toEqual('Boeing');
    expect(res.body.id).not.toBeUndefined();
  });

  it('PUT /planes/:id should update plane', async () => {
    const res = await request(app)
      .put('/planes/3')
      .send({ model: 'nighthawk' });
    expect(res.body.model).toEqual('nighthawk');
  });

  it('DELETE /planes/:id should delete a plane', async () => {
    const res = await request(app).delete('/planes/1');
    expect(res.status).toEqual(200);
    const { body } = await request(app).get('/planes/1');
    expect(body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
