import React from "react";
import { View, Text, FlatList } from "react-native";
import { stylesDefault } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { ListMovements } from "../../../components/listMovements";
import { DisplayMoreDetails } from "../../../components/displayMoreDetails";
import { useNavigation } from "@react-navigation/native";




export function RecentActivity({data}){

    const navigation = useNavigation();


    return(
        <View style={[stylesDefault.box, styles.container]}>
            <View>
                {
                    data.map((moviments) => {
                        return(
                        <ListMovements data={moviments} key={moviments.id}/>
                        );
                    })
                }
            </View>
            
            <DisplayMoreDetails 
                data={{title: "Ver mais detalhes"}} 
                nextPage={ () => navigation.navigate("Movimentações")}
            />
        </View>
    );
}