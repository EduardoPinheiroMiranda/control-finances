import React from "react";
import { View } from "react-native";
import { stylesBig, stylesSmall } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

// icon
import ChipSmall from "../../assets/svg/chipSmall.svg";
import ChipBig from "../../assets/svg/chipBig.svg";

// components
import { CustomText } from "../CustomText";
import { format } from "date-fns";


export function Card({data, showValue, bigSize}){

    const customStyles = bigSize ? stylesBig : stylesSmall
    
    const colorFont = data.colorFont;
    const colorBackground = data.colorCard;
    const cardName = data.name;
    const expired = format(new Date().setDate(data.dueDay), "dd/MM");
    const valueUsed = 1000;


    return(
        <View style={customStyles.container}>

            <View style={[customStyles.card, {backgroundColor: colorBackground}]}>
                
                <View style={customStyles.header}>
                    {bigSize ? 
                        <ChipBig/>
                        :
                        <ChipSmall/>
                    }
                    
                    <CustomText
                        style={[
                            {color: colorFont},
                            customStyles.nameCard
                        ]}>
                        {cardName}
                    </CustomText>
                </View>
                
                <View style={customStyles.footer}>
                    <CustomText  style={[
                        customStyles.label,
                        {color: colorFont}
                    ]}>
                        Vencimento
                    </CustomText>
                    <View style={customStyles.sectionText}>
                        <CustomText style={[customStyles.text, {color: colorFont}]}>
                            {expired}
                        </CustomText>

                        {
                            showValue ? 
                            <CustomText style={[customStyles.text, {color: colorFont}]}>
                                {formatCurrency(valueUsed)}
                            </CustomText>
                            :
                            <CustomText style={[customStyles.text, {color: colorFont}]}>
                                ****
                            </CustomText>
                        }

                    </View>
                </View>
            </View>

        </View>
    );
}