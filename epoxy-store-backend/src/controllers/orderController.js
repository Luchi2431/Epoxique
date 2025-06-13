const pool = require('../config/db');

exports.createOrder = async(req, res) =>  {
    const { customerInfo, items, totalAmount} = req.body;

    try {
        await pool.query('BEGIN');

        //Create order with separate columns
        const orderResult = await pool.query(
            `INSERT INTO orders (
                total_amount,
                shipping_address,
                customer_name,
                customer_phone,
                customer_email,
                customer_city,
                customer_postal_code,
                status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
              RETURNING id`,
              [
                totalAmount,
                customerInfo.address,
                customerInfo.name,
                customerInfo.phone,
                customerInfo.email,
                customerInfo.city,
                customerInfo.postalCode,
                'pending'
              ]
        );
        const orderId = orderResult.rows[0].id;

        //CREATE order items
        for(const item of items) {
            await pool.query(
                `INSERT INTO order_items (order_id, product_id, quantity, price)
                 VALUES ($1, $2, $3, $4)`,
                 [orderId, item.id, item.quantity, item.price]
            );
        }

        for(const item of items) {
            await pool.query('UPDATE products SET status = $1 WHERE id = $2',['gallery',item.id]);
        }

        await pool.query('COMMIT');

        res.status(201).json({
            success: true,
            orderId: orderId,
            message: 'Order created successfully'
        });

    }catch(error) {
        await pool.query('ROLLBACK');
        console.error('Error creating order:', error);
        res.status(500).json({ 
            error: 'Failed to create order',
            details: error.message 
        });
    }

};