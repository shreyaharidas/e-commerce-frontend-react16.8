// SupplierHome.jsx
import React from 'react';
import { SupplierHomeProps } from './types';
import ProductCard from '../products/ProductCard';
import styles from './SupplierHome.module.css'; // Import the CSS file
import { useNavigate } from 'react-router';

const SupplierHome = ({ products, onAddMoreProducts }:SupplierHomeProps) => {

const navigate= useNavigate();

const routeToProduct=(_id:string)=>{
navigate(`/products/:${_id}`)
}

  return (
    <div className={styles.supplierHomeContainer}>
      <h2 className={styles.pageTitle}>Your Products</h2>
      <div className={`${styles["product-card-container"]} justify-content-around`}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} routeToProduct={routeToProduct}/>
        ))}
      </div>
      <div className='justify-content-center d-flex mt-5'>
      <button className="btn btn-primary" onClick={onAddMoreProducts}>Add More Products</button>
      </div>
    </div>
  );
};

export default SupplierHome;
