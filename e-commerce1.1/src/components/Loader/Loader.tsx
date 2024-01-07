import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from "./Loader.module.css"

const Loader: React.FC = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles["loader-container"]}`}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
