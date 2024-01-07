// SupplierHome.jsx
import React from 'react';
import { SupplierHomeProps } from './types';
import ProductCard from '../products/ProductCard';
import styles from './SupplierHome.module.css'; // Import the CSS file

const SupplierHome = ({ products, onAddMoreProducts }:SupplierHomeProps) => {
  return (
    <div className={styles.supplierHomeContainer}>
      <h2 className={styles.pageTitle}>Welcome to Supplier Home</h2>
      <div className={`${styles["product-card-container"]} justify-content-around`}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='justify-content-center d-flex mt-5'>
      <button className="btn btn-primary" onClick={onAddMoreProducts}>Add More Products</button>
      </div>
    </div>
  );
};

export default SupplierHome;
