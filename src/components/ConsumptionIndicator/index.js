import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { smallStyle, bigStyle } from "./styles";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

// components
import { ExpenseIndicator } from "../ExpenseIndicator";
import { Button } from "../Button";
import { CustomText } from "../CustomText";
import { ConsumptionLegend } from "../ConsumptionLegend";


export function ConsumptionIndicator({data, styleBig, showValue, showButton}){

    const navigation = useNavigation();

    const [dueDate, setDueDate] = useState("");
    const [styles, setStyles] = useState({});
    const [chartData, setChartData] = useState({value: 0, size: 130, strokeWidth: 10});


    useEffect(() => {
        
        styleBig ? setStyles(bigStyle) : setStyles(smallStyle);


        if(data.percentageSpent){

            setDueDate(format(new Date(data.dueDate), "dd/MM"));

            const bigGraph = {value: data.percentageSpent, size: 300, strokeWidth: 20};
            const smallGraph = {value: data.percentageSpent, size: 130, strokeWidth: 10};
            styleBig ? setChartData(bigGraph) : setChartData(smallGraph);
        }

    }, [data]);


    const displayMoreDatails = showButton && {
        title: "Ver mais detalhes",
        nextPage: () => navigation.navigate("expenseAnalysis")
    };


    return(
        <View style={[defaultPageStyle.box]}>
            
            <CustomText style={styles.title}>Vencimento - {dueDate}</CustomText>

            <View style={styles.sectionConsumer}>
                <ExpenseIndicator data={chartData} style={{marginTop: "3%"}}/>
                <ConsumptionLegend
                    style={!styleBig ? {flex: 1} : {width: "100%"}}
                    data={data}
                    showValue={showValue}
                    displayMoreDatails={displayMoreDatails}
                />
            </View>

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