import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

// components
import { CardSmall } from "../../../components/cardSmall";
import { DisplayMoreDetails } from "../../../components/displayMoreDetails";


export function DisplayCards(props){

    const navigation = useNavigation();


    return(
        <View style={[defaultPageStyle.box, styles.container]}>

            <Text style={[defaultPageStyle.text, styles.title]}>
                Cartões
            </Text>

            <FlatList
                style={styles.flatList}
                data={[1,2,3,4,5]}
                renderItem={({item}) => <CardSmall showValue={props.showValue}/>}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                ListHeaderComponent={<View style={{width: 30}}/>}
                ListFooterComponent={<View style={{width: 30}}/>}
            />
           

            <DisplayMoreDetails
                title="Ver mais detalhes"
                nextPage={() => alert("ainda vai funcionar :-)")}
            />            
        </View>
    );
}
