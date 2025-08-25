import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { defaultPageStyle } from  "../../themes/stylesDefault";
import { styles } from  "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import { FinancialSummaryContext } from "../../contexts/financialSummary"

// Components
import { CustomText } from "../../components/CustomText";
import { colorPattern } from "../../themes";
import { useContext } from "react";
import { Card } from "../../components/Card";


export function CardsManagement(){

    const { cards } = useContext(FinancialSummaryContext);


    return(
        <SafeAreaView style={defaultPageStyle.page}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <CustomText style={styles.title}>
                        Meus cartões
                    </CustomText>

                    <Entypo name="plus" size={24} color={colorPattern.gray_900} />
                </View>


                <FlatList
                    data={cards}
                    renderItem={({item}) => <Card 
                        data={item}
                        showValue={true}
                        bigSize={true}
                    />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    style={styles.sectionCards}
                />

            </View>
        </SafeAreaView>
    );
}