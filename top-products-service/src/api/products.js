// src/api/products.js
const express = require('express');
const router = express.Router();
const { getAuthToken, fetchProducts } = require('../services/authentication');

router.get('/:company/categories/:categoryName/products', async (req, res) => {
    const { company, categoryName } = req.params;
    const { n, page, minPrice, maxPrice } = req.query;

    try {
        const token = await getAuthToken();
        const products = await fetchProducts(categoryName, { n, page, minPrice, maxPrice, company, token });
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
