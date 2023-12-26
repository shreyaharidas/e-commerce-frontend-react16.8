import { MouseEvent } from "react";

export type RegisterFunction = (e:React.FormEvent) => void;

// Props interface for the RegistrationPage component
export interface RegistrationPageProps {
  register: RegisterFunction;
}

export interface FormInput {
    full_name: string;
    e_mail: string;
    password: string;
    client_type: 'supplier'|'customer',
    profile_pic:string;
}