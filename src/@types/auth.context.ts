import { ReactNode } from "react";


export interface ContextProviderProps {
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

export interface User {
  id: string;
  name: string;
  email: string;
  limit: number;
  dueDay: number;
  closeDay: number;
  avatar: string | null;
}

export interface AuthContextType {
  loggedInUser: boolean;
  loadingPage: boolean;
  user: User | null;
  singIn: (body: LoginData) => Promise<string | void>;
  singUp: (body: SingUpData) => Promise<{success: boolean, data: any, msg: string}>;
  singOut: () => void;
  getData: () => void;
}

