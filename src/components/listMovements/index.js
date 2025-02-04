import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles, stylesSmall, stylesBig } from "./styles";


//icons
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SendMoney } from "../../assets/svg/sendMoney";
import { ReceivedMoney } from "../../assets/svg/receivedMoney";
import { Invoice } from "../../assets/svg/invoice";
import { Money } from "../../assets/svg/money";
import { colors } from "../../themes";



function Movement(props){


    return(
        <View style={props.style.sectionMovement}>
            <View style={props.style.sectionDescription}>
                <View style={props.style.sectionIcon}>
                    <BackgroundIcon data={props.backgroundIcon}/>
                    {
                        props.data.method === "card" && props.data.credit &&(
                            <AntDesign 
                                style={props.style.iconMovement} 
                                name="creditcard" 
                                size={props.styleIcons.size} 
                                color={props.styleIcons.color}
                            />
                        )
                    }
                    {
                        props.data.method === "invoice" && (
                            <Invoice 
                                style={props.style.iconMovement} 
                                data={props.styleIcons}
                            />
                        )
                    }
                    {
                        props.data.method === "sendMoney" && (
                            <SendMoney 
                                style={props.style.iconMovement} 
                                data={props.styleIcons}
                            />
                        )
                    }
                    {
                        props.data.method === "receicedMoney" && (
                            <ReceivedMoney 
                                style={props.style.iconMovement} 
                                data={props.styleIcons}
                            />
                        )
                    }
                    {
                        props.data.method === "money" && (
                            <Money 
                                style={props.style.iconMovement} 
                                data={props.styleIcons}
                            />
                        )
                    } 
                </View>

                <View>
                    <Text style={props.style.mainText}>{props.data.title}</Text>
                    {
                        props.data.credit === true ?
                            <Text style={props.style.secondaryText}>
                                {props.data.cardName} - {props.data.date}
                            </Text>
                        :
                            <Text style={props.style.secondaryText}>
                                {props.data.date}
                            </Text>
                    }
                </View>
            </View>

            <View style={{alignItems: "flex-end"}}>
                <Text style={props.style.mainText}>R$ {props.data.value}</Text>
                <Text style={props.style.secondaryText}>{props.data.installments}</Text>
            </View> 
        </View>
    );
}



export function ListMovements({data}){

    const [dimensions, setDimensions] = useState({width: 0, heigth: 0});

    const smallIconStyles = {size: 15, color: colors.color_6};
    const bigIconStyles = {size: 25, color: colors.color_6};


    function getDimensions(event){
        const { width, height } = event.nativeEvent.layout;
        setDimensions({ width, height });
    }
    

    return(
        <View style={ styles.container}>
            <View style={styles.cardMovement} onLayout={getDimensions}>
                
                {
                    dimensions.width <= 332 ? 
                        <Movement 
                            data={data}
                            backgroundIcon={{width: 30, height: 50 }}
                            style={stylesSmall} 
                            styleIcons={smallIconStyles}
                        />
                        :
                        <Movement 
                            data={data}
                            backgroundIcon={{width: 42, height: 70 }}
                            style={stylesBig} 
                            styleIcons={bigIconStyles}
                        />
                }
            </View>
        </View>
    );
}
