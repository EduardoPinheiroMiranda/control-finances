import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles, stylesSmall, stylesBig } from "./styles";
import { colorPattern } from "../../../src/themes";
import { formatCurrency } from "../../../src/utils/formatCurrency";
import { format } from "date-fns";

//icons
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
import { Card } from "../../assets/svg/card";
import { Invoice } from "../../assets/svg/invoice";
import { Money } from "../../assets/svg/money";



function Movement({data, style, styleIcons, backgroundIcon}){


    return(
        <View style={style.sectionMovement}>
            <View style={style.sectionDescription}>
                <View style={style.sectionIcon}>
                    <BackgroundIcon data={backgroundIcon}/>
                    {
                        data.payment_method === "card" && (
                            <Card data={styleIcons}
                            />
                        )
                    }
                    {
                        data.payment_method === "invoice" && (
                            <Invoice data={styleIcons}
                            />
                        )
                    }
                    {
                        data.payment_method === "money" && (
                            <Money data={styleIcons}
                            />
                        )
                    } 
                </View>

                <View>
                    <Text style={style.mainText}>{data.name}</Text>
                    <Text style={style.secondaryText}>
                        {format(new Date(data.created_at), "dd/MM/yyyy")}
                    </Text>
                </View>
            </View>

            <View style={{alignItems: "flex-end"}}>
                <Text style={style.mainText}>{formatCurrency(Number(data.value))}</Text>
                <Text style={style.secondaryText}>{data.total_installments}x</Text>
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
