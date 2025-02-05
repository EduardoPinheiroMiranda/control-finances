import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";


export function Card({data}){


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
                    d="M2.08325 8.85925H22.9166" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M6.25 17.1926H8.33333" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M10.9375 17.1926H15.1042" 
                    stroke={data.color} stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M6.70825 3.65088H18.2812C21.9895 3.65088 22.9166 4.56755 22.9166 8.2238V16.7759C22.9166 20.4321 21.9895 21.3488 18.2916 21.3488H6.70825C3.01034 21.3592 2.08325 20.4426 2.08325 16.7863V8.2238C2.08325 4.56755 3.01034 3.65088 6.70825 3.65088Z" 
                    stroke={data.color}
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
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