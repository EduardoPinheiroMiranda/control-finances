import React from "react";
import { View, Text, FlatList } from "react-native";
import { defaultPageStyle, stylesDefault } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { ListMovements } from "../../../components/listMovements";
import { DisplayMoreDetails } from "../../../components/displayMoreDetails";
import { useNavigation } from "@react-navigation/native";




export function RecentActivity({data}){

    const navigation = useNavigation();


    return(
        <View style={[defaultPageStyle.box, styles.container]}>

            <Text style={[defaultPageStyle.text, styles.title]}>
                Atividades recentes
            </Text>

            <View>
                {
                    data.map((moviments) => {
                        return(<ListMovements data={moviments} key={moviments.id}/>);
                    })
                }
            </View>
            
            <DisplayMoreDetails 
                title="Ver mais detalhes"
                nextPage={() => navigation.navigate("movements")}
            />
        </View>
    );
}