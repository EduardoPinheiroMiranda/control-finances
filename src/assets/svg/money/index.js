import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";


export function Money({data}){


    return(
        <View style={styles.container}>
            <Svg 
                width={data.size}
                height={data.size}
                viewBox="0 0 25 25" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path 
                    d="M0 5V18.75H22.5V5H0ZM1.25 6.25H21.25V17.5H1.25V6.25ZM3.75 7.5C3.75 8.19776 3.19776 8.75 2.5 8.75V10C3.87331 10 5 8.87331 5 7.5H3.75ZM10.625 7.5V8.75C9.59687 8.75 8.75 9.59687 8.75 10.625C8.75 11.6531 9.59687 12.5 10.625 12.5H11.875C12.2276 12.5 12.5 12.7724 12.5 13.125C12.5 13.4776 12.2276 13.75 11.875 13.75H10.625H8.75V15H10.625V16.25H11.875V15C12.9031 15 13.75 14.1531 13.75 13.125C13.75 12.0969 12.9031 11.25 11.875 11.25H10.625C10.2724 11.25 10 10.9776 10 10.625C10 10.2724 10.2724 10 10.625 10H11.875H13.75V8.75H11.875V7.5H10.625ZM17.5 7.5C17.5 8.87331 18.6267 10 20 10V8.75C19.3022 8.75 18.75 8.19776 18.75 7.5H17.5ZM23.75 7.5V20H2.5V21.25H25V7.5H23.75ZM2.5 13.75V15C3.19776 15 3.75 15.5522 3.75 16.25H5C5 14.8767 3.87331 13.75 2.5 13.75ZM20 13.75C18.6267 13.75 17.5 14.8767 17.5 16.25H18.75C18.75 15.5522 19.3022 15 20 15V13.75Z"
                    fill={data.color}
                />
            </Svg>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: "absolute"
    }
});