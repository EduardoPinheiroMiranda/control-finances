import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../themes";



export function ConsumptionLegend(){


    return(
        <View style={styles.container}>
            <View style={styles.legend}>
                <Text style={styles.text}>Limite:</Text>
                <Text style={styles.text}>R$ 4500,00</Text>
            </View>

            <View style={styles.legend}>
                <Text style={styles.text}>Utilizado:</Text>
                <Text style={styles.text}>R$ 4500,00</Text>
            </View>

            <View style={styles.legend}>
                <Text style={styles.text}>Disponível:</Text>
                <Text style={styles.text}>R$ 4500,00</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    legend: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    text: {
        color: colors.color_6,
        fontSize: 16,
        fontWeight: 400
    }
});