const pool = require('../utils/pool');

class Season {
  id;
  name;
  temp;
  fun;
  outside;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.temp = row.temp;
    this.fun = row.fun;
    this.outside = row.outside;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM seasons');
    return rows.map((row) => new Season(row));
  }
}

module.exports = { Season };
