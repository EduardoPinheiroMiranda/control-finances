import React, { useContext } from "react";
import { AuthRoutes } from "../routes/auth.routes";
import { AuthContext } from "../contexts/auth";
import { AppRoutes } from "./app.routes";


export function Routes(){

    const { signed } = useContext(AuthContext);


    return(
        
        signed ? <AppRoutes/> : <AuthRoutes/>
        
    );
}