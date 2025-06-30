const pool = require("../config/db");

const adminController = {
  createProduct: async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
        dimensions,
        status,
      } = req.body;

      const query = `INSERT INTO 
        products(name,description,price,stock,category_id,image_url,dimensions,status)
        VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *`;

      const values = [
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
        dimensions,
        status,
      ];

      const result = await pool.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      console.log("REQ BODY:", req.body);
      console.log("REQ PARAMS:", req.params);
      const { id } = req.params;
      const {
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
        dimensions,
        status,
      } = req.body;

      const query = `UPDATE products
    SET
        name = COALESCE($1, name),
        description = COALESCE($2, description),
        price = COALESCE($3, price),
        stock = COALESCE($4,stock),
        category_id = COALESCE($5,category_id),
        image_url = COALESCE($6,image_url),
        dimensions = COALESCE($7,dimensions),
        status = COALESCE($8,status)
    WHERE id = $9
    RETURNING *`;

      const values = [
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
        dimensions,
        status,
        id,
      ];
      result = await pool.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("UPDATE ERROR:", error);
      res.status(500).json({ error: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const query = `
      DELETE FROM products
      WHERE id = $1
      RETURNING *`;

      result = await pool.query(query, [id]);

      if (result.rows.length === 0) {
        res.status(404).json({ message: "Product nije nadjen" });
      }
      res.status(201).json({ message: "Product uspesno obrisan" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = adminController;
