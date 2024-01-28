import React, { ReactNode, createContext } from "react";
import { loginUser } from "./api/postLogin";
import { useNavigate } from "react-router-dom";
import { AuthorizationContext, LoginFormInput } from "./types";

export const Authorization = createContext<AuthorizationContext>({
  login: async () => {},
  logout: () => {},
});

const AuthContext = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const login = async ({ e_mail, password, client_type }: LoginFormInput) => {
    const response = await loginUser({ e_mail, password, client_type });
    if (response?.token) {
      // Redirect to a dashboard or home page
      localStorage.setItem("jwt", response?.token);
      localStorage.setItem("registration_id", response?.registration_id);
      localStorage.setItem("role", response?.client_type);
      navigate(`/${response?.client_type}-home`);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Authorization.Provider value={{ login, logout }}>
      {children}
    </Authorization.Provider>
  );
};

export default AuthContext;
