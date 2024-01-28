import React, { useEffect, useState } from "react";
import CustomerHome from "./CustomerHome";
import { useNavigate } from "react-router-dom";
import { getProducts } from "./api/getProducts";
import { ProductsData } from "./types";

const CustomerHandler = () => {
  const [data, setData] = useState<ProductsData>({
    count:0,
    products:[]
  });

  const navigate = useNavigate();

  const routeToProduct = (_id: string) => {
    navigate(`/products/:${_id}`);
  };

  const getProductsData = async () => {
    let response = await getProducts();
    setData(response);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return( 
  <CustomerHome data={data} routeToProduct={routeToProduct} />
  );
};

export default CustomerHandler;
