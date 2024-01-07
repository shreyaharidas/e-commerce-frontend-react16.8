// LoginHandler.tsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './api/postLogin';
import LoginPage from './LoginPage';
import { LoginFunction } from './types';

const LoginHandler = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const clientRef= useRef<HTMLSelectElement>(null);


  const handleLogin:LoginFunction = async () => {
  
    try {
      // Retrieve values from refs
      const e_mail = emailRef.current?.value || '';
      const password = passwordRef.current?.value || '';
      const client_type=clientRef.current?.value||'';
      // Call your API function to submit login details
      const response = await loginUser({ e_mail, password, client_type });

      // Handle successful login here
      console.log('Login successful', response);

      // Redirect to a dashboard or home page
      navigate(`/${client_type}-home`);
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
      // You can show an error message to the user
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
