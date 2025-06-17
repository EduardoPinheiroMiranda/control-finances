import React, { useContext, useEffect, useState } from "react";
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


function LoadPage({showSpinner}){
    return(
        <Spinner showSpinner={showSpinner} size={38}/>
    );
}

function ConstructionPage({components, loadData, getData}){
    return(
         <FlatList
            data={components}
            renderItem={({item}) => item}
            keyExtractor={(item, index) => index.toString()}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<View style={{height: 30}}/>}
            refreshing={loadData}
            onRefresh={getData}
        />
    );
}

export function Home(){

    const { getData, applications, invoice, cards, movements } = useContext(FinancialSummaryContext);
    const [showValue, setShowValue] = useState(true);
    const [loadData, setLoadData] = useState(true);
    

    useEffect(() => {
        setLoadData(true);
        
            async function getStartData() {
                await getData();
            }
            getStartData();

        setLoadData(false);
    }, []);


    const components = [
        <ApplicationWall showValue={showValue}  applications={applications} visible={() => setShowValue(!showValue)} activeButtons={false}/>,
        <ConsumptionIndicator showValue={showValue} data={invoice} styleBig={false} showButton={true}/>,
        <DisplayCards showValue={showValue} cards={cards}/>,
        <RecentActivity data={movements}/>
    ]


    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <Header/>

            {loadData ? 
                <LoadPage showSpinner={loadData}/>
                    :
                <ConstructionPage
                    components={components}
                    getData={getData}
                    loadData={loadData}
                />
            }
        </SafeAreaView>
    )
}
