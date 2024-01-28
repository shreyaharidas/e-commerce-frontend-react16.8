import { Product } from "../../products/types";
 
  export interface GetProductsResponse {
    count: number;
    products: Product[];
  }

  export interface SupplierHomeProps {
    products: Product[];
    onAddMoreProducts: () => void;
  }