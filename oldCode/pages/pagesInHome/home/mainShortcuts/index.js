import React from "react";
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
import { formatCurrency } from "../../../utils/formatCurrency";
import { useNavigation } from "@react-navigation/native";


const styleSvgs = {size: 30, color: colors.color_6}
const buttonList = [
    { id: "1", icon: <Bag data={styleSvgs}/>, label: ["Adicionar", "compras"], nextPage: "addPurchase" },
    { id: "2", icon: <Extract data={styleSvgs}/>, label: ["Extrato"], nextPage: "finances" },
    { id: "3", icon: <Deposit data={styleSvgs}/>, label: ["Deposito"], nextPage: "finances" },
    { id: "4", icon: <Sacar data={styleSvgs}/>, label: ["Sacar"], nextPage: "finances" },
]


function ShortcutButton({data}){

    const navigation = useNavigation();

    
    return(
        <Pressable style={styles.sectionButtonIcon} onPress={() => navigation.navigate(data.nextPage)}>
           <View style={styles.buttonIcon}>
                {data.icon}
            </View>
            <View>
                { data.label.map((label) => {
                    return( <Text key={label} style={styles.label}>{label}</Text> );
                })} 
            </View> 
        </Pressable>
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
                            <Text style={{fontSize: 24}}>{formatCurrency(props.data.balance)}</Text>
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
                        return( <ShortcutButton key={button.id} data={button}/> );
                    })
                }
            </View>
        </View>
    )
}
