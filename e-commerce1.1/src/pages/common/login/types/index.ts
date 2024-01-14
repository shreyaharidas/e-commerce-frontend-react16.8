export interface LoginFormInput {
    e_mail: string;
    password: string;
    client_type:string;
}

export interface LoginPageProps {
    emailRef: React.MutableRefObject<HTMLInputElement | null>;
    passwordRef: React.MutableRefObject<HTMLInputElement | null>;
    clientRef:React.MutableRefObject<HTMLSelectElement | null>;
    onLogin: () => void;
  }
  
export type LoginResponse={
    client_type: string;
    token:string;
    registration_id:string;
}

export type LoginFunction = () => void;