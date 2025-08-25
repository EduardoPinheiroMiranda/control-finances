import React from "react";
import { View, FlatList } from "react-native";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

// components
import { Card } from "../../../components/Card";
import { DisplayMoreDetails } from "../../../components/DisplayMoreDetails";
import { CustomText } from "../../../components/CustomText";


export function DisplayCards({cards, showValue}){

    const navigation = useNavigation();


    return(
        <View style={[defaultPageStyle.box, styles.container]}>

            <CustomText style={[defaultPageStyle.text, styles.title]}>
                Cartões
            </CustomText>

            <FlatList
                style={styles.flatList}
                data={cards}
                renderItem={({item}) => <Card data={item} showValue={showValue}/>}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                ListHeaderComponent={<View style={{width: 30}}/>}
                ListFooterComponent={<View style={{width: 30}}/>}
            />
           

            <DisplayMoreDetails
                title="Ver mais detalhes"
                nextPage={() => navigation.navigate("cardsManagement")}
            />            
        </View>
    );
}
