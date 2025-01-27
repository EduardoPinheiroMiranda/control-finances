import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Path, Svg } from "react-native-svg";
import { styles } from "./styles";

//icons
import BackgroundIcon from "../../assets/svg/backgroundIcon";
import AntDesign from '@expo/vector-icons/AntDesign';
import SendMoney from "../../assets/svg/sendMoney";
import ReceivedMoney from "../../assets/svg/receivedMoney";
import Invoice from "../../assets/svg/invoice";
import Money from "../../assets/svg/money";
import { colors } from "../../themes";


export function ListMovements({data}){

    const [dimensions, setDimensions] = useState({width: 0, heigth: 0});

    const smallIconStyles = {width: 15, height: 15, color: colors.color_6};
    const bigIconStyles = {width: 25, height: 25, color: colors.color_6};


    function getDimensions(event){
        const { width, height } = event.nativeEvent.layout;
        setDimensions({ width, height });
    }
    

    return(
        <View style={ styles.container}>
            <View style={styles.cardMovement} onLayout={getDimensions}>
                {
                    dimensions.width <= 332 ? 
                        
                        <View style={styles.sectionMovement}>
                            <View style={styles.sectionDescription}>
                                <View style={styles.sectionIcon}>
                                    <BackgroundIcon data={{width: "30", height: "50"}}/>
                                    {data.method === "card" && data.credit &&(<AntDesign style={{position: "absolute"}} name="creditcard" size={smallIconStyles.width} color={smallIconStyles.color}/>)}
                                    {data.method === "invoice" && (<Invoice style={styles.iconMovement} data={smallIconStyles}/>)}
                                    {data.method === "sendMoney" && (<SendMoney style={styles.iconMovement} data={smallIconStyles}/>)}
                                    {data.method === "receicedMoney" && (<ReceivedMoney style={styles.iconMovement} data={smallIconStyles}/>)}
                                    {data.method === "money" && (<Money style={styles.iconMovement} data={smallIconStyles}/>)}
                                </View>
                                <View>
                                    <Text style={styles.mainText}>{data.title}</Text>
                                    <Text style={styles.secondaryText}>{data.date}</Text>
                                </View>
                            </View>

                            <View style={{alignItems: "flex-end"}}>
                                <Text style={styles.mainText}>R$ {data.value}</Text>
                                <Text style={styles.secondaryText}>{data.installments}</Text>
                            </View>
                        </View>

                        :

                        <View style={styles.sectionMovement}>
                            <View style={styles.sectionDescription}>
                                <View style={styles.sectionIcon}>
                                    <BackgroundIcon data={{width: "30", height: "50"}}/>
                                    {data.method === "card" && data.credit &&(<AntDesign style={{position: "absolute"}} name="creditcard" size={bigIconStyles.width} color={bigIconStyles.color}/>)}
                                    {data.method === "invoice" && (<Invoice data={bigIconStyles}/>)}
                                    {data.method === "sendMoney" && (<SendMoney data={bigIconStyles}/>)}
                                    {data.method === "receicedMoney" && (<ReceivedMoney data={bigIconStyles}/>)}
                                    {data.method === "money" && (<Money data={bigIconStyles}/>)}
                                </View>
                                <View>
                                    <Text style={styles.mainText}>{data.title}</Text>
                                    <Text style={styles.secondaryText}>{data.date}</Text>
                                </View>
                            </View>

                            <View style={{alignItems: "flex-end"}}>
                                <Text style={styles.mainText}>R$ {data.value}</Text>
                                <Text style={styles.secondaryText}>{data.installments}</Text>
                            </View>
                        </View>
                }
            </View>
        </View>
    );
}
