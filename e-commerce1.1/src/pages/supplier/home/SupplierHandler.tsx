import React, { useState, useEffect } from "react";
import { getProductsForSupplier } from "./api/getProducts";
import SupplierHome from "./SupplierHome";
import AddProducts from "../products/AddProductsPage";
import Loader from "../../../components/Loader/Loader";
import { Product } from "../products/types";
import { useNavigate } from "react-router";
import io from "socket.io-client";
import { Pagination } from "react-bootstrap";
import CustomPagination from "../../../components/Pagination/Pagination";
import CustomSearchBar from "../../../components/SearchSort/SearchSort";

const SupplierHandler: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [sorting, setSorting] = useState<1 | -1>(1);
  const [search, setSearch] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const[sortBy, setSortBy]=useState<string>("product_name");

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Connect to the WebSocket server
  //   const socket = io('http://localhost:3001', {
  //     transports: ['websocket'], // Specify the transport method
  //   });

  //   socket.on("hello from here",(res)=>{
  //     console.log("received", res)
  //   })

  //   // Handle connection events
  //   socket.on('connect', () => {
  //     console.log('Connected to the WebSocket server');
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from the WebSocket server');
  //   });

  //   // Handle custom events from the server
  //   socket.on('productOutOfStock', (data) => {
  //     console.log('Received data from the server:', data);
  //     socket.emit("out of stock emit received");
  //   });

  //   // Clean up the socket connection when the component unmounts
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []); // Run this effect only once when the component mounts

  const fetchProducts = async () => {
    try {
      const response = await getProductsForSupplier(
        localStorage.getItem("registration_id") ?? "",
        offset,
        sortBy,
        sorting,
        search
      ); //"766486"
      response?.products && setProducts(response?.products);
      response?.count && setCount(response?.count);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleAddMoreProducts = () => {
    navigate("/add-product");
  };

  useEffect(() => {
    fetchProducts();
  }, [offset, sorting, search,sortBy]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {products.length > 0 ? (
            <>
              <CustomSearchBar setSearch={setSearch} setSorting={setSorting} setSortBy={setSortBy}/>
              <SupplierHome
                products={products}
                onAddMoreProducts={handleAddMoreProducts}
              />
              <CustomPagination
                offset={offset}
                count={count}
                setOffset={setOffset}
              />
            </>
          ) : (
            <div className="text-center mt-5">
              <p className="text-primary font-weight-bold">
                No products found. Add products now!
              </p>
              <button
                className="btn btn-primary"
                onClick={handleAddMoreProducts}
              >
                Add Products
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SupplierHandler;
