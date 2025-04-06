const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');
const categoryRouter = require('./routes/categoryRoutes');

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:5173','https://epoxy-store.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRouter);

// Basic test route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Epoxique API' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});