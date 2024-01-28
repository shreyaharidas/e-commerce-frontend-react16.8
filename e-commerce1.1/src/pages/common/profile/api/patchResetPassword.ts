import { APIResponseHandler } from "../../../../components/APIHandler/APIresponseHandler";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";

export const patchResetPassword = async (
  e_mail: string,
  newPassword: string
): Promise<void | { message: string }> => {
  return await axiosInstance
    .patch(
      `${
        localStorage.getItem("client_type") === "supplier"
          ? `${baseUrl.supplier}/resetPassword`
          : `${baseUrl.customer}/resetPassword`
      }`,
      { e_mail, newPassword }
    )
    .then((data) => {APIResponseHandler(data.data.message); return data.data})
    .catch((err) => APIResponseHandler(err, "Password could not be reset!"));
};
