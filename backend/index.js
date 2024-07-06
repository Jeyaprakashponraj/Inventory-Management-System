const express = require("express");
require("dotenv").config();
const connectDb = require("./Config/db");
const cors = require("cors");
const users = require("./Routes/authRoute");
const productRouter = require("./Routes/productRoute")
const cartRouter = require('./Routes/cartRoute')

const app = express();

app.use(cors());
app.use(express.json());

// DB CONNECTION
connectDb();

// API 
app.use("/api/product", productRouter);
app.use("/images", express.static("uploads"));
app.use('/auth', users); // Corrected route
app.use('/api/cart', cartRouter);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
