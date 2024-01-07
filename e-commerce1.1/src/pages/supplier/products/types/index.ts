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
    product_name: string;
    product_category: string;
    product_price: string;
    product_stock: number;
    product_photo: string; // This should be a base64-encoded string
    [key: string]: any;
  };

  export interface ProductCardProps {
    product: Product;
  }

  export interface AddProductsProps {
    
    nameRef:React.RefObject<HTMLInputElement>;
    categoryRef:React.RefObject<HTMLInputElement>;
    priceRef:React.RefObject<HTMLInputElement>;
    stockRef:React.RefObject<HTMLInputElement>;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAddProduct: (newFields: DynamicField[] | never[]) => Promise<void>;
    handleAddField: () => void;
    handleFieldChange: (index: number, fieldName: string, fieldValue: string) => void;
    submit:()=>void;
    additionalFields: never[] | DynamicField[];
  }

  export interface DynamicField {
    name: string;
    value: string;
  }