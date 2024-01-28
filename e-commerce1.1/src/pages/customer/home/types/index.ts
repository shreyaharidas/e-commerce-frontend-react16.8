import { Product } from "../../../supplier/products/types";

export interface ProductCategory {
    _id: string;
    products: Product[];
  }
  
 export  interface ProductsData {
    count: number;
    products: ProductCategory[];
  }
  
  export interface CustomerHomeProps {
    data: ProductsData;
    routeToProduct: (_id: string) => void;
  }
  