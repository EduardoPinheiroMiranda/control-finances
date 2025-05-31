import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { colorPattern } from "../../../themes";

//icon
const styleIcons = {size: 30, color: colorPattern.black_900};
import { Card } from "../../../assets/svg/card";
import { Invoice } from "../../../assets/svg/invoice";
import { Money } from "../../../assets/svg/money";
import { formatCurrency } from "../../../utils/formatCurrency";


export function Summary({data}){


    return(
        <View style={[defaultPageStyle.box, styles.container]}>
            <View style={styles.description}>
                <View style={styles.icon}>
                    <Card data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <Text style={styles.text}>Cartões:</Text>
                    <Text style={styles.text}>{formatCurrency(data.card)}</Text>
                </View>
            </View>

            <View style={styles.description}>
                <View style={styles.icon}>
                    <Invoice data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <Text style={styles.text}>Boletos:</Text>
                    <Text style={styles.text}>{formatCurrency(data.invoice)}</Text>
                </View>
            </View>

            <View style={styles.description}>
                <View style={styles.icon}>
                    <Money data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <Text style={styles.text}>Dinheiro:</Text>
                    <Text style={styles.text}>{formatCurrency(data.money)}</Text>
                </View>
            </View>
        </View>
    );
}