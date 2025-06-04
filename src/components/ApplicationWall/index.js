import React from "react";
import { View, Pressable } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

// icons
const styleIcon = {size: 30, color: colorPattern.black_900};
import { EyeOpen } from "../../assets/svg/eyeOpen";
import { EyeClose } from "../../assets/svg/eyeClose";
import { colorPattern } from "../../themes";
import { Extract } from "../../assets/svg/extract";
import Cifrao from "../../assets/svg/cifrao.svg";

// components
import { CustomText } from "../CustomText";


export function ApplicationWall({showValue, applications, visible, activeButtons}){

    let value = 0;

    if(applications.value){
        value = Number(applications.value);
    }

    
    return(
        <View style={[defaultPageStyle.box]}>

            <CustomText style={[styles.title]}>
                Saldo aplicado
            </CustomText>

            <View>
                {
                    showValue ? 
                        <View style={styles.sectionValue}>
                            <CustomText style={[styles.textValue]}>
                                {formatCurrency(value)}
                            </CustomText>

                            <Pressable onPress={() => visible()}>
                                <EyeOpen data={styleIcon}/>
                            </Pressable>
                        </View>
                    : 
                        <View style={styles.sectionValue}>
                            <CustomText style={[styles.textValue]}>
                                R$ ****
                            </CustomText>

                            <Pressable onPress={() => visible()}>
                                <EyeClose data={styleIcon}/>
                            </Pressable>
                        </View>
                }
            </View>

            {
                activeButtons && (
                    <View style={styles.sectionButtons}>
                        <View>
                            <Pressable style={styles.button}>
                                <View style={styles.iconArea}>
                                    <Cifrao/>
                                </View>

                                <View>
                                    <CustomText style={[styles.text]}>
                                        Criar
                                    </CustomText>
                                    <CustomText style={[styles.text]}>
                                        aplicação
                                    </CustomText>
                                </View>
                            </Pressable>
                        </View>

                        <View>
                            <Pressable style={styles.button}>
                                <View style={styles.iconArea}>
                                    <Extract data={styleIcon}/>
                                </View>

                                <View>
                                    <CustomText style={[styles.text]}>
                                        Extrato
                                    </CustomText>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        </View>
    );
}