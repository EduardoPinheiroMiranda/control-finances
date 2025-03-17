import React, { useContext } from "react";
import { AuthRoutes } from "../routes/auth.routes";
import { AuthContext } from "../contexts/auth";
import { AppRoutes } from "./app.routes";
import { ActivityIndicator, View } from "react-native";
import { colorPattern } from "../themes";


export function Routes(){

    const { signed, loading } = useContext(AuthContext);


    if(loading){
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ActivityIndicator size={64} color={colorPattern.blue_900}/>
            </View>
        );
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}