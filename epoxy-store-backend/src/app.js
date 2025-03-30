const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./middleware/errorHandler');


const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use('/api/products',productRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/users',userRoutes);
app.use('/api/categories',categoryRoutes);

//Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})