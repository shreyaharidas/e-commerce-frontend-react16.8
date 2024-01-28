export interface LoginFormInput {
    e_mail: string;
    password: string;
    client_type:string;
}

export interface AuthorizationContext {
    login: (credentials: LoginFormInput) => Promise<void>;
    logout: () => void;
  }

    
export type LoginResponse={
    client_type: string;
    token:string;
    registration_id:string;
}