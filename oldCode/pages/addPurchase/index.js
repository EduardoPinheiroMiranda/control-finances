import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { styles } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";


export function AddPurchase(){

    const [price, setPrice] = useState("0");
    

    return(
        <SafeAreaView style={styles.container}>

            <View>
                <View style={styles.sectionFromGetData}>
                    <Text style={styles.label}>Titulo para a compra</Text>
                    <TextInput 
                        style={styles.box}
                        placeholder="EX.: compra no mercado"
                    />
                </View>

                <View style={styles.sectionFromGetData}>
                    <Text style={styles.label}>Valor total da compra</Text>
                    <TextInput 
                        style={styles.box}
                        keyboardType="numeric"
                        value={price}
                        onChangeText={(value) => setPrice(formatCurrency(value))}
                    />
                </View>

                <View style={styles.sectionFromGetData}>
                    <Text style={styles.label}>Valor total da compra</Text>
                    <TextInput 
                        style={[styles.box, {height: 100}]}
                        textBreakStrategy="balanced"
                    />
                </View>
            </View>

        </SafeAreaView>
    );
}