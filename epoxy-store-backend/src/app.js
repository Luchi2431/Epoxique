const express = require('express');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Error handling
app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});