import React from "react";
import { View, StyleSheet } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { formatCurrency } from "../../utils/formatCurrency";

// componets
import { DisplayMoreDetails } from "../DisplayMoreDetails";
import { colorPattern } from "../../themes";
import { CustomText } from "../CustomText";


export function ConsumptionLegend(props){


    return(
        <View style={styles.container}>
            <View>
                <View style={styles.sectionLegends}>
                    <CustomText style={[defaultPageStyle.text, styles.legend]}>Limite:</CustomText>
                    {
                        props.showValue ?
                            <CustomText style={[defaultPageStyle.text, styles.legend]}>{formatCurrency(props.data.limit)}</CustomText>
                        :
                            <CustomText style={[defaultPageStyle.text, styles.legend]}>****</CustomText>
                    }
                </View>

                <View style={styles.sectionLegends}>
                    <CustomText style={[defaultPageStyle.text, styles.legend]}>Utilizado:</CustomText>
                    {
                        props.showValue ?
                            <CustomText style={[defaultPageStyle.text, styles.legend]}>{formatCurrency(props.data.amount)}</CustomText>
                        :
                            <CustomText style={[defaultPageStyle.text, styles.legend]}>****</CustomText>
                    }
                </View>

                <View style={styles.sectionLegends}>
                    <CustomText style={[defaultPageStyle.text, styles.legend]}>Disponível:</CustomText>
                    {
                        props.showValue ?
                            <CustomText style={[defaultPageStyle.text, styles.legend]}>{formatCurrency(props.data.available)}</CustomText>
                        :
                            <CustomText style={[defaultPageStyle.text, styles.legend]}>****</CustomText>
                    }
                </View>
            </View>

            {
                props.displayMoreDatails && (
                    <DisplayMoreDetails 
                        title={props.displayMoreDatails} 
                        nextPage={props.nextPage}
                    />
                )
            }
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,

    },
    sectionLegends: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    legend: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.black_900
    }
})