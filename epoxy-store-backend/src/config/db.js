const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: false,
    connectionTimeoutMillis: 5000
});

//test connection with async/await for better error handling

const testConnection = async() => {
    try {
        const client = await pool.connect();
        console.log("Uspesna konekcija sa bazom");
        client.release();

    }catch(err) {
        console.log("Database connection error",err.message);
    }
}

testConnection();

module.exports = pool;