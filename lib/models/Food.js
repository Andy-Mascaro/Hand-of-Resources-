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
}

module.exports = { Food };
