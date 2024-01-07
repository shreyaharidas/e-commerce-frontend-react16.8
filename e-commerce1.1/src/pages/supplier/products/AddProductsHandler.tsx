// AddProductsHandler.tsx
import React, { useState, useRef } from 'react';
import AddProductsPage from './AddProductsPage';
import axiosInstance from '../../../config/configAxios';
import { useNavigate } from 'react-router-dom';
import { convertFileToBase64 } from '../../../utils/convertFileToBase64';
import { DynamicField, ProductData} from './types';
import { addProducts } from './api/postAddProducts';
import { readFileAsBuffer } from '../../../utils/readFileAsBuffer';

const AddProductsHandler = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);
  const [productData, setProductData] = useState<ProductData>({
    product_name: '',
    product_category: '',
    product_price: "0",
    product_stock: 0,
    product_photo: '', // This should be a base64-encoded string
    // Add other fields as needed
  });

  const [additionalFields, setAdditionalFields] = useState<DynamicField[]|never[]>([]); // State for dynamic fields

  const handleAddField = () => {
    setAdditionalFields([...additionalFields, { name: '', value: '' }]);
  };

  const handleFieldChange = (index: number, fieldName: string, fieldValue: string) => {
    const updatedFields = [...additionalFields];
    updatedFields[index] = { ...updatedFields[index], [fieldName]: fieldValue };
    setAdditionalFields(updatedFields);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files && e.target.files[0];

      if (file) {
        const base64Image = await readFileAsBuffer(file);
        setProductData((prevData) => ({ ...prevData, product_photo: base64Image }));
      }
    } catch (error) {
      console.error('Error handling file change:', error);
      // Handle error, show message, etc.
    }
  };

 

  const handleAddProduct = async ( newFields:DynamicField[]|never[] ) => {
let extraFields={};
 newFields.forEach((field)=>({...extraFields,[field.name]:field["value"]}))

    setProductData((prev) => ({ ...prev, 
      product_name: nameRef?.current?.value as string, 
      product_category: categoryRef?.current?.value as string,
      product_price:priceRef?.current?.value as string,
      product_stock:stockRef?.current?.value as unknown as number,
     ...extraFields }))

  };

  const submit=async()=>{
    try {
      await addProducts(productData);

   // Redirect or perform other actions after successful product addition
   navigate('/supplier-home'); // Replace with the appropriate route
 } catch (error) {
   console.error('Error adding product:', error);
   // Handle error, show message, etc.
 }
  }

  return (
    <AddProductsPage
      nameRef={nameRef}
      categoryRef={categoryRef}
      priceRef={priceRef}
      stockRef={stockRef}
      onFileChange={handleFileChange}
      onAddProduct={handleAddProduct}
      handleFieldChange={handleFieldChange}
      handleAddField={handleAddField}
      additionalFields={additionalFields}
      submit={submit}
    />
  );
};

export default AddProductsHandler;
