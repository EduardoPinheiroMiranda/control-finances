import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { smallStyle, bigStyle } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { format } from "date-fns";

// components
import { ExpenseIndicator } from "../ExpenseIndicator";
import { DisplayMoreDetails } from "../DisplayMoreDetails";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button";
import { CustomText } from "../CustomText";

function ShowLegends({data, styles}){
    return(
        <View style={styles.legends}>
            <View style={styles.legendsOfValue}>
                <CustomText style={styles.valueText}>Limite:</CustomText>
                <CustomText style={styles.valueText}>{formatCurrency(data.limit)}</CustomText>
            </View>

            <View style={styles.legendsOfValue}>
                <CustomText style={styles.valueText}>Utilizado:</CustomText>
                <CustomText style={styles.valueText}>{formatCurrency(data.amount)}</CustomText>
            </View>

            <View style={styles.legendsOfValue}>
                <CustomText style={styles.valueText}>Disponivel:</CustomText>
                <CustomText style={styles.valueText}>{formatCurrency(data.available)}</CustomText>
            </View>
        </View>
    );
}

function HideLegends({styles}){
    return(
        <View style={styles.legends}>
            <View style={styles.legendsOfValue}>
                <CustomText style={styles.valueText}>Limite:</CustomText>
                <CustomText style={styles.valueText}>****</CustomText>
            </View>

            <View style={styles.legendsOfValue}>
                <CustomText style={styles.valueText}>Utilizado:</CustomText>
                <CustomText style={styles.valueText}>****</CustomText>
            </View>

            <View style={styles.legendsOfValue}>
                <CustomText style={styles.valueText}>Disponivel:</CustomText>
                <CustomText style={styles.valueText}>****</CustomText>
            </View>
        </View>
    );
}


export function ConsumptionIndicator({data, styleBig, showValue, showButton}){

    const navigation = useNavigation();

    const [dueDate, setDueDate] = useState("");
    const [styles, setStyles] = useState({});
    const [chartData, setChartData] = useState({value: 0, size: 130, strokeWidth: 10});

    const [limit, SetLimit] = useState(0);
    const [amount, SetAmount] = useState(0);
    const [available, SetAvailable] = useState(0);


    useEffect(() => {
        
        styleBig ? setStyles(bigStyle) : setStyles(smallStyle);


        if(data.percentageSpent){

            setDueDate(format(new Date(data.due_date), "dd/MM"));
            SetLimit(data.limit);
            SetAmount(data.amount);
            SetAvailable(data.available)
            
            if(styleBig){
                setChartData({value: data.percentageSpent, size: 300, strokeWidth: 20})
            }else{
                setChartData({value: data.percentageSpent, size: 130, strokeWidth: 10})
            }
        }

    }, [data])

   
    return(
        <View style={[defaultPageStyle.box]}>
            
            <CustomText style={styles.title}>Vencimento - {dueDate}</CustomText>

            <View style={styles.sectionConsumer}>
                <ExpenseIndicator data={chartData}/>
                {showValue ? 
                    <ShowLegends 
                        styles={styles} 
                        data={{limit, available, amount}}
                    /> 
                    : 
                    <HideLegends styles={styles}/>
                }
            </View>

            {showButton && 
                <DisplayMoreDetails 
                    title="Ver mais detalhes" 
                    nextPage={() => navigation.navigate("expenseAnalysis")}
                />
            }

            {!showButton && 
                <View style={styles.sectionButton}>
                    <Button 
                        title="Pagar fatura" 
                        action={() => console.log("adicionar navegação")}
                    />
                </View>
            }
        </View>
    );
}