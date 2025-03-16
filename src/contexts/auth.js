import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from "@env";


export const AuthContext = createContext({});


export function AuthProvider({children}){

    const [loading, setLoading] = useState(false);
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState({});


    useEffect(() => {

        async function automaticLogin(){

            setLoading(true);

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

            setLoading(false);
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
            

            await AsyncStorage.setItem("userToken", response.token);


            setSigned(true);
            setLoading(false);
            return {
                statusCode: request.status,
                msg: response.msg
            };

        }catch(err){
            console.log(err);
            setLoading(false);

            return {
                statusCode: 500,
                msg: "Desculpe-nos, tivemos um erro inesperado. Tente novamente mais tarde."
            };
        }
    }


    return(
        <AuthContext.Provider value={{signUp, signIn, loading, signed}}>
            {children}
        </AuthContext.Provider>
    );
}