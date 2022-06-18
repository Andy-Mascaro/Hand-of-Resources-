const pool = require('../utils/pool');

class Flower {
  id;
  name;
  color;
  scent;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.color = row.color;
    this.scent = row.scent;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM foods');
    return rows.map((row) => new Flower(row));
  }
}
