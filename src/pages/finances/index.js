import React from "react";
import { View, Text, SafeAreaView, FlatList, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { colors } from "../../themes";


// icon
const styleIcon = {size: 30, color: colors.color_6 };
import { RightArrow } from "../../assets/svg/rightArrow";
import { PieChart } from "../../assets/svg/pieChart";
import { Invoice2 } from "../../assets/svg/invoice2";
import { Grafic } from "../../assets/svg/grafic";
import { Bag } from "../../assets/svg/bag";
import { TagValue } from "../../assets/svg/tagValue";
import { SettingsLimit } from "../../assets/svg/settingsLimit";
import { CardEdit } from "../../assets/svg/cardEdit";


function MenuOption({data}){


    return(
        <Pressable style={styles.buttonArea} onPress={data.nextPage}>
            <View style={styles.description}>
                {data.icon}
                <Text style={styles.label}>{data.label}</Text>
            </View>
            <RightArrow data={styleIcon}/>
        </Pressable>
    );
}


export function Finances(){

    const navigator = useNavigation();


    const listOptions = [
        {
            id: "1",
            icon: <PieChart data={styleIcon}/>,
            label: "Análise de gastos",
            nextPage: () => navigator.navigate("expenseAnalysis")
        },
        {
            id: "2",
            icon: <Invoice2 data={styleIcon}/>,
            label: "Pagar fatura",
            nextPage: () => navigator.navigate("expenseAnalysis")
        },
        {
            id: "3",
            icon: <Grafic data={styleIcon}/>,
            label: "Resumo de faturas",
            nextPage: () => navigator.navigate("expenseAnalysis")
        },
        {
            id: "4",
            icon: <Bag data={styleIcon}/>,
            label: "Adicionar compra",
            nextPage: () => navigator.navigate("expenseAnalysis")
        },
        {
            id: "5",
            icon: <TagValue data={styleIcon}/>,
            label: "Gerenciar despesas",
            nextPage: () => navigator.navigate("expenseAnalysis")
        },
        {
            id: "6",
            icon: <SettingsLimit data={styleIcon}/>,
            label: "Controlar limite",
            nextPage: () => navigator.navigate("expenseAnalysis")
        },
        {
            id: "7",
            icon: <CardEdit data={styleIcon}/>,
            label: "Gerenciar cartões",
            nextPage: () => navigator.navigate("expenseAnalysis")
        },
    ]

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.scrollSection}>
                <FlatList
                    data={listOptions}
                    renderItem={({item}) => <MenuOption data={item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </SafeAreaView>
    );
}