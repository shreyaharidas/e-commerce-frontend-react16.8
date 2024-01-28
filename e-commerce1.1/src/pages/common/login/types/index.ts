

export interface LoginPageProps {
    emailRef: React.MutableRefObject<HTMLInputElement | null>;
    passwordRef: React.MutableRefObject<HTMLInputElement | null>;
    clientRef:React.MutableRefObject<HTMLSelectElement | null>;
    onLogin: () => void;
  }


export type LoginFunction = () => void;