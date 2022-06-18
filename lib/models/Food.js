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

  static async updateById(id, change) {
    const food = await Food.getById(id);
    if (!food) return null;
    const { name, taste, healthy } = { ...food, ...change };
    const { rows } = await pool.query(
      `UPDATE foods SET name=$2, taste=$3, healthy=$4 WHERE id=$1 RETURNING *`,
      [id, name, taste, healthy]
    );
    return new Food(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM foods WHERE id = $1 RETURNING *',
      [id]
    );
    return new Food(rows[0]);
  }
}

module.exports = { Food };
