// app/page.tsx
"use client";  // Ensure this is marked as a client component

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grid, Container, MenuItem, FormControl, Select, InputLabel, Typography } from '@mui/material';
import Layout from './layout';
import ProductCard from './components/ProductCard';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('AMZ');
  const [selectedCategory, setSelectedCategory] = useState('Tablet');
  const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
  const categories = ['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', 'Charger', 'Mouse', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${selectedCompany}/categories/${selectedCategory}/products`, {
          params: { n: 10, minPrice: 100, maxPrice: 500 }
        });  
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCompany, selectedCategory]);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Top Products from All Companies and Categories
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="company-select-label">Company</InputLabel>
          <Select
            labelId="company-select-label"
            value={selectedCompany}
            label="Company"
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {companies.map((company) => (
              <MenuItem key={company} value={company}>
                {company}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategory}
            label="Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <Grid container spacing={4}>
          {products.map((product) => (
            // <Grid item key={product.id} xs={12} sm={6} md={4}>
            //   <ProductCard product={product} />
            // </Grid>
          ))}
        </Grid> */}
      </Container>
    </Layout>
  );
};

export default HomePage;
