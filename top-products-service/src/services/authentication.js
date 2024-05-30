const axios = require('axios');

const getAuthToken = async () => {
    const url = `${process.env.API_BASE_URL}/auth`;
    const body = {
        companyName: "goMart",
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        ownerName: "Surya",
        ownerEmail: "suryanannuri09@gmail.com",
        rollNo: "21bd1a1256"
    };

    console.log('Requesting token with body:', body);

    try {
        const response = await axios.post(url, body);
        console.log('Token response:', response.data);
        return response.data.access_token;
    } catch (error) {
        console.error('Failed to fetch token:', error.response ? error.response.data : error.message);
        throw new Error('Authentication failed');
    }
};

const fetchProducts = async (categoryName, { n, page, minPrice, maxPrice, company, token }) => {
    const url = `${process.env.API_BASE_URL}/companies/${company}/categories/${categoryName}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    console.log('Fetching products with URL:', url, 'and config:', config);

    try {
        const response = await axios.get(url, config);
        console.log('Products response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error.response ? error.response.data : error.message);
        throw new Error('Product fetching failed');
    }
};

module.exports = { getAuthToken, fetchProducts };
