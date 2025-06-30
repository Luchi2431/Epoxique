const express = require("express");
const path = require("path");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

// Middlewares

app.use(
  cors({
    origin: [
      "https://www.epoxique.rs",
      "https://api.epoxique.rs",
      "http://localhost:5173",
      "https://epoxique.rs",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-key"],
  })
);
app.use(express.json());
app.use(
  "/api",
  express.static(path.join(__dirname, "../public/images/products"))
);

// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);

app.use(
  cors({
    origin: [
      "https://www.epoxique.rs",
      "https://api.epoxique.rs",
      "http://localhost:5173",
      "https://epoxique.rs",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(
  "/api",
  express.static(path.join(__dirname, "../public/images/products"))
);

// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

// Error handling
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
