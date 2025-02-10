import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { stylesDefault } from "../../../themes/stylesDefault";
import { colors } from "../../../themes";

//icon
const styleIcons = {size: 30, color: colors.color_6};
import { Card } from "../../../assets/svg/card";
import { Invoice } from "../../../assets/svg/invoice";
import { Money } from "../../../assets/svg/money";



export function Summary(props){


    return(
        <View style={[stylesDefault.box, styles.container]}>
            <View style={styles.description}>
                <View style={styles.icon}>
                    <Card data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <Text style={styles.text}>Cartões:</Text>
                    <Text style={styles.text}>R$ {props.data.cards}</Text>
                </View>
            </View>

            <View style={styles.description}>
                <View style={styles.icon}>
                    <Invoice data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <Text style={styles.text}>Despesas fixas:</Text>
                    <Text style={styles.text}>R$ {props.data.fixedExpenses}</Text>
                </View>
            </View>

            <View style={styles.description}>
                <View style={styles.icon}>
                    <Money data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <Text style={styles.text}>Gastos extras:</Text>
                    <Text style={styles.text}>R$ {props.data.extraExpenses}</Text>
                </View>
            </View>
        </View>
    );
}