// api/postLogin.ts
import { AxiosError } from "axios";
import { APIResponseType } from "../../../../components/APIHandler/types";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";
import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler";
import { LoginFormInput, LoginResponse } from "../types";

export const loginUser = async (loginFormInput: LoginFormInput): Promise<void | LoginResponse> => {
  return await axiosInstance.post(
    `${baseUrl.base}/login`,
    { ...loginFormInput } 
  )
    .then((res) => {
      APIResponseHandler(res as APIResponseType, "Login Successful");
      return res.data as LoginResponse;
    })
    .catch((err) => APIResponseHandler(err as AxiosError));
};
