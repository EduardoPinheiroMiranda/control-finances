import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";

import { stylesDefault } from "../../../themes/stylesDefault";
import { styles } from "./styles";
import { colors } from "../../../themes";

import { EyeOpen } from "../../../assets/svg/eyeOpen";
import { EyeClose } from "../../../assets/svg/eyeClose";
import { Bag } from "../../../assets/svg/bag";
import { Extract } from "../../../assets/svg/extract";
import { Deposit } from "../../../assets/svg/deposit";
import { Sacar } from "../../../assets/svg/sacar";


const styleSvgs = {size: 30, color: colors.color_6}
const buttonList = [
    { icon: <Bag data={styleSvgs}/>, label: ["Adicionar", "compras"] },
    { icon: <Extract data={styleSvgs}/>, label: ["Extrato"] },
    { icon: <Deposit data={styleSvgs}/>, label: ["Deposito"] },
    { icon: <Sacar data={styleSvgs}/>, label: ["Sacar"] },
]


function ShortcutButton({data}){

    
    return(
        <View style={styles.sectionButtonIcon}>
           <View style={styles.buttonIcon}>
                {data.icon}
            </View>
            <View>
                { data.label.map((label) => {
                    return( <Text style={styles.label}>{label}</Text> );
                })} 
            </View> 
        </View>
    );
}


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
                { 
                    buttonList.map((button) => {
                        return( <ShortcutButton data={button}/> );
                    })
                }
            </View>
        </View>
    )
}
