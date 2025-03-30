const pool = require('../config/db');

const productController = {
    //Get all products
    getAllProducts: async(req,res) => {
        try {
            const result = await pool.query('SELECT * FROM products');
            res.json(result.rows);
        }catch(err) {
            res.status(500).json({error: err.message});
        }
    }

};

module.exports = productController;