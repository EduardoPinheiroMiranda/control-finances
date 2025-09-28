import { ReactNode } from "react";


export interface AuthProviderProps {
  children: ReactNode;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface SingUpData {
  name: string;
  email: string;
  password: string;
}

export interface AuthContextType {
    loggedInUser: boolean;
    loadingPage: boolean;
    user: {
      id: string,
      name: string,
      email: string,
      avatar: string | null,
    };
    singIn: (body: LoginData) => Promise<string | void>
    singUp: (body: SingUpData) => Promise<{
      statusCode: number,
      msg: string
    }>
}

