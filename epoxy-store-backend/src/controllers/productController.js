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
    },
    //Get single product
    getSingleProduct: async(req,res) => {
        try {
            const {id} = req.params; //Get id from request parameters
            const query = 'SELECT * FROM products WHERE id = $1'; //Parameterized query to prevent SQL injection
            const result = await pool.query(query,[id]);

            if(result.rows.length === 0) {
                return res.status(404).json({message: 'Product not found'});
            }
            res.json(result.rows[0]); //Return the first product found

        }catch(err) {
            res.status(500).json({error: err.message});
        }
    },

    createProduct: async(req,res) => {
        try {
            const { 
                name,
                description,
                price,
                stock,
                category_id,
                image_url,
                dimensions
            } = req.body;

            const query = `
                INSERT INTO products
                 (
                    name,
                    description,
                    price,
                    stock,
                    category_id,
                    image_url,
                    dimensions
                )
                 VALUES ($1, $2, $3, $4, $5, $6, $7)
                 RETURNING *`;
            
            const values = [
                name,
                description,
                price,
                stock || 0,
                category_id,
                image_url,
                dimensions
            ];

            const result = await pool.query(query,values);
            res.status(201).json(result.rows[0]); //Return the created product

        }catch(err) {
            res.status(500).json({error: err.message});
        }
    },

    deleteProduct: async(req,res) => {
        try {
            const {id} = req.params; //Get id from request parameters
            const query = 'DELETE FROM products WHERE id = $1 RETURNING *';  //Parameterized query to prevent SQL injection
            const result = await pool.query(query,[id]);

            if(result.rows.length === 0) {
                result.status(404).json({message: 'Product not found'});
            }

            res.status(201).json({message: 'Product deleted successfully'}); //Return the first product found

        }catch(err) {
            res.status(500).json({error: err.message});
        }

    },

    updateProduct: async(req,res) => {
        try {
            const {id} = req.params; //Get id from request parameters
            const { 
                name,
                description,
                price,
                stock,
                category_id,
                image_url,
                dimensions
            } = req.body;

            const query = `
                UPDATE products
                 SET 
                    name = COALESCE($1,name),
                    description = COALESCE($2,description),
                    price = COALESCE($3,price),
                    stock = COALESCE($4,stock),
                    category_id = COALESCE($5,category_id),
                    image_url = COALESCE($6, image_url),
                    dimensions = COALESCE($7, dimensions)
                 WHERE id = $8
                 RETURNING *`;
            
            const values = [
                name,
                description,
                price,
                stock || 0,
                category_id,
                image_url,
                dimensions,
                id
            ];

            const result = await pool.query(query,values);

            if(result.rows.length === 0) {
                return res.status(404).json({message: 'Product not found'});
            }

            res.status(200).json(result.rows[0]); //Return the created product

        }catch(err) {
            res.status(500).json({error: err.message});
        }
    },

    getHighlightedProducts: async(req,res) => {
        try {
            const result = await pool.query(`SELECT * FROM products ORDER BY RANDOM() LIMIT 4`);
            res.json(result.rows);
        }catch(err) {
            res.status(500).json({error: err.message});
        }
    }

};

module.exports = productController;