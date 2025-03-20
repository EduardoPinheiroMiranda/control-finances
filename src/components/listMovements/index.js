import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles, stylesSmall, stylesBig } from "./styles";
import { colorPattern } from "../../../src/themes";
import { formatCurrency } from "../../../src/utils/formatCurrency";

//icons
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
import { Card } from "../../assets/svg/card";
import { SendMoney } from "../../assets/svg/sendMoney";
import { ReceivedMoney } from "../../assets/svg/receivedMoney";
import { Invoice } from "../../assets/svg/invoice";
import { Money } from "../../assets/svg/money";



function Movement(props){


    return(
        <View style={props.style.sectionMovement}>
            <View style={props.style.sectionDescription}>
                <View style={props.style.sectionIcon}>
                    <BackgroundIcon data={props.backgroundIcon}/>
                    {
                        props.data.method === "card" && props.data.credit &&(
                            <Card data={props.styleIcons}
                            />
                        )
                    }
                    {
                        props.data.method === "invoice" && (
                            <Invoice data={props.styleIcons}
                            />
                        )
                    }
                    {
                        props.data.method === "sendMoney" && (
                            <SendMoney data={props.styleIcons}
                            />
                        )
                    }
                    {
                        props.data.method === "receicedMoney" && (
                            <ReceivedMoney data={props.styleIcons}
                            />
                        )
                    }
                    {
                        props.data.method === "money" && (
                            <Money data={props.styleIcons}
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
                <Text style={props.style.mainText}>{formatCurrency(props.data.value)}</Text>
                <Text style={props.style.secondaryText}>{props.data.installments}</Text>
            </View> 
        </View>
    );
}



export function ListMovements({data}){

    const [dimensions, setDimensions] = useState({width: 0, heigth: 0});

    const smallIconStyles = {size: 15, color: colorPattern.black_900};
    const bigIconStyles = {size: 25, color: colorPattern.black_900};


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
