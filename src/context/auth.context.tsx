import React, { createContext, useState, ReactNode } from "react";

export const AuthContext = createContext({});

type UserProps = {
  name: string | null;
  password: string | null;
};

type AuthProviderProps = {
  children: ReactNode; 
};

export default function AuthProvider({ children }:AuthProviderProps){

  const [user, setUser] = useState<UserProps>({
    name: "Júlio Henrique",
    password: "123"
  });

  return(
    <AuthContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

