const pool = require('../utils/pool');

class Plane {
  id;
  model;
  engine_count;
  maker;

  constructor(row) {
    this.id = row.id;
    this.model = row.model;
    this.engine_count = row.engine_count;
    this.maker = row.maker;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT id, model FROM planes');
    return rows.map((row) => new Plane(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM planes WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Plane(rows[0]);
  }

  static async insert({ model, engine_count, maker }) {
    const { rows } = await pool.query(
      'INSERT INTO planes (model, engine_count, maker) VALUES ($1, $2, $3) RETURNING *',
      [model, engine_count, maker]
    );
    return new Plane(rows[0]);
  }

  static async updateById(id, change) {
    const plane = await Plane.getById(id);
    if (!plane) return null;
    const { model, engine_count, maker } = { ...plane, ...change };
    const { rows } = await pool.query(
      `UPDATE planes SET model=$2, engine_count=$3, maker=$4 WHERE id=$1 RETURNING *`,
      [model, engine_count, maker]
    );
    return new Plane(rows[0]);
  }
}

module.exports = { Plane };
