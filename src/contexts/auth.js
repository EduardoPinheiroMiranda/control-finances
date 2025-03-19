import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from "@env";


export const AuthContext = createContext({});


export function AuthProvider({children}){

    const [loadingPage, setLoadingPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState(null);


    useEffect(() => {

        async function automaticLogin(){

            try{

                setLoadingPage(true);

                const token = await AsyncStorage.getItem("userToken");

                const request = await fetch(
                    `${API_URL}/user/getUserByToken`,
                    {
                        headers: {
                            "authorization": `Bearer ${token}`
                        }
                    }
                );
                const response = await request.json();
                
                if(request.status === 200){
                    setUser(response);
                    setSigned(true);
                }else{
                    await AsyncStorage.removeItem("userToken");
                }

                setLoadingPage(false);

            }catch(err){
                setLoadingPage(false);
            }
        }

        automaticLogin();
    }, []);


    async function signUp(data){

        try{

            setLoading(true);


            const request = await fetch(
                `${API_URL}/user/userRegister`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
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


    async function signIn(data){

        try{

            setLoading(true);


            const request = await fetch(
                `${API_URL}/user/authenticate`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )

            const response = await request.json();

            if(request.status !== 200){
                setLoading(false);

                return {
                    statusCode: request.status,
                    msg: response.msg
                };
            }
        
            setUser(response);
            setSigned(true);
            setLoading(false);
            await AsyncStorage.setItem("userToken", response.token);
        
            
            return {
                statusCode: 200,
                msg: ""
            };

        }catch(err){
            setLoading(false);
            return {
                statusCode: 500,
                msg: "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            };
        }
    }


    return(
        <AuthContext.Provider value={{
            signUp, 
            signIn, 
            loading,
            loadingPage,
            signed, 
            user
        }}>
            {children}
        </AuthContext.Provider>
    );
}