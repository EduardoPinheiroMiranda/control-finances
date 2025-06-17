import React, { useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { styles } from "./styles";
import { FinancialSummaryContext } from "../../contexts/financialSummary";
import { format } from "date-fns";
import { formatCurrency } from "../../utils/formatCurrency";

// components
import { CustomText } from "../../components/CustomText";


export function PayInvoice(){

    const { invoice } = useContext(FinancialSummaryContext);

    const formtDueDate = format(invoice.due_date, "dd/MM/yyyy")


    return(
        <SafeAreaView style={defaultPageStyle.page}>
            <View style={styles.container}>

                <View style={styles.wallOfValues}>
                    <CustomText style={styles.dueDate}>Vencimento {formtDueDate}</CustomText>
                    <CustomText style={styles.amount}>{formatCurrency(invoice.amount)}</CustomText>
                </View>

            </View>
        </SafeAreaView>
    );
}