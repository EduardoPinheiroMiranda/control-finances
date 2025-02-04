import React from "react";
import { View } from "react-native";
import { Svg, Path} from "react-native-svg";


export function Bag({data}){


    return(
        <View>
            <Svg 
                width={data.size}
                height={data.size}
                viewBox="0 0 30 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path 
                    d="M18.75 13.75C18.75 15.8211 17.0711 17.5 15 17.5C12.9289 17.5 11.25 15.8211 11.25 13.75M25 8.75L22.5 3.75H7.5L5 8.75M25 8.75H5M25 8.75V22.5C25 23.8807 23.8807 25 22.5 25H7.5C6.11929 25 5 23.8807 5 22.5V8.75" 
                    stroke={data.color}
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}
