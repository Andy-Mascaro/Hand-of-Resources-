const pool = require('../utils/pool');

class Food {
  id;
  name;
  taste;
  healthy;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.taste = row.taste;
    this.healthy = row.healthy;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM foods');
    return rows.map((row) => new Food(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM foods WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Food(rows[0]);
  }

  static async insert({ name, taste, healthy }) {
    const { rows } = await pool.query(
      'INSERT INTO foods (name, taste, healthy) VALUES ($1, $2, $3) RETURNING *',
      [name, taste, healthy]
    );
    return new Food(rows[0]);
  }
}

module.exports = { Food };
