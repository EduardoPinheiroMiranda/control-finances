import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { formatCurrency } from "../../utils/formatCurrency";

// componets
import { DisplayMoreDetails } from "../DisplayMoreDetails";
import { CustomText } from "../CustomText";


export function ConsumptionLegend({data, style, showValue, fontColor, displayMoreDatails}){

    let styleLegend = fontColor ? {...styles.legend, color: fontColor} : styles.legend;


    const values = [
        {label: "Limite", value: Number(data.limit)},
        {label: "Utilizado", value: Number(data.amount)},
        {label: "Disponivel", value: Number(data.available)},
    ]


    return(
        <View style={[styles.container, style]}>
            <View style={styles.description}>
                {
                    values.map((item, index) => (
                        <View key={index} style={styles.sectionLegends}>
                            <CustomText style={[defaultPageStyle.text, styleLegend]}>{item.label}:</CustomText>
                            {
                                showValue ?
                                    <CustomText style={[defaultPageStyle.text, styleLegend]}>{formatCurrency(item.value)}</CustomText>
                                :
                                    <CustomText style={[defaultPageStyle.text, styleLegend]}>****</CustomText>
                            }
                        </View>
                    ))
                }
            </View>


            {displayMoreDatails && (
                <DisplayMoreDetails title={displayMoreDatails.title} nextPage={displayMoreDatails.nextPage}/>
            )}
            
        </View>
    );
}