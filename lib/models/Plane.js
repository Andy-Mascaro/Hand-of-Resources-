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
}

module.exports = { Plane };
