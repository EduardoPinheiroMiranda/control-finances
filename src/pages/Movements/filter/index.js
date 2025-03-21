import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../../themes/stylesDefault";


export function Filter(){

    const [date, setDate] = useState("");
    const [type, setType] = useState("");

    return(
        <View style={styles.container}>

            <View style={styles.modal}>

            <View style={styles.sectionInput}>
                    <Text style={[defaultPageStyle.text, styles.label]}>Período</Text>
                    <TextInput 
                        style={styles.input}
                        value={date}
                        onChangeText={(valu) => setDate(valu)}
                        placeholder="01/01/2025"
                    />
                </View>

                <View style={styles.sectionInput}>
                    <Text style={[defaultPageStyle.text, styles.label]}>Tipo de movimentação</Text>
                    <TextInput 
                        style={styles.input}
                        value={date}
                        onChangeText={(valu) => setDate(valu)}
                        placeholder="01/01/2025"
                    />
                </View>

            </View>
            
        </View>
    );
}