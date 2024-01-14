// ProductCard.jsx
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { ProductCardProps } from "./types";
import styles from './ProductCard.module.css'; // Import the CSS file
import { base64StringManipulation } from '../../../utils/base64StringManipulation';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, routeToProduct }: ProductCardProps) => {

  return (
    <Card className={`${styles["product-card"]}`} onClick={()=>routeToProduct(product._id)}>
      <Card.Img variant="top" className={`${styles["card-img"]}`} alt={"product image"} src={product.product_photo} />

      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Text>
          {Object.entries(product).map(([key, value]) => (
            (["product_name", "product_category", "product_price", "product_stock"].includes(key)) && <p key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}: {value}
            </p>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
