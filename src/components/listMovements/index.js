import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

//icons
import BackgroundIcon from "../../assets/svg/backgroundIcon.svg";
import AntDesign from '@expo/vector-icons/AntDesign';
import SendMoney from "../../assets/svg/sendMoney.svg";
import ReceivedMoney from "../../assets/svg/receivedMoney.svg";
import Invoice from "../../assets/svg/invoice.svg";
import Money from "../../assets/svg/money.svg";



export function ListMovements({data}){


    return(
        <View style={ styles.container}>
            <View>
                <BackgroundIcon/>
                {data.method === "card" && data.credit &&(<AntDesign name="creditcard" size={15} color="black"/>)}
                {data.method === "invoice" && (<Invoice/>)}
                {data.method === "SendMoney" && (<SendMoney/>)}
                {data.method === "ReceicedMoney" && (<ReceivedMoney/>)}
                {data.method === "Money" && (<Money/>)}
            </View>

            <View>
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
    }
});