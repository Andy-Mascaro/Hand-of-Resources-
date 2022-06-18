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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM seasons WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Season(rows[0]);
  }

  static async insert({ name, temp, fun, outside }) {
    const { rows } = await pool.query(
      'INSERT INTO seasons (name, temp, fun, outside) VALUE ($1, $2, $3, $4) RETURNING *',
      [name, temp, fun, outside]
    );
    return new Season(rows[0]);
  }
}

module.exports = { Season };
