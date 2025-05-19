const pool = require('../config/db');

const categoryController = {
    //Get all categories
    getAllCategories: async(req,res) => {
        try {
            const query = 'SELECT * FROM categories';
            const result = await pool.query(query);
            res.json(result.rows);
        }catch(err) {
            res.status(500).json({error: err.message});
        }
    },

    //Get product by Category ID
    getProductsByCategoryId: async(req,res) => {
        try {
            const {id} = req.params; //Get id from request parameter
            const query = 
            `SELECT p.*,c.name as category_name
            FROM products p
            JOIN categories c 
            ON p.category_id = c.id
            WHERE c.id = $1 AND p.status = 'available'`;
            
            const result = await pool.query(query,[id]);

            if(result.rows.length === 0) {
                return res.status(404).json({message: 'No products found in this category'});
            }
            res.json(result.rows);
            
        }catch(err) {
            res.status(500).json({error:err.message});
        }
    },

    getFeaturedCategories: async(req,res) => {
        try {
            const featuredIds = [1,2,3];

            const query = 
            `SELECT id,name,description,image_url
             FROM categories
             WHERE id = ANY($1)
             ORDER BY ARRAY_POSITION($1, id)`;

             const result = await pool.query(query,[featuredIds]);
             res.json(result.rows);
        }catch(err) {
            res.status(500).json({error:err.message});
        }
    },

    getCategoryByID: async(req,res) => {
        try {
            const {id} = req.params;
            const query = 'SELECT * FROM categories WHERE id=$1';
            const result = await pool.query(query,[id]);
            res.json(result.rows[0]);

        }catch(err) {
            res.status(500).json({error:err.message});
        }
    }
    


}

module.exports = categoryController;