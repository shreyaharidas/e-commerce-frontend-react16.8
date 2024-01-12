import { MouseEvent } from "react";

export type RegisterFunction = (e:React.FormEvent) => void;

// Props interface for the RegistrationPage component
export interface RegistrationPageProps {
  register: RegisterFunction;
}

export interface FormInput {
    full_name: string|null;
    e_mail: string|null;
    password: string|null;
    client_type: 'supplier'|'customer'|null,
    profile_pic:File|null;
}