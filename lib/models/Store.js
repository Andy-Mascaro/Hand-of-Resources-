const pool = require('../utils/pool');

class Store {
  id;
  name;
  product;
  member_ship;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.product = row.product;
    this.member_ship = row.member_ship;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM stores');
    return rows.map((row) => new Store(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM stores WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Store(rows[0]);
  }

  static async insert({ name, product, member_ship }) {
    const { rows } = await pool.query(
      'INSERT INTO stores (name, product, member_ship) VALUES ($1, $2, $3) RETURNING *',
      [name, product, member_ship]
    );
    return new Store(rows[0]);
  }
}

module.exports = { Store };
