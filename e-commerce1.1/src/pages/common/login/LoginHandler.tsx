// LoginHandler.tsx
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../components/Authentication/api/postLogin";
import LoginPage from "./LoginPage";
import { LoginFunction } from "./types";
import { Authorization } from "../../../components/Authentication/AuthContext";

const LoginHandler = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const clientRef = useRef<HTMLSelectElement>(null);

  const { login } = useContext(Authorization);
  const handleLogin: LoginFunction = async () => {
    try {
      // Retrieve values from refs
      const e_mail = emailRef.current?.value || "";
      const password = passwordRef.current?.value || "";
      const client_type = clientRef.current?.value || "";

      login({ e_mail, password, client_type });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <LoginPage
      emailRef={emailRef}
      passwordRef={passwordRef}
      clientRef={clientRef}
      onLogin={handleLogin}
    />
  );
};

export default LoginHandler;
