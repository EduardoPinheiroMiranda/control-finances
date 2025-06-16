import { View } from "react-native";
import { styles } from "./styles";
import { colorPattern } from "../../../src/themes";
import { formatCurrency } from "../../../src/utils/formatCurrency";
import { format } from "date-fns";

//icons
import { BackgroundIcon } from "../../assets/svg/backgroundIcon";
import { Card } from "../../assets/svg/card";
import { Invoice } from "../../assets/svg/invoice";
import { Money } from "../../assets/svg/money";

// components
import { CustomText } from "../CustomText";


export function ListMovements({data}){

    const stylesIcons = {size: 25, color: colorPattern.black_900};
    const listIcons = [
        {type: "card", icon: <Card data={stylesIcons}/>},
        {type: "invoice", icon: <Invoice data={stylesIcons}/>},
        {type: "money", icon: <Money data={stylesIcons}/>},
    ];

    const icon = listIcons.find((icon) => icon.type === data.payment_method)


    return(
        <View style={ styles.container}>
            
            <View style={styles.sectionIcon}>
                <BackgroundIcon data={{width: 42, height: 70}}/>
                {icon.icon}
            </View>


            <View style={styles.movement}>

                <View style={styles.description}>
                    <CustomText style={styles.name} numberOfLines={1}>{data.name}</CustomText>
                    <CustomText style={styles.dueDate}>
                        {format(new Date(data.purchase_date), "dd/MM/yyyy")}
                    </CustomText>
                </View>

                <View style={styles.values}>
                    <CustomText style={styles.name}>{formatCurrency(data.value)}</CustomText>
                    <CustomText style={styles.dueDate}>{data.installment}</CustomText>
                </View>

            </View>
        </View>
    );
}
