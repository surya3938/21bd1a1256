// app/components/ProductCard.tsx
"use client";

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    company: string;
    price: number;
    discount: number;
    rating: number;
    availability: string;
    image?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={product.image || '/default-product.jpg'}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.company} - Price: ${product.price} - Discount: {product.discount}%
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Rating: {product.rating} - Available: {product.availability}
      </Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
