import React, { MouseEvent } from 'react'
import RegistrationPage from './RegistrationPage';
import { FormInput, RegisterFunction } from './types';
import { postSupplierRegistration } from './api/postSupplier';
import { postCustomerRegistration } from './api/postCustomer';
import { APIResponseHandler } from '../../../components/APIHandler/APIresponseHandler';
import { readFileAsBuffer } from '../../../utils/readFileAsBuffer';


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



const RegistrationHandler = () => {

  return (
   <RegistrationPage register={register}/>
  )
}

export default RegistrationHandler;
