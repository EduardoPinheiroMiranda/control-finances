import React from "react";
import { View } from "react-native";

// components
import { CustomText } from "../../components/CustomText";


export function MoreOptions(){


    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <CustomText>Mais</CustomText>
        </View>
    );
}