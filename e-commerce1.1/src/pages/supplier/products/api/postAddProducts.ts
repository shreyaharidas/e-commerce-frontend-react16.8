import { AxiosError } from "axios";
import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";
import { ProductData } from "../types";
import { APIResponseType } from "../../../../components/APIHandler/types";


export const addProducts=async(productData:ProductData):Promise<void>=>{

await axiosInstance.post(`${baseUrl.supplier}/addProducts`,{...productData})
.then(res=>APIResponseHandler(res as APIResponseType, "Addition Successful!"))
.catch(err=>APIResponseHandler(err as AxiosError))
}