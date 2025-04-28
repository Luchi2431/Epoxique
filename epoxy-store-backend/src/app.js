const express = require('express');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./middleware/errorHandler');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middlewares
app.use(cors({
    origin: [
        'https://epoxique.vercel.app',
        'http://localhost:5173'
    ],
    credentials: true,
    methods: ['GET','POST','PUT','DELETE','OPTIONS']
}));
app.use(express.json());
app.use('/api/images', express.static(path.join(__dirname, '../public/images/products')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

// Error handling
app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});