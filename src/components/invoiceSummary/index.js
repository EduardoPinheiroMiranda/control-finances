import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { colors } from "../../themes";
import { summary } from "../../../dataFromTest";

//icon
const styleIcons = {size: 15, color: colors.color_6};
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
import { Card } from "../../assets/svg/card";
import { Invoice } from "../../assets/svg/invoice";
import { Money } from "../../assets/svg/money";
import { formatCurrency } from "../../utils/formatCurrency";
import { DisplayMoreDetails } from "../displayMoreDetails";


function Movement(props){

    const value = props.data.reduce((sum, item) => sum + item.value, 0);
    
    
    return(
        <View>
            <View style={styles.title}>
                <Text>{props.title}</Text>
                <Text>{formatCurrency(value)}</Text>
            </View>

            <View>
                {
                    props.data.map((movement) => {
                        return(
                            <View style={styles.movementCard} key={movement.id}>
                                <View  style={styles.icon}>
                                    <BackgroundIcon data={{width: 30, height: 50}}/>
                                    {movement.type === "card" && (<Card data={styleIcons}/>)}
                                    {movement.type === "fixedExpense" && (<Invoice data={styleIcons}/>)}
                                    {movement.type === "extraExpense" && (<Money data={styleIcons}/>)}
                                </View>

                                <View style={styles.movementDescription}>
                                    <View>
                                        <Text style={styles.movementName}>{movement.name}</Text>
                                        <Text style={styles.movementExpired}>vencimento - {movement.expired}</Text>
                                    </View>

                                    <Text style={styles.movementName}>{(formatCurrency(movement.value))}</Text>
                                </View>   
                            </View>
                        );
                    })
                }
            </View>
        </View>
    );
}


export function InvoiceSummary({data}){

    const navigation = useNavigation();


    const card = summary.filter((movement) => {
        if(movement.type === "card"){
            return movement
        }
    });

    const fixedExpenses = summary.filter((movement) => {
        if(movement.type === "fixedExpense"){
            return movement
        }
    });

    const extraExpenses = summary.filter((movement) => {
        if(movement.type === "extraExpense"){
            return movement
        }
    });


    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.text}>Limite</Text>
                    <Text style={styles.text}>R$ 4000,00</Text>
                </View>
                <View>
                    <Text style={styles.text}>Utilizado</Text>
                    <Text style={styles.text}>R$ 4000,00</Text>
                </View>
                <View>
                    <Text style={styles.text}>Disponível</Text>
                    <Text style={styles.text}>R$ 4000,00</Text>
                </View>
            </View>

            <View>
                <Movement 
                    data={card} 
                    key="cards"
                    title="Cartões"
                />
                <Movement
                    data={fixedExpenses}
                    key="fixedExpenses"
                    title="Gastos fixos"
                />
                <Movement
                    data={extraExpenses}
                    key="extraExpenses"
                    title="Gastos extras"
                />
            </View>

            <DisplayMoreDetails data={{title: "Ver mais detalhes"}} nextPage={() => navigation.navigate("invoiceSummary")}/>

        </View>
    );
}