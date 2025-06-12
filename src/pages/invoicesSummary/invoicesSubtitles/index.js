import React, { useMemo, useRef } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

// component
import { CustomText } from "../../../components/CustomText";
import { styles } from "./styles";
import { colorPattern } from "../../../themes";


function LabelInvoice({data, centerItem, index}){

    const color = useMemo(() => {

        if(data.current === true){
            return colorPattern.blue_300;
        }

        if(data.pay){
            return colorPattern.green_900;
        }
        
        if(!data.pay){
            return colorPattern.orange_600;
        }

    }, [data])

   
    return(
        <TouchableOpacity onPress={() => centerItem(index)}>
            <CustomText style={[styles.label, {color: color}]}>{data.label}</CustomText>
        </TouchableOpacity>
    );
}

export function InvoicesSubtitles({subtitle}){

    const flatListRef = useRef(null);


    function centerItem(index){
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
            // viewPosition: 0.1
        });
    }

    return(
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={subtitle}
                renderItem={({item, index}) => <LabelInvoice data={item} centerItem={centerItem}/>}
                keyExtractor={(item) => item.invoice_id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<View style={styles.View}/>}
                ListFooterComponent={<View style={styles.View}/>}
                initialNumToRender={30}
                maxToRenderPerBatch={30}
            />
        </View>
    );
}