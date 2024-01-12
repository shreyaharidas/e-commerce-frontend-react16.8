import axios, { AxiosError } from "axios"
import { baseUrl } from "../../../../config/configUrl"
import { FormInput } from "../types"
import axiosInstance from "../../../../config/configAxios"
import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler"
import { APIResponseType } from "../../../../components/APIHandler/types"

export const postCustomerRegistration=async (formData:FormInput)=>{
    await axiosInstance.post(
        `${baseUrl.customer}/customerRegistration`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
    .then(res=>APIResponseHandler(res as APIResponseType,"Registration Successful"))
   .catch(err=>APIResponseHandler(err as AxiosError))
}