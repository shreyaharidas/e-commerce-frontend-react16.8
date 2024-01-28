import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler"
import axiosInstance from "../../../../config/configAxios"
import { baseUrl } from "../../../../config/configUrl"

export const getProducts=async()=>{
    return await axiosInstance.get(`${baseUrl.customer}/getProducts`).then((data)=>data.data).catch(err=> APIResponseHandler(err, "Could not get products!"))
}