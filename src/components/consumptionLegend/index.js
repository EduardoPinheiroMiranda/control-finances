import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { formatCurrency } from "../../utils/formatCurrency";

// componets
import { DisplayMoreDetails } from "../displayMoreDetails";
import { colorPattern } from "../../themes";


export function ConsumptionLegend(props){


    return(
        <View style={styles.container}>
            <View>
                <View style={styles.sectionLegends}>
                    <Text style={[defaultPageStyle.text, styles.legend]}>Limite:</Text>
                    <Text style={[defaultPageStyle.text, styles.legend]}>{formatCurrency(4500)}</Text>
                </View>

                <View style={styles.sectionLegends}>
                    <Text style={[defaultPageStyle.text, styles.legend]}>Utilizado:</Text>
                    <Text style={[defaultPageStyle.text, styles.legend]}>{formatCurrency(3600)}</Text>
                </View>

                <View style={styles.sectionLegends}>
                    <Text style={[defaultPageStyle.text, styles.legend]}>Disponível:</Text>
                    <Text style={[defaultPageStyle.text, styles.legend]}>{formatCurrency(3600)}</Text>
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