import React, { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

// component
import { CustomText } from "../../../components/CustomText";
import { styles } from "./styles";
import { colorPattern } from "../../../themes";


function LabelInvoice({data, centerItem, index, selectedInvoice, selectColor}){

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


    const styleSelector = {...(selectedInvoice === index && {
        ...styles.selector,
        backgroundColor: color
    })};


    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                selectColor(color);
                centerItem(index);
            }
        }>
            <CustomText style={[styles.label, {color: color}]}>{data.label}</CustomText>
            <View style={styleSelector}/>
        </TouchableOpacity>
    );
}

export function InvoicesSubtitles({subtitles, invoiceIndex, selectAnInvoice, selectColor}){

    const flatListRef = useRef(null);


    useEffect(() => {
        subtitles.length > 1 && centerItem(invoiceIndex);
    }, [subtitles]);


    function centerItem(index){
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5
        });
        selectAnInvoice(index);
    }


    return(
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={subtitles}
                renderItem={({item, index}) => <LabelInvoice
                    data={item}
                    centerItem={() => centerItem(index)}
                    selectedInvoice={invoiceIndex}
                    index={index}
                    selectColor={selectColor}
                />}
                keyExtractor={(item) => String(item.invoice_id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<View style={styles.View}/>}
                ListFooterComponent={<View style={styles.View}/>}
                initialNumToRender={30}
                maxToRenderPerBatch={30}
                getItemLayout={(__, index) => ({length: 100, offset: 100 * index, index})}
            />
        </View>
    );
}