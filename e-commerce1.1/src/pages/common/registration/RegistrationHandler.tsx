import React, { MouseEvent } from 'react'
import RegistrationPage from './RegistrationPage';
import { FormInput, RegisterFunction } from './types';
import { postSupplierRegistration } from './api/postSupplier';
import { postCustomerRegistration } from './api/postCustomer';
import { APIResponseHandler } from '../../../components/APIHandler/APIresponseHandler';


export const register:RegisterFunction=async (e)=>{
  e.preventDefault();

  let formData= new FormData(e.target as HTMLFormElement);
  let jsonFormData = '{';

  await Promise.all(Array.from(formData.entries()).map(async ([key, value]) => {


  if(typeof value==="string"){
  jsonFormData += `"${key}": "${value}",`;
  }
  if(typeof value!=="string") {
    let buffer = await readFileAsBuffer(value as object as File)
    jsonFormData += `"${key}": "${buffer as string}",`;
  };
}));

// Remove the trailing comma if there are key-value pairs
if (jsonFormData.length > 1) {
  jsonFormData = jsonFormData.slice(0, -1);
}

jsonFormData += '}';

let jsonFormInput:FormInput=JSON.parse(jsonFormData);

// const payloadString = JSON.stringify(jsonFormInput);

// // Create a Blob object from the payload string
// const payloadBlob = new Blob([payloadString]);

// // Get the size of the payload in bytes
// const payloadSize = payloadBlob.size;

// console.log(`Payload size: ${payloadSize} bytes`);


if (jsonFormInput.client_type==="supplier")
await postSupplierRegistration(jsonFormInput);
else await postCustomerRegistration(jsonFormInput);
}



const readFileAsBuffer = async (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Event handler for when the file reading is complete
    reader.onload = () => {
      // Check if the result is a Data URL
      if (typeof reader.result === 'string') {
        // Resolve the promise with the Data URL
        resolve(reader.result);
      } else {
        // Reject the promise with an error if the result is not a Data URL
        reject(new Error('Failed to read file as Data URL'));
      }
    };

    // Event handler for file reading errors
    reader.onerror = (error) => {
      // Reject the promise with the encountered error
      reject(error);
    };

    // Read the file as a Data URL
    reader.readAsDataURL(file);
  });
};





const RegistrationHandler = () => {

  return (
   <RegistrationPage register={register}/>
  )
}

export default RegistrationHandler;
