import { Product } from "../../products/types";
 
  export interface GetProductsResponse {
    products: Product[];
  }

  export interface SupplierHomeProps {
    products: Product[];
    onAddMoreProducts: () => void;
  }