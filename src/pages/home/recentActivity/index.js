import React from "react";
import { View, Text, FlatList } from "react-native";
import { stylesDefault } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { ListMovements } from "../../../components/listMovements";


export function RecentActivity({data}){



    return(
        <View style={[stylesDefault.box, styles.container]}>
            {
                data.map((d) => {
                    return(
                       <ListMovements data={data}/>
                    );
                })
            }
        </View>
    );
}