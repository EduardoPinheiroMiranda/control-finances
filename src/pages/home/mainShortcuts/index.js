import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";

import { stylesDefault } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { colors } from "../../../themes";

import EyeOpen from "../../../assets/svg/eye-open.svg";
import EyeClosed from "../../../assets/svg/eye-closed.svg";
import Bag from "../../../assets/svg/bag.svg";
import InvoiceHome from "../../../assets/svg/invoiceHome.svg";
import Deposit from "../../../assets/svg/deposit.svg";
import MoneySend from "../../../assets/svg/money-send.svg";


export function MainShortcuts(props){


    return(
        <View style={[stylesDefault.box, styles.container]}>

            <View style={styles.sectionBalance}>
                <Text style={{fontSize: 16}}>Saldo total</Text>
                {
                    props.data.showValue ? 
                        <View style={styles.sectionValue}>
                            <Text style={{fontSize: 24}}>R$ {props.data.balance.toFixed(2)}</Text>
                            <Pressable onPress={props.show}>
                                <EyeOpen/>
                            </Pressable>
                            
                        </View>
                    :
                        <View style={styles.sectionValue}>
                            <Text style={{fontSize: 24}}>R$ ****</Text>
                            <Pressable onPress={props.show}>
                                <EyeClosed/>
                            </Pressable>
                        </View>
                }
            </View>

            <View style={styles.buttonArea}>
                <View style={styles.sectionButtonIcon}>
                    <View style={styles.buttonIcon}>
                        <Bag/>
                    </View>
                    <View>
                        <Text style={{fontSize: 14, color: colors.color_6, textAlign: "center"}}>Adicionar</Text>
                        <Text style={{fontSize: 14, color: colors.color_6, textAlign: "center"}}>Compra</Text>
                    </View> 
                </View>
                <View style={styles.sectionButtonIcon}>
                    <View style={styles.buttonIcon}>
                        <InvoiceHome/>
                    </View>
                    <Text style={{fontSize: 14, color: colors.color_6}}>Extrato</Text>
                </View>
                <View style={styles.sectionButtonIcon}>
                    <View style={styles.buttonIcon}>
                        <Deposit/>
                    </View>
                    <Text style={{fontSize: 14, color: colors.color_6}}>Deposito</Text>
                </View>
                <View style={styles.sectionButtonIcon}>
                    <View style={styles.buttonIcon}>
                        <MoneySend/>
                    </View>
                    <Text style={{fontSize: 14, color: colors.color_6}}>sacar</Text>
                </View>
            </View>
        </View>
    )
}
