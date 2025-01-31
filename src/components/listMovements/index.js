import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles, stylesSmall, stylesBig } from "./styles";


//icons
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
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
                        
                        <View style={stylesSmall.sectionMovement}>
                            <View style={stylesSmall.sectionDescription}>
                                <View style={stylesSmall.sectionIcon}>
                                    <BackgroundIcon data={{width: "30", height: "50" }}/>
                                    {data.method === "card" && data.credit &&(<AntDesign style={{position: "absolute"}} name="creditcard" size={smallIconStyles.width} color={smallIconStyles.color}/>)}
                                    {data.method === "invoice" && (<Invoice style={stylesSmall.iconMovement} data={smallIconStyles}/>)}
                                    {data.method === "sendMoney" && (<SendMoney style={stylesSmall.iconMovement} data={smallIconStyles}/>)}
                                    {data.method === "receicedMoney" && (<ReceivedMoney style={stylesSmall.iconMovement} data={smallIconStyles}/>)}
                                    {data.method === "money" && (<Money style={stylesSmall.iconMovement} data={smallIconStyles}/>)}
                                </View>
                                <View>
                                    <Text style={stylesSmall.mainText}>{data.title}</Text>
                                    <Text style={stylesSmall.secondaryText}>{data.date}</Text>
                                </View>
                            </View>

                            <View style={{alignItems: "flex-end"}}>
                                <Text style={stylesSmall.mainText}>R$ {data.value}</Text>
                                <Text style={stylesSmall.secondaryText}>{data.installments}</Text>
                            </View> 
                        </View>

                        :

                        <View style={stylesBig.sectionMovement}>
                            <View style={stylesBig.sectionDescription}>
                                <View style={stylesBig.sectionIcon}>
                                    <BackgroundIcon data={{width: "42", height: "70"}}/>
                                    {data.method === "card" && data.credit &&(<AntDesign style={{position: "absolute"}} name="creditcard" size={bigIconStyles.width} color={bigIconStyles.color}/>)}
                                    {data.method === "invoice" && (<Invoice data={bigIconStyles}/>)}
                                    {data.method === "sendMoney" && (<SendMoney data={bigIconStyles}/>)}
                                    {data.method === "receicedMoney" && (<ReceivedMoney data={bigIconStyles}/>)}
                                    {data.method === "money" && (<Money data={bigIconStyles}/>)}
                                </View>
                                <View>
                                    <Text style={stylesBig.mainText}>{data.title}</Text>
                                    <Text style={stylesBig.secondaryText}>{data.date}</Text>
                                </View>
                            </View>

                            <View style={{alignItems: "flex-end"}}>
                                <Text style={stylesBig.mainText}>R$ {data.value}</Text>
                                <Text style={stylesBig.secondaryText}>{data.installments}</Text>
                            </View>
                        </View>
                }
            </View>
        </View>
    );
}
