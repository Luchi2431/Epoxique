const {Pool} = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });


const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: false,
    connectionTimeoutMillis: 5000
});

pool.connect()
    .then(() => console.log('Successfully connected to database'))
    .catch(err => console.error('Database connection error:', err));

module.exports = pool;