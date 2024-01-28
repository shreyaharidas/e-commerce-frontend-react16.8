import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";
import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler";
import { GetProductsResponse } from "../types";

export const getProductsForSupplier = async (
  supplierRegId: string,
  offset: number,
  sortBy:string,
  sorting: number,
  search: string
): Promise<GetProductsResponse | void> => {
  return await axiosInstance
    .get(
      `${
        baseUrl.supplier
      }/getProductsSupplier?supplier_reg_id=${supplierRegId}${
        offset ? `&offset=${offset}`:""
      }${sortBy?`&sortBy=${sortBy}`:""}${sorting ? `&sortOrder=${sorting}`:""}${search ?`&search=${search}`:""}`
    )
    .then((response: AxiosResponse<GetProductsResponse>) => response.data)
    .catch((err) => APIResponseHandler(err as AxiosError));
};
