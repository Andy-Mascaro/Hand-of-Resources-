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
    const { rows } = await pool.query('SELECT id, name FROM flowers');
    return rows.map((row) => new Flower(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM flowers WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Flower(rows[0]);
  }

  static async insert({ name, color, scent }) {
    const { rows } = await pool.query(
      'INSERT INTO flowers (name, color, scent) VALUES ($1, $2, $3) RETURNING *',
      [name, color, scent]
    );
    return new Flower(rows[0]);
  }

  static async updateById(id, change) {
    const flower = await Flower.getById(id);
    if (!flower) return null;
    const { name, color, scent } = { ...flower, ...change };
    const { rows } = await pool.query(
      `UPDATE flowers SET name=$2, color=$3, scent=$4 WHERE id=$1 RETURNING *`,
      [id, name, color, scent]
    );
    return new Flower(rows[0]);
  }
}

module.exports = { Flower };
