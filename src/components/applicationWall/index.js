import React from "react";
import { View, Text, Pressable } from "react-native";
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


// props: showValues, balance, visible(), activeButtons
export function ApplicationWall(props){


    return(
        <View style={[defaultPageStyle.box]}>

            <Text style={[defaultPageStyle.text, styles.title]}>
                Saldo aplicado
            </Text>

            <View>
                {
                    props.showValue ? 
                        <View style={styles.sectionValue}>
                            <Text style={[defaultPageStyle.text, styles.textValue]}>
                                {formatCurrency(props.balance)}
                            </Text>

                            <Pressable onPress={() => props.visible()}>
                                <EyeOpen data={styleIcon}/>
                            </Pressable>
                        </View>
                    : 
                        <View style={styles.sectionValue}>
                            <Text style={[defaultPageStyle.text, styles.textValue]}>
                                R$ ****
                            </Text>

                            <Pressable onPress={() => props.visible()}>
                                <EyeClose data={styleIcon}/>
                            </Pressable>
                        </View>
                }
            </View>

            {
                props.activeButtons && (
                    <View style={styles.sectionButtons}>
                        <View>
                            <Pressable style={styles.button}>
                                <View style={styles.iconArea}>
                                    <Cifrao/>
                                </View>

                                <View>
                                    <Text style={[defaultPageStyle.text, styles.text]}>
                                        Criar
                                    </Text>
                                    <Text style={[defaultPageStyle.text, styles.text]}>
                                        aplicação
                                    </Text>
                                </View>
                            </Pressable>
                        </View>

                        <View>
                            <Pressable style={styles.button}>
                                <View style={styles.iconArea}>
                                    <Extract data={styleIcon}/>
                                </View>

                                <View>
                                    <Text style={[defaultPageStyle.text, styles.text]}>
                                        Extrato
                                    </Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        </View>
    );
}