import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { FinancialSummaryContext } from "../../contexts/financialSummary";

// components
import { Header } from "./header";
import { ApplicationWall } from  "../../components/ApplicationWall";
import { ConsumptionIndicator } from "../../components/ConsumptionIndicator";
import { DisplayCards } from "./displayCards";
import { RecentActivity } from "./recentActivity";
import { Spinner } from "../../components/Spinner";

export function Home(){

    const { getData, applications, invoice, cards, movements, loadData } = useContext(FinancialSummaryContext);
    const [showValue, setShowValue] = useState(true);
   

    const components = [
        <ApplicationWall 
            showValue={showValue} 
            applications={applications} 
            visible={() => setShowValue(!showValue)}
            activeButtons={false}
        />,
        <ConsumptionIndicator 
            showValue={showValue}
            data={invoice}
            styleBig={false}
            showButton={true}
        />,
        <DisplayCards showValue={showValue} cards={cards}/>,
        <RecentActivity data={movements}/>
    ]


    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <Header/>

            {loadData ? 
                <Spinner size={38}/>
                    :
                <FlatList
                    data={components}
                    renderItem={({item}) => item}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<View style={{height: 30}}></View>}
                    refreshing={loadData}
                    onRefresh={getData}
                />
            }
        </SafeAreaView>
    )
}
