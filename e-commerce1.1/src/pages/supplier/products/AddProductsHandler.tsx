// AddProductsHandler.tsx
import React, { useState, useRef, useEffect } from "react";
import AddProductsPage from "./AddProductsPage";
import { useNavigate } from "react-router-dom";
import { DynamicField, ProductData } from "./types";
import { addProducts } from "./api/postAddProducts";
import { readFileAsBuffer } from "../../../utils/readFileAsBuffer";
import Swal from "sweetalert2";

const AddProductsHandler = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState<ProductData>({
    product_name: null,
    product_category: null,
    product_price: null,
    product_stock: null,
    product_photo: null,
    // Add other fields as needed
  });

  const [additionalFields, setAdditionalFields] = useState<
    DynamicField[] | never[]
  >([]); // State for dynamic fields

  const handleAddField = () => {
    setAdditionalFields([...additionalFields, { name: "", value: "" }]);
  };

  const handleFieldChange = (
    index: number,
    fieldName: string,
    fieldValue: string
  ) => {
    const updatedFields = [...additionalFields];
    updatedFields[index] = { ...updatedFields[index], [fieldName]: fieldValue };
    setAdditionalFields(updatedFields);
  };

  const submit = async (e:React.FormEvent,newFields: DynamicField[] | never[]) => {
    e.preventDefault();
    let formData = new FormData(e.target as HTMLFormElement);
    let extraFields = {};
    newFields.forEach((field) => ({
      ...extraFields,
      [field.name]: field["value"],
    }));

    setProductData((prev) => ({
      ...prev,
      product_photo: formData?.get("product_photo") as File,
      product_name: formData?.get("product_name") as string,
      product_category: formData?.get("product_category") as string,
      product_price: formData?.get("product_price") as string,
      product_stock: formData?.get("product_stock") as string,
      ...extraFields,
    }));
  };

  useEffect(() => {
    if (
      productData.product_photo &&
      productData.product_category &&
      productData.product_name &&
      productData.product_price &&
      productData.product_stock
    ){
        addProducts(productData);
        // Redirect or perform other actions after successful product addition
    }
  }, [productData]);

  return (
    <AddProductsPage
      handleFieldChange={handleFieldChange}
      handleAddField={handleAddField}
      additionalFields={additionalFields}
      submit={submit}
    />
  );
};

export default AddProductsHandler;
