import React from 'react';
import { Product } from './types';
import Loader from '../../../components/Loader/Loader';
import styles from './UniqueProduct.module.css';

interface UniqueProductProps {
  product: Product | null;
}

const UniqueProduct: React.FC<UniqueProductProps> = ({ product }) => {
  return (
    <div className={styles["product-container"]}>
      {product ? (
        <div>
          <h2 className={styles["product-title"]}>{product.product_name.charAt(0).toUpperCase() + product.product_name.slice(1)}</h2>
          <div className={styles["product-details"]}>
            {Object.entries(product).map(([key, value]) => (
              key !== 'product_photo' && key !== '_id' && (
                <div key={key} className={styles["product-detail"]}>
                  <span className={styles["detail-label"]}>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}:
                  </span>
                  <span className={styles["detail-value"]}>{value}</span>
                </div>
              )
            ))}
          </div>
        </div>
      ) : (
        <div className={styles["loader-container"]}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default UniqueProduct;
