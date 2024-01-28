// Productshandler.tsx

import React from 'react';
import ProductCard from '../../supplier/products/ProductCard';
import { useNavigate } from 'react-router-dom';
import { CustomerHomeProps } from './types';
import styles from "./CustomerHome.module.css"


const CustomerHome = ({ data ,routeToProduct}:CustomerHomeProps) => {

  


  return (
    <div>
      {data.products.map(category => (
        <div key={category._id}>
          <h2>{category._id}</h2>
          <div className={`${styles.product_div}`}>
          {category.products.map(product => (
           <ProductCard product={product} routeToProduct={routeToProduct}/>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerHome;
