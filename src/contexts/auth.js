import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";


export const AuthContext = createContext({});


export function AuthProvider({children}){

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);


    async function signUp(data){

        setLoading(true);

        fetch(
            `${API_URL}/user/userRegister`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        
        setLoading(false);
        navigation.goBack();
    }


    return(
        <AuthContext.Provider value={{signUp}}>
            {children}
        </AuthContext.Provider>
    );
}