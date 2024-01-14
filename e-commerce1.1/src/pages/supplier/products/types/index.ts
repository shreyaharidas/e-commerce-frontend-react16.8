export interface Product {
    _id: string;
    supplier_reg_id: string;
    product_name: string;
    product_category: string;
    product_price: string;
    product_stock: number;
    product_photo: string;
    colour: string;
    [key: string]: any;
  }

  export interface ProductData {
    product_name: string|null;
    product_category: string|null;
    product_price: string|null;
    product_stock: string|null;
    product_photo: File| null; // This should be a base64-encoded string
    [key: string]: any;
  };

  export interface ProductCardProps {
    product: Product;
    routeToProduct:(_id:string)=>void
  }

  export interface AddProductsProps {
    submit: (e:React.FormEvent,newFields: DynamicField[] | never[]) => Promise<void>;
    handleAddField: () => void;
    handleFieldChange: (index: number, fieldName: string, fieldValue: string) => void;
    additionalFields: never[] | DynamicField[];
  }

  export interface DynamicField {
    name: string;
    value: string;
  }

  export interface ApiProductResponse {
    product: Product
  }

  export interface UniqueProductProps {
    product: Product | null;
  }