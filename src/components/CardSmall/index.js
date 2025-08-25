import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

// icon
import  ChipSmall from "../../assets/svg/chipSmall.svg";

// components
import { CustomText } from "../CustomText";
import { format } from "date-fns";


export function CardSmall({data, showValue}){

    const colorFont = data.colorFont;
    const colorBackground = data.colorCard;
    const cardName = data.name;
    const expired = format(new Date().setDate(data.dueDay), "dd/MM");
    const valueUsed = 1000;


    return(
        <View style={styles.container}>

            <View style={[styles.card, {backgroundColor: colorBackground}]}>
                
                <View style={styles.header}>
                    <ChipSmall/>
                    <CustomText style={[{color: colorFont}]}>
                        {cardName}
                    </CustomText>
                </View>
                
                <View style={styles.footer}>
                    <CustomText  style={[
                        {
                            color: colorFont,
                            fontSize: 10,
                            fontWeight: "regular"
                        }
                    ]}>
                        Vencimento
                    </CustomText>
                    <View style={styles.sectionText}>
                        <CustomText style={[ styles.text, {color: colorFont}]}>
                            {expired}
                        </CustomText>

                        {
                            showValue ? 
                            <CustomText style={[styles.text, {color: colorFont}]}>
                                {formatCurrency(valueUsed)}
                            </CustomText>
                            :
                            <CustomText style={[styles.text, {color: colorFont}]}>
                                ****
                            </CustomText>
                        }

                    </View>
                </View>
            </View>

        </View>
    );
}