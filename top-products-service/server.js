require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const productsRouter = require('./src/api/products');

// Enable CORS for all routes
app.use(cors());

app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
