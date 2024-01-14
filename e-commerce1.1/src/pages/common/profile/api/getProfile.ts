// api/postLogin.ts
import { AxiosError } from "axios";
import { APIResponseType } from "../../../../components/APIHandler/types";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";
import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler";
import Profile from "../ProfilePage";
import { ProfileProps } from "../types";


const base= localStorage.getItem('role')==="supplier" ? baseUrl.supplier :baseUrl.customer
const endpoint=localStorage.getItem('role')==="supplier" ? "supplierProfile":"customerProfile"

export const getProfile = async (): Promise<void | ProfileProps["profileData"]> => {
  return await axiosInstance.get(
    `${base}/${endpoint}`)
    .then((res) => res.data as ProfileProps["profileData"])
    .catch((err) => APIResponseHandler(err as AxiosError));
};
