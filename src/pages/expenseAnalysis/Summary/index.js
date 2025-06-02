import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { colorPattern } from "../../../themes";

//icon
const styleIcons = {size: 30, color: colorPattern.black_900};
import { Card } from "../../../assets/svg/card";
import { Invoice } from "../../../assets/svg/invoice";
import { Money } from "../../../assets/svg/money";
import { formatCurrency } from "../../../utils/formatCurrency";
import { CustomText } from "../../../components/CustomText";


export function Summary({data}){


    return(
        <View style={[defaultPageStyle.box, styles.container]}>
            <View style={styles.description}>
                <View style={styles.icon}>
                    <Card data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <CustomText style={styles.text}>Cartões:</CustomText>
                    <CustomText style={styles.text}>{formatCurrency(data.card)}</CustomText>
                </View>
            </View>

            <View style={styles.description}>
                <View style={styles.icon}>
                    <Invoice data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <CustomText style={styles.text}>Boletos:</CustomText>
                    <CustomText style={styles.text}>{formatCurrency(data.invoice)}</CustomText>
                </View>
            </View>

            <View style={styles.description}>
                <View style={styles.icon}>
                    <Money data={styleIcons}/>
                </View>
                
                <View style={styles.label}>
                    <CustomText style={styles.text}>Dinheiro:</CustomText>
                    <CustomText style={styles.text}>{formatCurrency(data.money)}</CustomText>
                </View>
            </View>
        </View>
    );
}