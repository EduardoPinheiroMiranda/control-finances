import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { formatCurrency } from "../../utils/formatCurrency";

// icon
import  ChipSmall from "../../assets/svg/chipSmall.svg"


export function CardSmall({data, showValue}){

    const colorFont = data.color_font;
    const colorBackground = data.color_card;
    const cardName = data.name;
    const expired = `${data.due_day}/${new Date().getMonth() + 1}`;
    const valueUsed = 1000;


    return(
        <View style={styles.container}>

            <View style={[styles.card, {backgroundColor: colorBackground}]}>
                
                <View style={styles.header}>
                    <ChipSmall/>
                    <Text style={[defaultPageStyle.text, {color: colorFont}]}>
                        {cardName}
                    </Text>
                </View>
                
                <View style={styles.footer}>
                    <Text  style={[
                        defaultPageStyle.text, 
                        {
                            color: colorFont,
                            fontSize: 10,
                            fontWeight: "regular"
                        }
                    ]}>
                        Vencimento
                    </Text>
                    <View style={styles.sectionText}>
                        <Text style={[defaultPageStyle.text, styles.text, {color: colorFont}]}>
                            {expired}
                        </Text>

                        {
                            showValue ? 
                            <Text style={[defaultPageStyle.text, styles.text, {color: colorFont}]}>
                                {formatCurrency(valueUsed)}
                            </Text>
                            :
                            <Text style={[defaultPageStyle.text, styles.text, {color: colorFont}]}>
                                ****
                            </Text>
                        }

                    </View>
                </View>
            </View>

        </View>
    );
}