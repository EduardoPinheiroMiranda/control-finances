import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";


export const AuthContext = createContext({});


export function AuthProvider({children}){

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);


    async function signUp(data){

        setLoading(true);

        try{

            const request = await fetch(
                `${API_URL}/user/userRegister`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            )

            const response = await request.json();
            setLoading(false);

            return {
                statusCode: request.status,
                msg: request.status !== 500 ? response.msg : "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            }

        }catch(err){
            setLoading(false);
            return {
                statusCode: 500,
                msg: "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            }
        }
    }


    return(
        <AuthContext.Provider value={{signUp, loading}}>
            {children}
        </AuthContext.Provider>
    );
}