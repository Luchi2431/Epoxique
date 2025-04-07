const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');
const categoryRouter = require('./routes/categoryRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname,'../public/images')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRouter);

// Basic test route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Epoxique API' });
});

// Error handling middleware
app.use(errorHandler);
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Add graceful shutdown
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port', process.env.PORT || 5000);
});