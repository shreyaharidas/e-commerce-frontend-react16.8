import { AxiosError, AxiosResponse } from "axios";
import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler";
import axiosInstance from "../../../../config/configAxios";
import { ApiProductResponse, Product } from "../types";
import { baseUrl } from "../../../../config/configUrl";

export const getUniqueProduct = async (
  _id: string
): Promise<ApiProductResponse["product"] | void> => {
  return await axiosInstance
    .get(`${baseUrl.supplier}/getUniqueProduct/:${_id}`)
    .then((res: AxiosResponse) => {
      console.log(res.data);
      return res.data.product;
    })
    .catch((err) => APIResponseHandler(err as AxiosError, "Product Not Found"));
};
