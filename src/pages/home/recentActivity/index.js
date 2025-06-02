import React from "react";
import { View } from "react-native";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

// components
import { ListMovements } from "../../../components/ListMovements";
import { DisplayMoreDetails } from "../../../components/DisplayMoreDetails";
import { CustomText } from "../../../components/CustomText";


export function RecentActivity({data}){

    const navigation = useNavigation();

    const displayMovements = [];
    const amountOfMovements = data.length > 10 ? 10 : data.length;

    for(let i=0; i<amountOfMovements; i++){
        displayMovements.push(
            <ListMovements 
                data={{
                    ...data[i], 
                    installment: `${data[i].total_installments}x`,
                    purchase_date: data[i].created_at
                }} 
                key={data[i].id}
            />
        )
    }

    return(
        <View style={[defaultPageStyle.box, styles.container]}>

            <CustomText style={[defaultPageStyle.text, styles.title]}>
                Atividades recentes
            </CustomText>

            <View>
                {displayMovements}
            </View>
            
            <DisplayMoreDetails 
                title="Ver mais detalhes"
                nextPage={() => navigation.navigate("movements")}
            />
        </View>
    );
}