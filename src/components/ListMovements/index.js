import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles, stylesSmall, stylesBig } from "./styles";
import { colorPattern } from "../../../src/themes";
import { formatCurrency } from "../../../src/utils/formatCurrency";
import { format } from "date-fns";

//icons
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
import { Card } from "../../assets/svg/card";
import { Invoice } from "../../assets/svg/invoice";
import { Money } from "../../assets/svg/money";


export function ListMovements({data}){


    const stylesIcons = {size: 25, color: colorPattern.black_900};
    const listIcons = [
        {type: "card", icon: <Card data={stylesIcons}/>},
        {type: "invoice", icon: <Invoice data={stylesIcons}/>},
        {type: "money", icon: <Money data={stylesIcons}/>},
    ];

    const icon = listIcons.find((icon) => icon.type === data.payment_method)


    return(
        <View style={ styles.container}>
            
            <View style={styles.sectionIcon}>
                <BackgroundIcon data={{width: 42, height: 70}}/>
                {icon.icon}
            </View>


            <View style={styles.movement}>

                <View style={styles.description}>
                    <Text style={styles.name} numberOfLines={1}>{data.name}</Text>
                    <Text style={styles.dueDate}>
                        {format(new Date(data.created_at), "dd/MM/yyyy")}
                    </Text>
                </View>

                <View style={styles.values}>
                    <Text style={styles.name}>{formatCurrency(data.value)}</Text>
                    <Text style={styles.dueDate}>1x</Text>
                </View>

            </View>
        </View>
    );
}
