import React from "react";
import PickerSelect from "react-native-picker-select";
import { View} from "react-native";
import { styles } from "./styles";

// components
import { CustomText } from "../CustomText";


export function SelectorBox({title, value, action, items, placeholder}){



    return(
        <View style={styles.container}>
            <CustomText style={styles.title}>{title}</CustomText>
            <View style={styles.sectionPicker}>
                <PickerSelect
                    value={value}
                    onValueChange={(value) => action(value)}
                    items={items}
                    placeholder={placeholder ? {label: "Selecione um item", value: null} : {}}
                    style={styles.picker}
                />
            </View>
        </View>
       
    );
}