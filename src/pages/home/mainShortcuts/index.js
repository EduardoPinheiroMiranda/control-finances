import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";

import { stylesDefault } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { colors } from "../../../themes";

import { EyeOpen } from "../../../assets/svg/eyeOpen";
import { EyeClose } from "../../../assets/svg/eyeClose";
import { Bag } from "../../../assets/svg/bag";
import InvoiceHome from "../../../assets/svg/invoiceHome.svg";
import { Deposit } from "../../../assets/svg/deposit";
import MoneySend from "../../../assets/svg/money-send.svg";


const styleSvgs = {size: 30, color: colors.color_3}


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
                                <EyeOpen data={styleSvgs}/>
                            </Pressable>
                        </View>
                    :
                        <View style={styles.sectionValue}>
                            <Text style={{fontSize: 24}}>R$ ****</Text>
                            <Pressable onPress={props.show}>
                                <EyeClose data={styleSvgs}/>
                            </Pressable>
                        </View>
                }
            </View>

            <View style={styles.buttonArea}>

                <View style={styles.sectionButtonIcon}>
                    <View style={styles.buttonIcon}>
                        <Bag data={styleSvgs}/>
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
                        <Deposit data={styleSvgs}/>
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
