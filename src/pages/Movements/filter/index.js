import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../../themes/stylesDefault";
import { Picker } from "@react-native-picker/picker";

// components
import { Button } from "../../../components/button";


export function Filter(props){

    const [date, setDate] = useState("");
    const [type, setType] = useState("");


    function handlerFilter(){
        props.openFilter()
    }

    return(
        <View style={styles.container}>

            <View style={styles.modal}>

                <View style={styles.form}>
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
                        <Text style={[defaultPageStyle.text, styles.label]}>Movimentação</Text>
                        
                        <Picker
                            style={styles.picker}
                            selectedValue={type}
                            onValueChange={(item) => setType(item)}
                        >
                            <Picker.Item label="dinheiro" value="dinheiro"/>
                        </Picker>
                        {/* <TextInput 
                            style={styles.input}
                            value={date}
                            onChangeText={(valu) => setDate(valu)}
                            placeholder="01/01/2025"
                        /> */}
                    </View>
                </View>

                <Button title="Filtrar" action={handlerFilter}/>

            </View>

        </View>
    );
}