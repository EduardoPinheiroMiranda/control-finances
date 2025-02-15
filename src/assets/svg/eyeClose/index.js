import React from "react";
import { View } from "react-native";
import { Svg, Path} from "react-native-svg";


export function EyeClose({data}){


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
                d="M15.0634 27.375V23.625M15.0634 23.625C24.4384 23.625 29.125 15.1875 29.125 13.3125C29.125 11.4375 24.4375 3 15.0625 3C5.6875 3 1 11.4375 1 13.3125C1 15.1875 5.68844 23.625 15.0634 23.625ZM10.2093 26.736L11.1805 23.1144M5.68656 24.8628L7.5625 21.6162M1.80381 21.8837L4.45506 19.2334M19.9157 26.736L18.9454 23.1144M24.4375 24.8628L22.5625 21.6153M28.3202 21.8837L25.669 19.2324"
                    stroke={data.color}
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}
