import { baseUrl } from "../../../../config/configUrl"
import { FormInput } from "../types"
import axiosInstance from "../../../../config/configAxios"
import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler"
import { APIResponseType } from "../../../../components/APIHandler/types"
import { AxiosError } from "axios"

export const postSupplierRegistration=async (formInput:FormInput):Promise<void>=>{
   return await axiosInstance.post(`${baseUrl.supplier}/supplierRegistration`,{...formInput})
   .then(res=>APIResponseHandler(res as APIResponseType,"Registration Successful"))
   .catch(err=>APIResponseHandler(err as AxiosError))
}
